import classNames from 'classnames';
import React from 'react';

import Card from '../Card';
import PageTitle from '../PageTitle';
import s from './index.scss';

interface Props {
  title?: string;
  className?: string;
}

const Layout: React.FC<Props> = ({ title, className, children }) => {
  return (
    <>
      <PageTitle title={title} />
      <Card isStatic={true} className={classNames(s.layoutCard, className)}>
        {children}
      </Card>
    </>
  );
};

export default Layout;
