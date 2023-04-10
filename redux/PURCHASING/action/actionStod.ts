import ActionTypes from "./actionType";

export const doAddStod= (payload: any) => {
    return {
        type: ActionTypes.ADD_STOD,
        payload
    }
}

export const doAddStodResponse = (payload: any) => {
    return {
        type: ActionTypes.ADD_STOD_RESPONSE,
        payload
    }
}

export const doUpdateStod= (...payload: any) => {
    console.log("payload", payload)
    return {
        type: ActionTypes.UPDATE_STOD,
        payload
    }
}

export const doUpdateStodResponse = (payload: any) => {
    return {
        type: ActionTypes.UPDATE_STOD_RESPONSE,
        payload
    }
}
