import ActionTypes from "../action/actionType";

const initialState = {
    vendor: {},
    message: '',
    refresh: '',
};

function vendorReducers(state = initialState, action: any) {
    const {type, payload} = action;
    switch (type) {
        case ActionTypes.GET_VENDOR_RESPONSE:
            return {...state, vendor: payload, refresh: true};
        case ActionTypes.GET_PRODUCT_RESPONSE:
            return {...state, vendor: payload, refresh: true};
        case ActionTypes.SEARCH_VENDOR_RESPONSE:
            return {...state, vendor: payload, refresh: true};
        case ActionTypes.UPDATE_VENDOR_RESPONSE:
            return {message: payload.message, refresh: false};
        case ActionTypes.DEL_VENDOR_RESPONSE:
            return {message: payload, refresh: false};
        case ActionTypes.ADD_VENDOR:
            return {message: payload?.message || '', refresh: false};
        default:
            return state
    }
}

export default vendorReducers