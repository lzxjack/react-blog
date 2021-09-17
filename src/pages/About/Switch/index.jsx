import './index.css';

const Switch = props => {
    const { isMe, setIsMe } = props;
    return (
        <div className="Switch-box theme-color-1" onClick={() => setIsMe(!isMe)}>
            <div
                className={isMe ? 'switch-btn theme-color-2 is-me' : 'switch-btn theme-color-2'}
            ></div>
        </div>
    );
};

export default Switch;
