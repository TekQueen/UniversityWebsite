import React, {Fragment} from 'react';

import MainImage from './mainimage';
import AboutUs from './aboutus';

import '../App.css';

const HomePage = () => {
    return (
        <Fragment>
            <MainImage />
            <AboutUs />
        </Fragment>
    )
}

export default HomePage;