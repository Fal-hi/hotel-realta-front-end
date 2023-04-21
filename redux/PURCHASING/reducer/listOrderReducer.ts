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
        case ActionTypes.FIND_LISTORDER_RESPONSE:
            return {...state, listOrder: payload, refresh: true};
        case ActionTypes.UPDATE_LISTORDER_RESPONSE:
            return {message: payload.message, refresh: false};
        case ActionTypes.DEL_LISTORDER_RESPONSE:
            return {message: payload, refresh: false};
        case ActionTypes.DEL_LIST_DETAIL_RESPONSE:
            return {message: payload, refresh: false};  
        //POHE
        case ActionTypes.ADD_POHE_RESPONSE:
            console.log("reducer",payload)
            return {message: payload?.message || '', refresh: false, listOrder: payload.data};
        //PODE
        case ActionTypes.ADD_PODE_RESPONSE:
          
            return {message: payload?.message || '', refresh: false,};
        case ActionTypes.UPDATE_PODE_RESPONSE:
            return {...state, message: payload.message || '', refresh: false};
        //STOD
        case ActionTypes.ADD_STOD_RESPONSE:
            return {message: payload?.message || '', refresh: false};
            
    default:
        return state
    }
}

export default listOrderReducers