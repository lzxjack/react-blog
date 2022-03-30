import useUrlState from '@ahooksjs/use-url-state';
import { UserOutlined } from '@ant-design/icons';
import {
  useKeyPress,
  useLocalStorageState,
  useMemoizedFn,
  useMount,
  useRequest,
  useSafeState
} from 'ahooks';
import { message } from 'antd';
import classNames from 'classnames';
import React, { useRef } from 'react';
import { connect } from 'react-redux';
import sanitizeHtml from 'sanitize-html';

import { setAvatar, setEmail, setLink, setName } from '@/redux/actions';
import { storeState } from '@/redux/interface';
import { axiosAPI } from '@/utils/apis/axios';
import { DB } from '@/utils/apis/dbConfig';
import { setData } from '@/utils/apis/setData';
import { auth } from '@/utils/cloudBase';
import {
  adminUid,
  avatarArrLen,
  defaultCommentAvatarArr,
  emailApi,
  myAvatar,
  myEmail,
  myLink,
  myName,
  QQ
} from '@/utils/constant';
import { getRandomNum } from '@/utils/function';

import AdminBox from './AdminBox';
import Emoji from './Emoji';
import s from './index.scss';
import PreShow from './PreShow';

interface Props {
  msgRun?: Function;
  replyRun?: Function;
  isReply?: boolean;
  name?: string;
  link?: string;
  email?: string;
  avatar?: string;
  setAvatar?: Function;
  setEmail?: Function;
  setLink?: Function;
  setName?: Function;
  setShowReply?: Function;
  className?: string;
  replyName?: string;
  replyId?: string;
  title?: string;
  ownerEmail?: string;
}

