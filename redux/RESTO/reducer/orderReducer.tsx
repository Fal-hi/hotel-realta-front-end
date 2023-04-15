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
            return {...state, message: payload.data,refresh: false};
        case ActionTypes.GET_ORDER_RESPONSE:
            //    console.log('messageeeeee',payload)
             return { ...state, orderresto: payload, refresh:true};
            default:
                return state
    }
}