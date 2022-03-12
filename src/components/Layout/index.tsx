import { useTitle } from 'ahooks';
import classNames from 'classnames';
import React from 'react';
import { connect } from 'react-redux';

import { setNavShow } from '@/redux/actions';
import { siteTitle } from '@/utils/constant';
import useTop from '@/utils/hooks/useTop';

import Card from '../Card';
import LayoutLoading from '../LayoutLoading';
import PageTitle from '../PageTitle';
import s from './index.scss';

interface Props {
  title?: string;
  className?: string;
  setNavShow?: Function;
  loading?: boolean;
}

const Layout: React.FC<Props> = ({ title, className, setNavShow, loading, children }) => {
  title && useTitle(`${siteTitle} | ${title}`);
  setNavShow && useTop(setNavShow);

  return (
    <>
      <PageTitle title={title} />
      <Card isStatic={true} className={classNames(s.layoutCard, className)}>
        {loading ? <LayoutLoading /> : children}
      </Card>
    </>
  );
};

export default connect(() => ({}), { setNavShow })(Layout);
