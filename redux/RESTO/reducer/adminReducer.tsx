import ActionTypes from "../action/actionType";

const initialState = {
adminresto: [],
    message: "",
    refresh: "",
}

export function adminRestoReducers(state = initialState,action:any){
const {type, payload} = action;

switch(type){
    case ActionTypes.GET_RESTOMENU_RESPONSE:
        return { state, adminresto: payload.data,refresh:true};
    case ActionTypes.ADD_RESTOMENU_RESPONSE:
        return { message: payload.message,refresh:false};
    case ActionTypes.DEL_RESTOMENU_RESPONSE:
        return { message: payload.message,refresh:false};
    case ActionTypes.UPDATE_RESTOMENU_RESPONSE:
        return { message: payload.message,refresh:false};

        default:
            return state

}
}
