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
    default:
        return state
    }
}

export default stockReducers