import React from 'react';
import SlideIn from './slidein';

import '../App.css';

function Documents(props) {
    return (
        <div className = 'slidesInWrapper'>
            <SlideIn />
            <SlideIn />
            <SlideIn />
            <SlideIn />
            <SlideIn />

        </div>
    );
}

export default Documents;
