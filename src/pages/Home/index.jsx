// import { useState, useEffect } from 'react';
import ArtList from './ArtList';
import PageNav from './PageNav';
import BlogCard from '../../components/Blog/Content/BlogCard';
import BlogData from '../../components/Blog/Content/BlogData';
import SocialCard from '../../components/Blog/Content/SocialCard';
import ClockCard from '../../components/Blog/Content/ClockCard';
import TagCard from '../../components/Blog/Content/TagCard';
import SiteCard from '../../components/Blog/Content/SiteCard';
import './index.css';

const Home = () => {
    // const [isFixed, setIsFixed] = useState(false);
    // useEffect(() => {
    //     window.addEventListener('scroll', () => {
    //         if (window.pageYOffset >= 720) {
    //             setIsFixed(true);
    //         } else {
    //             setIsFixed(false);
    //         }
    //     });
    // });
    return (
        <div className="Home-box">
            <div className="home-main">
                <ArtList />
                <PageNav />
            </div>
            <div
                // className={
                //     isFixed
                //         ? 'animated bounceInRight home-aside aside-fixed'
                //         : 'animated bounceInRight home-aside'
                // }
                className="home-aside"
            >
                <BlogCard />
                <SocialCard />
                <BlogData />
                <ClockCard />
                <TagCard />
                <SiteCard />
            </div>
        </div>
    );
};

export default Home;
