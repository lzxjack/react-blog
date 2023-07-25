import './hljs.custom.scss';

import classNames from 'classnames';
import hljs from 'highlight.js';
import marked from 'marked';
import React from 'react';

import s from './index.scss';

interface Props {
  content?: string;
  className?: string;
}

hljs.configure({
  classPrefix: 'hljs-',
  languages: ['CSS', 'HTML', 'JavaScript', 'TypeScript', 'Markdown']
});
marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: code => hljs.highlightAuto(code).value,
  gfm: true, // 默认为true。 允许 Git Hub标准的markdown.
  breaks: true // 默认为false。 允许回车换行。该选项要求 gfm 为true。
});

const MarkDown: React.FC<Props> = ({ content, className }) => {
  return (
    <div
      className={classNames(s.marked, className)}
      dangerouslySetInnerHTML={{
        __html: marked(content || '').replace(/<pre>/g, "<pre id='hljs'>")
      }}
    />
  );
};

export default MarkDown;
