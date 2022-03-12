import { useMount, useSafeState } from 'ahooks';
import React from 'react';
import { connect } from 'react-redux';

import PageTitle from '@/components/PageTitle';
import { setNavShow } from '@/redux/actions';
import { siteTitle } from '@/utils/constant';
import useTop from '@/utils/hooks/useTop';

import Aside from './Aside';
import s from './index.scss';
import Section from './Section';

interface Props {
  setNavShow?: Function;
}

const getPoem = require('jinrishici');

const Home: React.FC<Props> = ({ setNavShow }) => {
  useTop(setNavShow!);

  const [poem, setPoem] = useSafeState('');
  useMount(() => {
    getPoem.load(
      (res: {
        data: {
          content: string;
        };
      }) => setPoem(res.data.content)
    );
  });

  return (
    <div>
      <PageTitle height='100vh' title={siteTitle} desc={poem || ''} />
      <div className={s.body}>
        <Section />
        <Aside />
      </div>
    </div>
  );
};

export default connect(() => ({}), { setNavShow })(Home);
