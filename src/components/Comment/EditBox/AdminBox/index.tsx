import { useKeyPress, useMemoizedFn, useSafeState } from 'ahooks';
import { message } from 'antd';
import classNames from 'classnames';
import React, { useRef } from 'react';

import { authLogin } from '@/utils/apis/authLogin';
import { myAvatar70, myEmail, myLink, myName } from '@/utils/constant';

import s from './index.scss';

interface Props {
  showAdmin?: boolean;
  setShowAdmin?: Function;
  setName?: Function;
  setEmail?: Function;
  setLink?: Function;
  setAvatar?: Function;
}

const AdminBox: React.FC<Props> = ({
  showAdmin = false,
  setShowAdmin,
  setName,
  setEmail,
  setLink,
  setAvatar
}) => {
  const pwdRef = useRef(null);

  const [adminEmail, setAdminEmail] = useSafeState('');
  const [adminPwd, setAdminPwd] = useSafeState('');

  const hideAdmin = useMemoizedFn(() => {
    setShowAdmin?.(false);
    setAdminEmail('');
    setAdminPwd('');
  });

  const adminLogin = useMemoizedFn(async () => {
    if (await authLogin(adminEmail!, adminPwd!)) {
      message.success('登陆成功！');
      setName?.(myName);
      setEmail?.(myEmail);
      setLink?.(myLink);
      setAvatar?.(myAvatar70);
      hideAdmin();
    } else {
      message.error('登陆失败，请重试！');
    }
  });

  useKeyPress(13, () => adminLogin(), {
    target: pwdRef
  });

  return (
    <div className={s.adminBox} style={{ top: showAdmin ? '0' : '100%' }}>
      <div className={s.itemBox}>
        <div className={s.adminKey}>邮箱</div>
        <input
          type='text'
          className={s.adminValue}
          value={adminEmail}
          onChange={e => setAdminEmail(e.target.value)}
        />
      </div>
      <div className={s.itemBox}>
        <div className={s.adminKey}>密码</div>
        <input
          ref={pwdRef}
          type='password'
          className={s.adminValue}
          value={adminPwd}
          onChange={e => setAdminPwd(e.target.value)}
        />
      </div>
      <div className={classNames(s.itemBox, s.adminBtns)}>
        <div className={s.adminBtn} onClick={hideAdmin}>
          取消
        </div>
        <div className={s.adminBtn} onClick={adminLogin}>
          登录
        </div>
      </div>
    </div>
  );
};

export default AdminBox;
