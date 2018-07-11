import {
    SET_INPUT_CHANGE_NAME,
    SET_INPUT_CHANGE_LASTNAME,
    SET_INPUT_CHANGE_FATHERNAME,
    SET_INPUT_CHANGE_DATEOFBIRTH,
    SET_INPUT_CHANGE_LOCALADDRESS,
    SET_INPUT_CHANGE_ADDRESSINARMENIA,
    SET_INPUT_CHANGE_TELEPHONENUMBER,
    SET_INPUT_CHANGE_EMAILADDRESS,
    SET_ITEM_CHECKED
} from '../constants/constants';

const initialStateInput = {
    name: '',
    lastName: '',
    fatherName: '',
    dateOfBirth: '',
    localAddress: '',
    addressInArmenia: '',
    telephoneNumber: '',
    emailAddress: ''
}

export const onInputChange = (state = initialStateInput, action = {}) => {
    switch(action.type) {
        case SET_INPUT_CHANGE_NAME:
            return Object.assign({}, state, {name: action.payload});
        case SET_INPUT_CHANGE_LASTNAME:
            return Object.assign({}, state, {lastName: action.payload});
        case SET_INPUT_CHANGE_FATHERNAME:
            return Object.assign({}, state, {fatherName: action.payload});
        case SET_INPUT_CHANGE_DATEOFBIRTH:
            return Object.assign({}, state, {dateOfBirth: action.payload});
        case SET_INPUT_CHANGE_LOCALADDRESS:
            return Object.assign({}, state, {localAddress: action.payload});
        case SET_INPUT_CHANGE_ADDRESSINARMENIA:
            return Object.assign({}, state, {addressInArmenia: action.payload});
        case SET_INPUT_CHANGE_TELEPHONENUMBER:
            return Object.assign({}, state, {telephoneNumber: action.payload});
        case SET_INPUT_CHANGE_EMAILADDRESS:
            return Object.assign({}, state, {emailAddress: action.payload});
        default: 
            return state;
    }
}

const initialStateChecked = {
    checked: '',
    content: '',
}

export const onItemChecked = (state = initialStateChecked, action = {}) => {
    switch(action.type) {
        case SET_ITEM_CHECKED:
            return Object.assign({}, state, {
                checked: action.payload[0],
                content: action.payload[1]
            })
        default:
            return state;
    }
}