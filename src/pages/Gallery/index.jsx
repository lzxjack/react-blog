import { Route, Switch, Redirect } from 'react-router-dom';
import GalleryOutline from './GalleryOutline';
import TheGallery from './TheGallery';
import './index.css';

const Gallery = props => {
    return (
        <Switch>
            <Route path="/gallery/one" component={TheGallery} />
            <Route path="/gallery" component={GalleryOutline} />
            <Redirect to="/gallery" />
        </Switch>
    );
};

export default Gallery;
