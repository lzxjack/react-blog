import React from 'react';

import { icp_no,icp_site, source_github } from '@/utils/constant';

import s from './index.scss';

const Footer: React.FC = () => {
  const frameArr = ['React', 'Redux', 'AntD', 'CloudBase'];

  return (
    <footer className={s.footer}>
      <span>
        个人博客系统
        <a href={source_github} target='_blank' rel='noreferrer' className={s.text}>
          「源代码」
        </a>
      </span>
      <span>
        <a href={icp_site} target='_blank' rel='noreferrer' className={s.text}>
          {icp_no}
        </a>
      </span>
      <span>
        {frameArr.map((item, index) => (
          <span className={s.siteFrame} key={index}>
            {item}
          </span>
        ))}
      </span>
    </footer>
  );
};

export default Footer;
