import './index.css';
import useScript from '../../../hooks/useScript';
import { twikooUrl, twikooConfigUrl } from '../../../utils/constant';

const Comments = () => {
    useScript(twikooUrl, twikooConfigUrl);
    return (
        <div className="standard-page-comments">
            <div id="tcomment"></div>
        </div>
    );
};

export default Comments;
