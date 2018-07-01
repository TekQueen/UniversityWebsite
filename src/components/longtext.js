import React from 'react';
import PropTypes from 'prop-types';

import '../App.css';

function LongText(props) {
    return (
        <div className = 'aboutUsSecondSection'>
            <div className = 'aboutUsText'>
                <h3 className = 'sectionHeader'>{props.aboutUsTextHeader}</h3>
                <span className = 'paragraphSpace'>داگاه</span>
                {props.aboutUsText}
                <span>.</span>
            </div>
        </div>
    );
}

LongText.propTypes = {
    aboutUsText: PropTypes.string.isRequired,
    aboutUsTextHeader: PropTypes.string
}

export default LongText;