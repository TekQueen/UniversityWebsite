// documents item clicked action
import {SET_DOCUMENT_ITEM_CLICKED} from '../constants/constants';

export const setDocumentItemClicked = (index) => {
    let arr = [0, 0, 0, 0];
    arr[index] = 1;

    return {
        type: SET_DOCUMENT_ITEM_CLICKED,
        payload: arr
    }
}

  