const EditBox: React.FC<Props> = ({
  msgRun,
  replyRun,
  isReply = false,
  name,
  link,
  email,
  avatar,
  setAvatar,
  setEmail,
  setLink,
  setName,
  setShowReply,
  replyName,
  replyId,
  className,
  title,
  ownerEmail
}) => {
  const [search] = useUrlState();

  const nameRef = useRef(null);

  const [showAdmin, setShowAdmin] = useSafeState(false);
  const [showPre, setShowPre] = useSafeState(false);

  const [text, setText] = useSafeState('');

  const [localName, setLocalName] = useLocalStorageState('name');
  const [localEmail, setLocalEmail] = useLocalStorageState('email');
  const [localLink, setLocalLink] = useLocalStorageState('link');
  const [localAvatar, setLocalAvatar] = useLocalStorageState('avatar');

  const validateConfig = {
    name: {
      check: /^[\u4e00-\u9fa5_a-zA-Z0-9]{2,8}$/,
      content: name,
      errText: '昵称仅限中文、数字、字母，长度2~8！'
    },
    email: {
      check: /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/,
      content: email,
      errText: '请输入正确的邮箱地址！'
    },
    link: {
      check: /^$|^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/,
      content: link,
      errText: '请输入正确的url，或不填！'
    },
    text: {
      check: /^[\s\S]*.*[^\s][\s\S]*$/,
      content: text,
      errText: '请输入内容再发布~'
    }
  };

  const validate = useMemoizedFn(() => {
    Object.keys(validateConfig).forEach(item => {
      const { check, errText, content } =
        validateConfig[item as keyof typeof validateConfig];
      if (!check.test(content!)) {
        message.error(errText);
        throw new Error('breakForEach');
      }
    });
  });

  const checkAdmin = useMemoizedFn(() => {
    if (
      !adminLogined() &&
      (name === myName ||
        name === QQ ||
        email === myEmail ||
        link?.indexOf(myLink) !== -1)
    ) {
      message.warning('未登录不可以使用管理员账户（昵称、邮箱、网址）哦~');
      throw new Error('Not Admin');
    }
  });

  const submit = useMemoizedFn(async () => {
    try {
      validate();
      checkAdmin();

      const config = {
        DBName: DB.Msg,
        name: sanitizeHtml(name!),
        email: sanitizeHtml(email!),
        link: sanitizeHtml(link!),
        content: sanitizeHtml(text),
        date: new Date().getTime(),
        avatar: avatar
          ? avatar
          : defaultCommentAvatarArr[getRandomNum(0, avatarArrLen - 1)],
        postTitle: search.title || '',
        replyId: replyId || ''
      };

      const isTrue = await setData(config);

      if (isTrue) {
        if (isReply) {
          setShowReply?.();
          replyRun?.();
          email !== ownerEmail && informUser();
          informAdminReply();
        } else {
          msgRun?.();
          informAdminMsg();
        }
      } else {
        message.error('发布失败，请重试！');
      }
    } catch {}
  });

  const adminLogined = useMemoizedFn(() => {
    if (!auth.hasLoginState()) return false;
    if (auth.currentUser?.uid === adminUid) return true;
    return false;
  });

  useMount(() => {
    if (adminLogined()) {
      // 管理员已登录
      setName?.(myName);
      setEmail?.(myEmail);
      setLink?.(myLink);
      setAvatar?.(myAvatar);
      return;
    }
    localName && localName !== myName && setName?.(localName);
    localEmail && localEmail !== myEmail && setEmail?.(localEmail);
    localLink && localLink.indexOf(myLink) === -1 && setLink?.(localLink);
    localAvatar && setAvatar?.(localAvatar);
  });

  const handleName = useMemoizedFn(() => {
    const regQQ = /[1-9][0-9]{4,11}/;
    if (name === 'admin') {
      setShowAdmin(true);
      setName?.('');
      return;
    }
    if (!adminLogined() && (name === myName || name === QQ)) {
      message.warning('未登录不可以使用管理员账户哦~');
      setName?.('');
      return;
    }
    if (regQQ.test(name!)) {
      const avatarUrl = `https://q1.qlogo.cn/g?b=qq&nk=${name}&s=640`;
      const QQEmail = `${name}@qq.com`;
      setEmail?.(QQEmail);
      setAvatar?.(avatarUrl);
      setLocalEmail(QQEmail);
      setLocalAvatar(avatarUrl);
      setName?.('');
      return;
    }
    setLocalName(name);
  });

  useKeyPress(13, handleName, {
    target: nameRef
  });

  const openPreShow = useMemoizedFn(() => {
    if (!showPre && !text) {
      message.info('请写点什么再预览~');
      return;
    }
    setShowPre(showPre => !showPre);
  });

  const { run: informAdminMsg } = useRequest(
    () =>
      axiosAPI(emailApi, 'POST', {
        flag: 0,
        name,
        search: search.title || '',
        content: text,
        title
      }),
    {
      manual: true,
      onSuccess: () => {
        setText('');
        message.success(`发布${search.title ? '评论' : '留言'}成功！`);
      }
    }
  );

  const { run: informAdminReply } = useRequest(
    () =>
      axiosAPI(emailApi, 'POST', {
        flag: 1,
        owner: replyName,
        name,
        search: search.title || '',
        content: text,
        title
      }),
    {
      manual: true,
      onSuccess: () => {
        setText('');
        message.success('已通知站长！');
      }
    }
  );

  const { run: informUser } = useRequest(
    () =>
      axiosAPI(emailApi, 'POST', {
        flag: 2,
        owner: replyName,
        email: ownerEmail,
        name,
        search: search.title || '',
        content: text,
        title
      }),
    {
      manual: true,
      onSuccess: () => {
        message.success(`已通知${search.title ? '评论' : '留言'}者！`);
      }
    }
  );

  return (
    <div className={classNames(s.editBox, className)}>
      {isReply && (
        <div className={s.replyNameBox}>
          回复给「<span>{replyName}</span>」：
        </div>
      )}
      <div className={s.flex}>
        <AdminBox
          showAdmin={showAdmin}
          setShowAdmin={setShowAdmin}
          setName={setName}
          setEmail={setEmail}
          setLink={setLink}
          setAvatar={setAvatar}
        />

        <div className={s.avatarBoxCol}>
          <div className={s.avatarBox}>
            {avatar ? (
              <img src={avatar} className={s.editAvatar} />
            ) : (
              <UserOutlined className={s.noAvatar} />
            )}
          </div>
        </div>
        <div className={s.editInputBox}>
          <div className={s.inputBox}>
            <div className={classNames(s.inputInfo, s.flex2)}>
              <div className={s.inputKey}>昵称</div>
              <input
                ref={nameRef}
                type='text'
                className={s.inputValue}
                placeholder='QQ号'
                value={name}
                onChange={e => setName?.(e.target.value)}
                onBlur={handleName}
              />
            </div>
            <div className={classNames(s.inputInfo, s.flex3)}>
              <div className={s.inputKey}>邮箱</div>
              <input
                type='text'
                className={s.inputValue}
                placeholder='必填'
                value={email}
                onChange={e => setEmail?.(e.target.value)}
                onBlur={e => setLocalEmail(e.target.value)}
              />
            </div>
            <div className={classNames(s.inputInfo, s.flex3)}>
              <div className={s.inputKey}>网址</div>
              <input
                type='text'
                className={s.inputValue}
                placeholder='选填'
                value={link}
                onChange={e => setLink?.(e.target.value)}
                onBlur={e => setLocalLink(e.target.value)}
              />
            </div>
          </div>

          <div className={s.textareaBox}>
            <textarea
              className={s.textarea}
              value={text}
              onChange={e => setText(e.target.value)}
              placeholder='写点什么吗？支持markdown格式！&#10;可以在「昵称」处填写QQ号，自动获取「头像」和「QQ邮箱」！'
            />
          </div>
          <div className={s.commentBtns}>
            <Emoji />
            {isReply && (
              <div className={s.cancelBtn} onClick={() => setShowReply?.(false)}>
                取消
              </div>
            )}
            <div className={s.previewBtn} onClick={openPreShow}>
              预览
            </div>
            <div className={s.sendBtn} onClick={submit}>
              {isReply ? '回复' : ' 发布'}
            </div>
          </div>
        </div>
      </div>
      {showPre && <PreShow setShowPre={setShowPre} content={text} />}
    </div>
  );
};

export default connect(
  (state: storeState) => ({
    name: state.name,
    link: state.link,
    email: state.email,
    avatar: state.avatar
  }),
  {
    setAvatar,
    setEmail,
    setLink,
    setName
  }
)(EditBox);
