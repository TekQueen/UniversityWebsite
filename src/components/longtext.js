import React from 'react';
import PropTypes from 'prop-types';

import '../App.css';

const LongText = ({aboutUsTextHeader, aboutUsText}) => 
        <section className = 'aboutUsSecondSection, aboutUsText'>  
            <header>
                <h3 className = 'sectionHeader'>{aboutUsTextHeader}</h3>
            </header>
            <p>
                <span className = 'paragraphSpace'>داگاه</span>
                {aboutUsText}
                <span>.</span>
            </p>            
        </section>

LongText.propTypes = {
    aboutUsText: PropTypes.string.isRequired,
    aboutUsTextHeader: PropTypes.string
}

export default LongText;