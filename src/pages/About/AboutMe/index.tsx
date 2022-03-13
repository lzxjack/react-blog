import React from 'react';

import MarkDown from '@/components/MarkDown';

import s from './index.scss';

interface Props {
  content?: string;
}

const AboutMe: React.FC<Props> = ({ content }) => {
  return <MarkDown content={content || ''} />;
};

export default AboutMe;
