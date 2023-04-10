import ActionTypes from "./actionType";

export const doAddPode = (payload: any) => {
    return {
        type: ActionTypes.ADD_PODE,
        payload
    }
}

export const doAddPodeResponse = (payload: any) => {
    return {
        type: ActionTypes.ADD_PODE_RESPONSE,
        payload
    }
}

export const doUpdatePode = (...payload: any) => {
    return {
        type: ActionTypes.UPDATE_PODE,
        payload
    }
}

export const doUpdatePodeResponse = (payload: any) => {
    return {
        type: ActionTypes.UPDATE_PODE_RESPONSE,
        payload
    }
}