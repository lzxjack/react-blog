import classNames from 'classnames';
import React from 'react';

import s from './index.scss';

interface Props {
  state: boolean;
  toggle: Function;
}

const Switch: React.FC<Props> = ({ state, toggle }) => {
  return (
    <div className={s.switch}>
      <div className={classNames(s.site, { [s.titleOff]: state })}>关于本站</div>
      <div className={s.box} onClick={() => toggle()}>
        <div className={classNames(s.btn, { [s.isMe]: state })} />
      </div>
      <div className={classNames(s.me, { [s.titleOff]: !state })}>关于我</div>
    </div>
  );
};

export default Switch;
