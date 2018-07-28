import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import '../App.css';

class LongText extends PureComponent { 
    render() {
        const {aboutUsTextHeader, aboutUsText} = this.props;

        return (
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
        )
    }
}


LongText.propTypes = {
    aboutUsTextHeader: PropTypes.string
}

export default LongText;