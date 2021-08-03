import './index.css';

const Switch = props => (
    <div className="Switch-box" onClick={() => props.setIsMe(!props.isMe)}>
        <div className={props.isMe ? 'switch-btn is-me' : 'switch-btn'}></div>
    </div>
);

export default Switch;
