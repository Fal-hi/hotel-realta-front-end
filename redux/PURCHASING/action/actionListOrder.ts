import ActionTypes from "./actionType";

export const doReqGetListOrder = (search: any, page: any, entry: any) => {
    const payload = {
        search,
        page,
        entry,
    };
    return {
        type: ActionTypes.REQ_GET_LISTORDER,
        payload
    }
}

export const doGetListOrderResponse = (payload: any) => {
    return {
        type: ActionTypes.REQ_GET_LISTORDER_RESPONSE,
        payload : payload
    }
}