import React, {Component} from 'react';

//container

class Checkbox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: '',
            content: this.props.element,
        }
    }

    handleChange = (event) => {
        if(this.props.canBeChecked) {
            event.persist();
                this.setState(prevState => {
                    return {
                        checked: event.target.checked,
                        canBeChecked: !prevState.canBeChecked
                    }
                }, () => console.log(this.state.checked, ' ', this.state.content));
        }  
    }

    render() {
        let {element, checkboxName, checkboxId} = this.props;

        return(
            <label 
                className = 'checkBoxcontainer'
            >{element}
            <input
                name = {checkboxName}
                id = {checkboxId} 
                type = 'checkbox'
                checked = {this.state.checked}
                onChange = {this.handleChange}
            />
            <span className = 'checkmark'></span>
            </label>
        )
    }
}

export default Checkbox;