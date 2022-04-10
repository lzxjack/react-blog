import React from 'react';

import MarkDown from '@/components/MarkDown';

interface Props {
  content?: string;
  className?: string;
}

const AboutMe: React.FC<Props> = ({ content, className }) => {
  return (
    <div className={className}>
      <MarkDown content={content || ''} />
    </div>
  );
};

export default AboutMe;
