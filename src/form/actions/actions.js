import {
    SET_INPUT_CHANGE_NAME,
    SET_INPUT_CHANGE_LASTNAME,
    SET_INPUT_CHANGE_FATHERNAME,
    SET_INPUT_CHANGE_DATEOFBIRTH,
    SET_INPUT_CHANGE_LOCALADDRESS,
    SET_INPUT_CHANGE_ADDRESSINARMENIA,
    SET_INPUT_CHANGE_TELEPHONENUMBER,
    SET_INPUT_CHANGE_EMAILADDRESS,
    SET_ITEM_CHECKED,
    SET_ITEM_UNCHECKED
} from '../constants/constants';


// input
export const setInputChante = (text, val) => {

    switch(val) {
        case 'name':
            return {
                type: SET_INPUT_CHANGE_NAME,
                payload: text
            }
        case 'lastName':
            return {
                type: SET_INPUT_CHANGE_LASTNAME,
                payload: text
            }
        case 'fatherName':
            return {
                type: SET_INPUT_CHANGE_FATHERNAME,
                payload: text
            }
        case 'dateOfBirth':
            return {
                type: SET_INPUT_CHANGE_DATEOFBIRTH,
                payload: text
            }
        case 'localAddress':
            return {
                type: SET_INPUT_CHANGE_LOCALADDRESS,
                payload: text
            }
        case 'addressInArmenia':
            return {
                type: SET_INPUT_CHANGE_ADDRESSINARMENIA,
                payload: text
            }
        case 'telephoneNumber':
            return {
                type: SET_INPUT_CHANGE_TELEPHONENUMBER,
                payload: text
            }
        case 'emailAddress':
            return {
                type: SET_INPUT_CHANGE_EMAILADDRESS,
                payload: text
            }
        default: 
            return null;
    }
}

// checkbox
export const setItemChecked = (text, checkedItems) => {
    for (let i = 0; i < checkedItems.length; i++) {
        if (checkedItems[i] === text) {
            let arr = checkedItems;
            arr.splice(i, 1);
            return {
                type:SET_ITEM_UNCHECKED,
                payload: arr
            }
        }
    }

    return {
        type: SET_ITEM_CHECKED,
        payload: [text]
    }
}