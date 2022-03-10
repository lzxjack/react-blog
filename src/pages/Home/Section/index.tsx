import React from 'react';
import PostCard from './PostCard';
import s from './index.scss';

const Section: React.FC = () => {
  return (
    <section className={s.section}>
      <PostCard
        title='JavaScript 作用域、作用域链的理解'
        content={'JavaScript 作用域、作用域链的理解'.repeat(100)}
        time='2021-10-20'
        tags={['React', 'JavaScript', 'Git']}
      />
      <PostCard
        title='JavaScript 作用域、作用域链的理解'
        content={'JavaScript 作用域、作用域链的理解'.repeat(100)}
        time='2021-10-20'
        tags={['React', 'JavaScript', 'Git']}
      />
      <PostCard
        title='JavaScript 作用域、作用域链的理解'
        content={'JavaScript 作用域、作用域链的理解'.repeat(100)}
        time='2021-10-20'
        tags={['React', 'JavaScript', 'Git']}
      />
    </section>
  );
};

export default Section;
