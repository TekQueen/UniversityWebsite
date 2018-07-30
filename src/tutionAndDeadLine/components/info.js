import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

import Line from '../../components/line';

class Info extends PureComponent {
    render() {
        const {inforContentes} = this.props;

        return (
            <section 
                className = 'infoContainer'
            >
                <Line />
                    {
                        inforContentes.map(
                            (element, index) =>
                                <Fragment
                                    key = {index}
                                >
                                    <p className = 'infoTitle'>
                                        {element.ifoTitle}
                                    </p>
                                    <p className = 'infoDetails'>
                                        {element.infoContent}
                                    </p>
                                </Fragment> 
                        )
                    }               
                <Line />
            </section>
        )
    }
}

Info.Proptypes = {
    inforContentes: PropTypes.array
}
export default Info;