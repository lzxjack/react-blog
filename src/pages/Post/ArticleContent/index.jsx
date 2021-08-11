import marked from 'marked';
import useMarkdown from '../../../hooks/useMarkdown';
import './github-dark.css';
import './index.css';

const ArticleContent = props => {
    useMarkdown();
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
