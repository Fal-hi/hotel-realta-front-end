import ActionTypes from "./actionType";

export const doReqGetStock = (search: any, page: any, entry: any) => {
    const payload = {
        search,
        page,
        entry,
    };
    return {
        type: ActionTypes.REQ_GET_STOCK,
        payload
    }
}

export const doGetStockResponse = (payload: any) => {
    return {
        type: ActionTypes.GET_STOCK_RESPONSE,
        payload : payload
    }
}