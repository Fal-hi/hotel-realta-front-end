import ActionTypes from "../action/actionType";

const initialState = {
    stock: {},
    message: '',
    refresh: '',
};

function stockReducers(state = initialState, action: any) {
    const {type, payload} = action;
    switch (type) {
        case ActionTypes.GET_STOCK_RESPONSE:
            return {...state, stock: payload, refresh: true};
        case ActionTypes.ADD_STOCK_RESPONSE:
            return {message: payload?.message || '', refresh: false};
        case ActionTypes.UPDATE_STOCK_RESPONSE:
            return {message: payload.message, refresh: false};
        case ActionTypes.DEL_STOCK_RESPONSE:
            return {message: payload, refresh: false};  
        case ActionTypes.FIND_STOCK_RESPONSE:
            return {...state, stock: payload, refresh: true};  
        case ActionTypes.UPDATE_STOD_RESPONSE:
            return {message: payload.message, refresh: false};
        case ActionTypes.ADD_PHOTOS_RESPONSE:
            return {message: payload.message, refresh: false};
    default:
        return state
    }
}

export default stockReducers