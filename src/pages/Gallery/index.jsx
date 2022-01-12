import { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './index.css';

const GalleryOutline = lazy(() => import('./GalleryOutline'));
const TheGallery = lazy(() => import('./TheGallery'));

const Gallery = () => (
    <Suspense fallback={null}>
        <Switch>
            <Route path="/gallery/one" component={TheGallery} />
            <Route path="/gallery" component={GalleryOutline} />
            <Redirect to="/gallery" />
        </Switch>
    </Suspense>
);

export default Gallery;
