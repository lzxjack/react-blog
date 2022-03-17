import classNames from 'classnames';
import React from 'react';

import { defaultCommentAvatar } from '@/utils/constant';

import Emoji from './Emoji';
import s from './index.scss';
import { useEmoji } from './useEmoji';

const EditBox: React.FC = () => {
  const { textRef, text, setText, setStart } = useEmoji();

  return (
    <div className={s.editBox}>
      <div className={s.avatarBox}>
        <img src={defaultCommentAvatar} alt='avatar' className={s.editAvatar} />
      </div>
      <div className={s.editInputBox}>
        <div className={s.inputBox}>
          <div className={classNames(s.inputInfo, s.flex2)}>
            <div className={s.inputKey}>昵称</div>
            <input type='text' className={s.inputValue} placeholder='试试QQ号~' />
          </div>
          <div className={classNames(s.inputInfo, s.flex3)}>
            <div className={s.inputKey}>邮箱</div>
            <input type='text' className={s.inputValue} placeholder='必填' />
          </div>
          <div className={classNames(s.inputInfo, s.flex3)}>
            <div className={s.inputKey}>网址</div>
            <input type='text' className={s.inputValue} placeholder='选填' />
          </div>
        </div>
        <div className={s.textareaBox}>
          <textarea
            onSelect={() => setStart(textRef.current?.selectionStart as number)}
            ref={textRef}
            className={s.textarea}
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder='写点什么吗？&#10;可以在「昵称」处填写QQ号，自动获取「头像」和「QQ邮箱」！'
          />
        </div>
        <div className={s.commentBtns}>
          <Emoji />
          <div className={s.previewBtn}>预览</div>
          <div className={s.sendBtn}>发布</div>
        </div>
      </div>
    </div>
  );
};

export default EditBox;
