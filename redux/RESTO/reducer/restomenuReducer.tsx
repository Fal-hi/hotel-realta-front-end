import ActionTypes from "../action/actionType";

const initialState ={
    restophotos: [],
    message: '',
    refresh: ''
}

export function restomenureducers(state = initialState, action:any){
    const {type, payload} = action;
    
    switch(type){
        // case ActionTypes.GET_GUEST_RESPONSE:
        //     return {...state, restophotos: payload,refresh:true}
        case ActionTypes.ADD_RESTOMENU_PHOTOS_RESPONSE:
            return {...state, message: payload.message,refresh: false};
            default:
                return state
    }
}

