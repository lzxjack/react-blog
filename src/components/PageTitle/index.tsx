import React from 'react';
import s from './index.scss';

interface Props {
  height?: string;
  title?: string;
  desc?: string;
}

const PageTitle: React.FC<Props> = ({ height = '300px', title, desc }) => {
  return (
    <div style={{ height }} className={s.box}>
      <div className={s.title}>{title}</div>
      {desc && <div className={s.desc}>{desc}</div>}
    </div>
  );
};

export default PageTitle;
