import ActionTypes from "../action/actionType";

const initialState = {
    listOrder: {},
    message: '',
    refresh: '',
};

function listOrderReducers(state = initialState, action: any) {
    const {type, payload} = action;
    switch (type) {
        case ActionTypes.REQ_GET_LISTORDER_RESPONSE:
            return {...state, listOrder: payload, refresh: true};
    default:
        return state
    }
}

export default listOrderReducers