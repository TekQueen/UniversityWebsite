import React, {Component} from 'react';

import Inputs from '../components/inputs';
import Checkboxes from '../components/checkboxes';
import Checkbox from '../components/Checkbox';
import Submit from '../components/submit';

import {connect} from 'react-redux';
import {setInputChante, setItemChecked} from '../actions/actions';

const mapStateToProps = state => ({
    name: state.onInputChange.name,
    lastName: state.onInputChange.lastName,
    fatherName: state.onInputChange.fatherName,
    dateOfBirth: state.onInputChange.dateOfBirth,
    localAddress: state.onInputChange.localAddress,
    addressInArmenia: state.onInputChange.addressInArmenia,
    telephoneNumber: state.onInputChange.telephoneNumber,
    emailAddress: state.onInputChange.emailAddress,
    checkedItems: state.onItemChecked.checkedItems
})

const mapDispatchToProps = dispatch => ({
    handleChange: (event, val) => dispatch(setInputChante(event.target.value, val)),
    handleClicked: (event, val) => dispatch(setItemChecked(event.target.value, val))

})

class Form extends Component {

    handleSubmit = (event) => { 
        event.preventDefault();
        alert('Thanks for submitting the form!');
    }

    render() {

        let {
            name,
            lastName,
            fatherName,
            dateOfBirth,
            localAddress,
            addressInArmenia,
            telephoneNumber,
            emailAddress,
            handleChange,
            checkedItems,
            handleClicked
        } = this.props;

        return (
            <section id = 'formContainer'>
                <form onSubmit = {this.handleSubmit}>

                <Inputs 
                    inputLabel = 'Name:'
                    inputType = 'text'
                    inputPlaceHolder = 'Name...'
                    inputId = 'nameInput'
                    inputName = 'nameInput'
                    value = {name}
                    handleChange = {(event) => handleChange(event, 'name')}
                />

                <Inputs 
                    inputLabel = 'Last Name:'
                    inputType = 'text'
                    inputPlaceHolder = 'Last Name...'
                    inputId = 'laseNameInput'
                    inputName = 'laseNameInput'
                    value = {lastName}
                    handleChange = {(event) => handleChange(event, 'lastName')}
                />

                <Inputs 
                    inputLabel = "Father's Name:"
                    inputType = 'text'
                    inputPlaceHolder = "Father's Name..."
                    inputId = 'fatherNameInput'
                    inputName = 'fatherNameInput'
                    value = {fatherName}
                    handleChange = {(event) => handleChange(event, 'fatherName')}
                />

                <Inputs 
                    inputLabel = 'Date of Birth:'
                    inputType = 'text'
                    inputPlaceHolder = 'Date of Birth...'
                    inputId = 'dateOfBirthInput'
                    inputName = 'dateOfBirthInput'
                    value = {dateOfBirth}
                    handleChange = {(event) => handleChange(event, 'dateOfBirth')}
                />

                <Inputs 
                    inputLabel = 'Local Address:'
                    inputType = 'text'
                    inputPlaceHolder = 'Local Address...'
                    inputId = 'localAddressInput'
                    inputName = 'localAddressInput'
                    value = {localAddress}
                    handleChange = {(event) => handleChange(event, 'localAddress')}
                />

                <Inputs 
                    inputLabel = 'Address in Armenia:'
                    inputType = 'text'
                    inputPlaceHolder = 'Address in Armenia...'
                    inputId = 'addressInArmeniaInput'
                    inputName = 'addressInArmeniaInput'
                    value = {addressInArmenia}
                    handleChange = {(event) => handleChange(event, 'addressInArmenia')}
                />

                <Inputs 
                    inputLabel = 'Telephone Number:'
                    inputType = 'text'
                    inputPlaceHolder = 'Telephone Number...'
                    inputId = 'telephoneNumberInput'
                    inputName = 'telephoneNumberInput'
                    value = {telephoneNumber}
                    handleChange = {(event) => handleChange(event, 'telephoneNumber')}
                />

                <Inputs 
                    inputLabel = 'Email Adress:'
                    inputType = 'email'
                    inputPlaceHolder = 'Email Adress...'
                    inputId = 'emailInput'
                    inputName = 'emailInput'
                    value = {emailAddress}
                    handleChange = {(event) => handleChange(event, 'emailAddress')}
                />

                <Checkboxes 
                    header = 'Gender'
                    inputType = 'checkbox'
                    checkboxName = 'Gender'
                    canCheck = {false}
                    checkboxes = {[
                        'Female',
                        'Male'
                    ]}
                    handleChange = {(event) => handleClicked(event, checkedItems)}
                />

                <Checkboxes 
                    header = 'Foreign language studied at school'
                    inputType = 'checkbox'
                    checkboxName = 'Foreign language'
                    checkboxes = {[
                        'Persian',
                        'English',
                        'French',
                        'German',
                        'Arabic'
                    ]}
                    handleChange = {(event) => handleClicked(event, checkedItems)}
                />

                <Checkboxes 
                    header = 'Education'
                    inputType = 'checkbox'
                    checkboxName = 'Education'
                    checkboxes = {[
                        'High School',
                        'Pre University',
                        'Bachelor',
                        'Master',
                        'phD'
                    ]}
                    handleChange = {(event) => handleClicked(event, checkedItems)}
                />
                    
                <Checkbox   
                    inputType = 'checkbox' 
                    checkboxName = 'given information is correct'
                    value = 'I declare that the above given information is correct to the best of my knowledge.'                
                    element = 'I declare that the above given information is correct to the best of my knowledge.'
                    handleChange = {(event) => handleClicked(event, checkedItems)}
                />
             
                 
                
                <Submit />
                
            </form>
        </section>

        );
    }
}
        
export default connect(mapStateToProps, mapDispatchToProps)(Form);