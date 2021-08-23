import marked from 'marked';
import hljs from 'highlight.js';
import './github-dark.css';
import './index.css';

const ArticleContent = props => {
    // 配置highlight
    hljs.configure({
        tabReplace: '',
        classPrefix: 'hljs-',
        languages: ['CSS', 'HTML', 'JavaScript', 'Python', 'TypeScript', 'Markdown'],
    });
    // 配置marked
    marked.setOptions({
        renderer: new marked.Renderer(),
        highlight: code => hljs.highlightAuto(code).value,
        gfm: true, //默认为true。 允许 Git Hub标准的markdown.
        tables: true, //默认为true。 允许支持表格语法。该选项要求 gfm 为true。
        breaks: true, //默认为false。 允许回车换行。该选项要求 gfm 为true。
    });
    return (
        <div
            className="markdownStyle animated bounceInUp"
            dangerouslySetInnerHTML={{
                __html: marked(props.content).replace(/<pre>/g, "<pre id='hljs'>"),
            }}
        ></div>
    );
};

export default ArticleContent;
