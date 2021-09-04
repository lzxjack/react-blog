import './index.css';

const Switch = props => (
    <div className="Switch-box theme-color-1" onClick={() => props.setIsMe(!props.isMe)}>
        <div
            className={props.isMe ? 'switch-btn theme-color-2 is-me' : 'switch-btn theme-color-2'}
        ></div>
    </div>
);

export default Switch;
