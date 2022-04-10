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
  className?: string;
}

const AboutSite: React.FC<Props> = ({ content, classes, artSum, className }) => {
  return (
    <div className={className}>
      <Chart classes={classes} artSum={artSum} />
      <AboutText content={content} />
    </div>
  );
};

export default AboutSite;
