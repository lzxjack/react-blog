import './index.css';

const Switch = ({ isMe, setIsMe }) => (
    <div className="Switch-box theme-color-1" onClick={() => setIsMe(!isMe)}>
        <div className={isMe ? 'switch-btn theme-color-2 is-me' : 'switch-btn theme-color-2'}></div>
    </div>
);

export default Switch;
