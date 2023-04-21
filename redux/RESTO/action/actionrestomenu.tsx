import ActionTypes from "./actionType";

export const addRestoMenuPhoto = (payload:any)=>{

    return{
        type: ActionTypes.ADD_RESTOMENU_PHOTOS,
        payload
    }
}
export const addRestoMenuPhotoResponse = (payload:any)=>{
    return{
        type: ActionTypes.ADD_RESTOMENU_PHOTOS_RESPONSE,
        payload
    }
}

