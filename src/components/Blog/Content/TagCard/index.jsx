import { connect } from 'react-redux';
import './index.css';

const TagCard = props => {
    // const tagColor = [
    //     'rgb(236, 17, 17)',
    //     'rgb(236, 141, 17)',
    //     'rgb(177, 174, 11)',
    //     'rgb(116, 115, 109)',
    //     'rgb(77, 75, 65)',
    //     'rgb(35, 207, 50)',
    //     'rgb(38, 204, 162)',
    //     'rgb(11, 156, 120)',
    //     'rgb(4, 187, 211)',
    //     'rgb(7, 133, 206)',
    //     'rgb(7, 64, 151)',
    //     'rgb(9, 24, 235)',
    //     'rgb(157, 160, 212)',
    //     'rgb(144, 76, 235)',
    //     'rgb(209, 76, 235)',
    //     'rgb(224, 19, 224)',
    //     'rgb(238, 45, 126)',
    //     'rgb(253, 48, 65)',
    //     '#f50',
    //     '#2db7f5',
    //     '#87d068',
    //     '#108ee9',
    // ];
    // const colorLen = tagColor.length;
    return (
        <div className="animated bounceInRight">
            <div className="TagCard-box transparent-box">
                {props.tags.map(item => (
                    <span
                        className="theTag common-hover"
                        // style={{ color: tagColor[(index + 1) % colorLen] }}
                        // onDoubleClick={() => openEditModal(item._id, item.tag)}
                        key={item._id}
                    >
                        {item.tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default connect(
    state => ({
        tags: state.tags,
    }),
    {}
)(TagCard);
