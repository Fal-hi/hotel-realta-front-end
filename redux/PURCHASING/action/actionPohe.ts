import ActionTypes from "./actionType";

export const doAddPohe = (payload: any) => {
    return {
        type: ActionTypes.ADD_POHE,
        payload
    }
}

export const doAddPoheResponse = (payload: any) => {
    return {
        type: ActionTypes.ADD_POHE_RESPONSE,
        payload
    }
}

export const doAddPhotos=(payload: any)=>{
    return{
        type:ActionTypes.ADD_PHOTOS,
        payload
    }
}

export const doAddPhotosResponse=(payload: any)=>{
    return{
        type:ActionTypes.ADD_PHOTOS_RESPONSE,
        payload
    }
}

export const doReqGetPhotos= (search: any, page: any, entry: any) => {
    const payload = {
        search,
        page,
        entry,
    };
    return {
        type: ActionTypes.GET_ALL_PHOTOS,
        payload
    }
}

export const doGetPhotosResponse = (payload: any) => {
    return {
        type: ActionTypes.GET_ALL_PHOTOS_RESPONSE,
        payload : payload
    }
}