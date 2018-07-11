import React,{Component} from 'react';
import Checkbox from './Checkbox';
import PropTypes from 'prop-types';

// container

class Checkboxes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            canBeChecked: true
        }
    }

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
                                canBeChecked = {this.state.canBeChecked}
                            />
                    )
                }
            </div>
        );
    }
}

export default Checkboxes;