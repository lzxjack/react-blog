import classNames from 'classnames';
import React, { MouseEventHandler } from 'react';

import s from './index.scss';

interface Props {
  viewUrl: string;
  isViewShow: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
}

const ImgView: React.FC<Props> = ({ viewUrl, isViewShow, onClick }) => {
  return (
    <div className={classNames(s.view, { [s.show]: isViewShow })} onClick={onClick}>
      <img className={s.img} src={viewUrl} />
    </div>
  );
};

export default ImgView;
