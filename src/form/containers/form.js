import React, {Component} from 'react';

import Inputs from './inputs';
import Checkboxes from './checkboxes';

//container

class Form extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <form >

                <Inputs 
                    inputLabel = 'Name:'
                    inputType = 'text'
                    inputPlaceHolder = 'Name...'
                    inputId = 'nameInput'
                    inputName = 'nameInput'
                />

                <Inputs 
                    inputLabel = 'Last Name:'
                    inputType = 'text'
                    inputPlaceHolder = 'Last Name...'
                    inputId = 'laseNameInput'
                    inputName = 'laseNameInput'
                />

                <Inputs 
                    inputLabel = "Father's Name:"
                    inputType = 'text'
                    inputPlaceHolder = "Father's Name..."
                    inputId = 'fatherNameInput'
                    inputName = 'fatherNameInput'
                />

                <Inputs 
                    inputLabel = 'Date of Birth:'
                    inputType = 'text'
                    inputPlaceHolder = 'Date of Birth...'
                    inputId = 'dateOfBirthInput'
                    inputName = 'dateOfBirthInput'
                />

                <Inputs 
                    inputLabel = 'Local Address:'
                    inputType = 'text'
                    inputPlaceHolder = 'Local Address...'
                    inputId = 'localAddressInput'
                    inputName = 'localAddressInput'
                />

                <Inputs 
                    inputLabel = 'Address in Armenia:'
                    inputType = 'text'
                    inputPlaceHolder = 'Address in Armenia...'
                    inputId = 'addressInArmeniaInput'
                    inputName = 'addressInArmeniaInput'
                />

                <Inputs 
                    inputLabel = 'Telephone Number:'
                    inputType = 'text'
                    inputPlaceHolder = 'Telephone Number...'
                    inputId = 'telephoneNumberInput'
                    inputName = 'telephoneNumberInput'
                />

                <Inputs 
                    inputLabel = 'Email Adress:'
                    inputType = 'email'
                    inputPlaceHolder = 'Email Adress...'
                    inputId = 'emailInput'
                    inputName = 'emailInput'
                />

                <Checkboxes 
                    header = 'Gender'
                    canCheck = {false}
                    checkboxes = {[
                        'Female',
                        'Male'
                    ]}
                />

                <Checkboxes 
                    header = 'Foreign language studied at school'
                    checkboxes = {[
                        'Persian',
                        'English',
                        'French',
                        'German',
                        'Arabic'
                    ]}
                />

                <Checkboxes 
                    header = 'Education'
                    checkboxes = {[
                        'High School',
                        'Pre University',
                        'Bachelor',
                        'Master',
                        'phD'
                    ]}
                />

                <Checkboxes 
                    checkboxes = {[
                        'I declare that the above given information is correct to the best of my knowledge.',
                    ]}
                />

                <input type = 'submit' value = 'submit' className = 'applySubmit'/>
            </form>

        );
    }
}

export default Form;