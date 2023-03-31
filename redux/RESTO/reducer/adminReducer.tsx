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
    case ActionTypes.GET_RESTOMENU_RESPONSE:
        return { state, adminresto: payload,refresh:true};
    // case ActionTypes.UPDATE_RESTOMENU_RESPONSE:
    //     return { state, adminresto: payload,refresh:false};
    // case ActionTypes.DEL_RESTOMENU_RESPONSE:
    //     return { state, adminresto: payload,refresh:false};

        default:
            return state

}
}
