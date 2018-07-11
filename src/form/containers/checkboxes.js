import React,{Component} from 'react';
import Checkbox from './Checkbox';
import PropTypes from 'prop-types';

// container

class Checkboxes extends Component {
    render() {
        let {header, checkboxes, canCheck} = this.props;

        return(
            <div>
                <h3 className = 'applyLabel'>{header}</h3>
                {
                    checkboxes.map( 
                        (element, index) => 
                            <Checkbox
                                key = {index} 
                                element = {element}
                                checkboxId = {element}
                                checkboxName = {element}
                            />
                    )
                }
            </div>
        );
    }
}

export default Checkboxes;