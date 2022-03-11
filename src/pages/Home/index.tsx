import React from 'react';
import PageTitle from '@/components/PageTitle';
import { siteTitle } from '@/utils/constant';
import Section from './Section';
import Aside from './Aside';
import useTop from '@/utils/hooks/useTop';
import { connect } from 'react-redux';
import { setNavShow } from '@/redux/actions';
import { useMount, useSafeState } from 'ahooks';
import s from './index.scss';

type Props = {
  setNavShow: Function;
};

const getPoem = require('jinrishici');

const Home: React.FC<Props> = ({ setNavShow }) => {
  useTop(setNavShow);

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
