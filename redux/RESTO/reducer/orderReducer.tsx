import ActionTypes from "../action/actionType";

const initialState ={
    orderresto: [],
    message: '',
    refresh: ''
}

export function orderrestoreducers(state = initialState, action:any){
    const {type, payload} = action;
   
    switch(type){
        case ActionTypes.ADD_ORDER_RESPONSE:
            return {...state, message: payload.message,refresh: false};
            default:
                return state
    }
}