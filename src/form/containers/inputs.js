import React,{Component} from 'react';
import PropTypes from 'prop-types';

// containers, 

class Inputs  extends Component  {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
        }
    }
    
    handleChange = (event) => {
        event.persist();
        this.setState(prevState => {
            return {
                value: event.target.value
            }
        }, () => console.log(this.state.value));     
    }

    render() {
         let { 
            inputLabel, 
            inputType, 
            inputPlaceHolder, 
            inputId, 
            inputName
            } = this.props;

        return(
            <div>
                <h3 className = 'applyLabel'>{inputLabel}</h3>
                <input 
                    className = 'applyInput'
                    id = {inputId} 
                    name = {inputName}
                    type = {inputType}
                    placeholder = {inputPlaceHolder}
                    onChange = {this.handleChange}
                    value = {this.state.value}
                    required
                />
            </div>
        );
    }
 }
    

Inputs.proptypes = {
    inputLabel: PropTypes.string,
    inputType: PropTypes.string,
    inputPlaceHolder: PropTypes.string,
    inputId: PropTypes.string,
    inputName: PropTypes.string

}
export default Inputs;