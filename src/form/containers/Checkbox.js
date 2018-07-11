import React, {Component} from 'react';

import {connect} from 'react-redux';
import {setItemChecked} from '../actions/actions';

//container

const mapStateToProps = state => ({
    checked: state.onItemChecked.checked,
    content: state.onItemChecked.content
})

const mapDispatchToProps = dispatch => ({
    handleChange: (event) => dispatch(setItemChecked(event.target.value)),
})

class Checkbox extends Component {

    render() {
        let {
                element, 
                checkboxName, 
                checkboxId,
                checked,
                content,
                handleChange
            } = this.props;

        return(
            <label 
                className = 'checkBoxcontainer'
            >{element}
            <input
                name = {checkboxName}
                id = {checkboxId} 
                type = 'checkbox'
                checked = {checked}
                onChange = {handleChange}
            />
            <span className = 'checkmark'></span>
            </label>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkbox);