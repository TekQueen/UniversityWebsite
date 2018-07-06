import React from 'react';
import PropTypes from 'prop-types';

import '../App.css';

const LongText = ({aboutUsTextHeader, aboutUsText}) => 
        <div className = 'aboutUsSecondSection'>
            <div className = 'aboutUsText'>
                <h3 className = 'sectionHeader'>{aboutUsTextHeader}</h3>
                <span className = 'paragraphSpace'>داگاه</span>
                {aboutUsText}
                <span>.</span>
            </div>
        </div>

LongText.propTypes = {
    aboutUsText: PropTypes.string.isRequired,
    aboutUsTextHeader: PropTypes.string
}

export default LongText;