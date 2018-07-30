import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import '../App.css';

class LongText extends PureComponent { 
    render() {
        const {aboutUsTextHeader, aboutUsText} = this.props;

        return (
            <section className = 'aboutUsSecondSection aboutUsText'>  
                <header>
                    <p className = 'sectionHeader'>{aboutUsTextHeader}</p>
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