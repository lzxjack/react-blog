import { useState } from 'react';
import CopyIcon from './CopyIcon';
import CopyrightIcon from './CopyrightIcon';
import copy from 'copy-to-clipboard';
import './index.css';

const Copyright = props => {
    const { url, title } = props;
    const [showCopySuccess, setShowCopySuccess] = useState(false);
    const copyUrl = () => {
        if (copy(url)) {
            setShowCopySuccess(true);
            setTimeout(() => {
                setShowCopySuccess(false);
            }, 2000);
        }
    };
    return (
        <>
            <div
                className={
                    showCopySuccess
                        ? 'copyed-success theme-color show-copyed-success'
                        : 'copyed-success theme-color'
                }
            >
                复制成功！
            </div>
            <div className="Copyright-box theme-color-1">
                <CopyrightIcon />
                {/* <div className="copyright-center"> */}
                <div className="copyright-title">{title}</div>
                <div className="copyright-url" id="copyright-url-text">
                    {url}
                    <div className="copy-icon-btn common-hover" onClick={copyUrl}>
                        <CopyIcon />
                    </div>
                </div>
                <div className="copyright-text">
                    本站所有文章除特别声明外，均采用
                    <a
                        href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                        target="_blank"
                        className="copyright-name common-hover"
                        rel="noreferrer"
                    >
                        CC BY-NC-SA 4.0
                    </a>
                    许可协议，转载请注明来自
                    <a
                        href="https://lzxjack.top/"
                        target="_blank"
                        className="copyright-name common-hover"
                        rel="noreferrer"
                    >
                        飞鸟
                    </a>
                    。
                </div>
                {/* </div> */}
            </div>
        </>
    );
};

export default Copyright;
