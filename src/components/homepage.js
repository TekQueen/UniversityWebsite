import React, {Fragment} from 'react';

import AboutUs from './aboutus';
import SlideShow from '../slideShow/containers/slideshow';
import ContactUs from '../contactUs/containers/contactUs';

import '../App.css';

const HomePage = () => {
    return (
        <Fragment>
            <SlideShow />         
            <AboutUs />
            <ContactUs />
        </Fragment>
    )
}

export default HomePage;