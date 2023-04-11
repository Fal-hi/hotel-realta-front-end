import ActionTypes from "./actionType";

export const doAddVepro = (payload: any) => {
    return {
        type: ActionTypes.ADD_VEPRO,
        payload
    }
}

export const doAddVeproResponse = (payload: any) => {
    return {
        type: ActionTypes.ADD_VEPRO_RESPONSE,
        payload
    }
}

export const doDeleteVepro = (payload: any)=>{
    return{
        type:ActionTypes.DEL_VEPRO,
        payload
    }
}

export const doDeleteVeproResponse = (payload: any)=>{
    return{
        type:ActionTypes.DEL_VEPRO_RESPONSE,
        payload
    }
}

export const doUpdateVepro = (...payload: any) => {
    console.log(payload)
    return {
        type: ActionTypes.UPDATE_VEPRO,
        payload
    }
}

export const doUpdateVeproResponse = (payload: any) => {
    return {
        type: ActionTypes.UPDATE_VEPRO_RESPONSE,
        payload
    }
}