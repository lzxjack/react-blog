// import 'markdown-navbar/dist/navbar.css';

import MarkNav from 'markdown-navbar';
import React from 'react';

import s from './index.scss';

interface Props {
  content?: string;
}

const Navbar: React.FC<Props> = ({ content }) => {
  return (
    <MarkNav className='article-menu' source={content || ''} headingTopOffset={80} />
  );
};

export default Navbar;
