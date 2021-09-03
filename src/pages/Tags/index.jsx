import { connect } from 'react-redux';
import PageTitle from '../../components/Blog/Content/PageTitle';
import { setNavShow } from '../../redux/actions';
import useToTop from '../../hooks/useToTop';
import './index.css';

const Tags = props => {
    // 返回顶部
    useToTop(props, true);
    const toSomeArts = tag => {
        props.history.push(`/artTag?tag=${tag}`);
    };
    return (
        <>
            <PageTitle title="标签" />
            <div className="standard-page-box tags-box animated bounceInLeft">
                {props.tags.map(item => (
                    <span
                        className="theTag tags-item common-hover"
                        key={item._id}
                        onClick={() => toSomeArts(item.tag)}
                    >
                        {item.tag}
                    </span>
                ))}
            </div>
        </>
    );
};

export default connect(
    state => ({
        tags: state.tags,
    }),
    { setNavShow }
)(Tags);
