import React from 'react';
import BlogCard from './BlogCard';
import AccountCard from './AccountCard';
import DataCard from './DataCard';
import NoticeCard from './NoticeCard';
import ClockCard from './ClockCard';
import TagCard from './TagCard';
import SiteCard from './SiteCard';
import s from './index.scss';

const Aside: React.FC = () => {
  return (
    <aside className={s.aside}>
      <BlogCard />
      <AccountCard />
      <DataCard />
      <NoticeCard />
      <ClockCard />
      <TagCard />
      <SiteCard />
    </aside>
  );
};

export default Aside;
