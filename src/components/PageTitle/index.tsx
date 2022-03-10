import React from 'react';
import s from './index.scss';

type Props = {
  height?: string;
  title?: string;
  desc?: string;
};

const PageTitle: React.FC<Props> = ({ height = '300px', title, desc }) => {
  return (
    <div style={{ height }} className={s.box}>
      <h1 className={s.title}>{title}</h1>
      {desc && <h3 className={s.desc}>{desc}</h3>}
    </div>
  );
};

export default PageTitle;
