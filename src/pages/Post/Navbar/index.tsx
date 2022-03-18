// import 'markdown-navbar/dist/navbar.css';

import './index.custom.scss';

import MarkNav from 'markdown-navbar';
import React from 'react';
import { connect } from 'react-redux';

import { setNavShow } from '@/redux/actions';

interface Props {
  content?: string;
  setNavShow?: Function;
}

const Navbar: React.FC<Props> = ({ content, setNavShow }) => {
  return (
    <MarkNav
      className='postNavBar'
      source={content || ''}
      headingTopOffset={16}
      ordered={false}
      onNavItemClick={() => setNavShow?.(false)}
    />
  );
};

export default connect(() => ({}), {
  setNavShow
})(Navbar);
