import classNames from 'classnames';
import React from 'react';

import s from './index.scss';

interface Props {
  viewUrl?: string;
  isViewShow?: boolean;
  setIsViewShow?: Function;
}

const ImgView: React.FC<Props> = ({ viewUrl, isViewShow, setIsViewShow }) => {
  return (
    <div
      className={classNames(s.view, { [s.show]: isViewShow })}
      onClick={() => setIsViewShow?.(false)}
    >
      <img className={s.img} src={viewUrl} />
    </div>
  );
};

export default ImgView;
