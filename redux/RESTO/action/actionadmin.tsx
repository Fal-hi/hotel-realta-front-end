import ActionTypes from "./actionType";

export const doGetRestoMenuAll = (search: string, page: number, entry: number)=>{
    const payload = {
        search,
        page,
        entry,
      };
    return {
            type: ActionTypes.GET_RESTOMENU,
            payload,
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