import React from 'react';

import MainImage from './mainimage';
import AboutUs from './aboutus';

import '../App.css';

function HomePage(props) {
    return (
        <React.Fragment>
            <MainImage />
            <AboutUs />
        </React.Fragment>
    )
}

export default HomePage;