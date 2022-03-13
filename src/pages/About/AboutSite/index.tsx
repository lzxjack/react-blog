import React from 'react';

import AboutText from './AboutText';
import Chart from './Chart';

export interface ClassType {
  class: string;
  count: number;
  _id: string;
  _openid: string;
}

interface Props {
  content?: string;
  classes?: ClassType[];
  artSum?: number;
}

const AboutSite: React.FC<Props> = ({ content, classes, artSum }) => {
  return (
    <>
      <Chart classes={classes} artSum={artSum} />
      <AboutText content={content} />
    </>
  );
};

export default AboutSite;
