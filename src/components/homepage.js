import React, {Fragment} from 'react';

import AboutUs from './aboutus';
import SlideShow from '../slideShow/containers/slideshow';

import '../App.css';

const HomePage = () => {
    return (
        <Fragment>
            <SlideShow />         
            <AboutUs />
        </Fragment>
    )
}

export default HomePage;