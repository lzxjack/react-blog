import React from 'react';

import AboutText from './AboutText';
import Chart from './Chart';

interface Props {
  content?: string;
}

const AboutSite: React.FC<Props> = ({ content }) => {
  return (
    <>
      <Chart />
      <AboutText content={content || ''} />
    </>
  );
};

export default AboutSite;
