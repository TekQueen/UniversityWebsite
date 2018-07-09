import {SET_DOCUMENT_ITEM_CLICKED} from '../constants/constants';

const initalState = {
    shouldShown: [0, 0, 0, 0]
}

export const onDocumentItemClicked = (state = initalState, action = {}) => {
    switch(action.type) {
        case SET_DOCUMENT_ITEM_CLICKED:
            for (let i = 0; i < state.shouldShown.length; i++ ) {
                if (state.shouldShown[i] !== action.payload[i]) {
                    return Object.assign({}, state, {shouldShown: action.payload})
                }
            }
            return Object.assign({}, state, {shouldShown: [0, 0, 0, 0]});
        default:
            return state;
    }
}
