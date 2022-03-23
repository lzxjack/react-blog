import { useEventTarget, useMemoizedFn } from 'ahooks';
import { message } from 'antd';
import classNames from 'classnames';
import React from 'react';

import { authLogin } from '@/utils/apis/authLogin';

import s from './index.scss';

interface Props {
  showAdmin?: boolean;
  setShowAdmin?: Function;
}

const AdminBox: React.FC<Props> = ({ showAdmin = false, setShowAdmin }) => {
  const [adminEmail, { reset: clearAdminEmail, onChange: adminEmailChange }] =
    useEventTarget({
      initialValue: ''
    });
  const [adminPwd, { reset: clearAdminPwd, onChange: adminPwdChange }] = useEventTarget({
    initialValue: ''
  });

  const hideAdmin = useMemoizedFn(() => {
    setShowAdmin?.(false);
    clearAdminEmail();
    clearAdminPwd();
  });

  const adminLogin = useMemoizedFn(async () => {
    if (await authLogin(adminEmail!, adminPwd!)) {
      message.success('登陆成功！');
      hideAdmin();
    } else {
      message.error('登陆失败，请重试！');
    }
  });

  return (
    <div className={s.adminBox} style={{ top: showAdmin ? '0' : '100%' }}>
      <div className={s.itemBox}>
        <div className={s.adminKey}>邮箱</div>
        <input
          type='text'
          className={s.adminValue}
          value={adminEmail}
          onChange={adminEmailChange}
        />
      </div>
      <div className={s.itemBox}>
        <div className={s.adminKey}>密码</div>
        <input
          type='password'
          className={s.adminValue}
          value={adminPwd}
          onChange={adminPwdChange}
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
