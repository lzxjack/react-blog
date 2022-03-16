import './hljs.custom.scss';

import { useMount } from 'ahooks';
import classNames from 'classnames';
import hljs from 'highlight.js';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

import s from './index.scss';

interface Props {
  content: string;
  className?: string;
}

const MarkDown: React.FC<Props> = ({ content, className }) => {
  useMount(() => {
    document
      .querySelectorAll('pre>code')
      .forEach(el => hljs.highlightElement(el as HTMLElement));
  });

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      linkTarget='_blank'
      className={classNames(s.marked, className)}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkDown;
