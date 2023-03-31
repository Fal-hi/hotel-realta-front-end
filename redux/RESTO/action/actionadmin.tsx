import ActionTypes from "./actionType";

export const doGetRestoMenuAll = ()=>{

    return {
    
            type: ActionTypes.GET_RESTOMENU,
        }
    
};

export const doGetRestoMenuAllResponse = (payload:any)=>{
   return {
       
            type: ActionTypes.GET_RESTOMENU_RESPONSE,
            payload
   }
};
export const getNamaResto =(payload:any)=>{
    return {
        type: ActionTypes.GET_RESTO,
        payload
    };
};

export const getNamaRestoResponse = (payload:any)=>{
    return{
        type: ActionTypes.GET_RESTOMENU_RESPONSE,
        payload
    }
}