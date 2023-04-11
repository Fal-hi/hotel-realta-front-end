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

export const doAddStock = (payload: any) => {
    return {
        type: ActionTypes.ADD_STOCK,
        payload
    }
}

export const doAddStockResponse = (payload: any) => {
    return {
        type: ActionTypes.ADD_STOCK_RESPONSE,
        payload
    }
}

export const doDeleteStock = (payload: any)=>{
    return{
        type:ActionTypes.DEL_STOCK,
        payload
    }
}

export const doDeleteStockResponse = (payload: any)=>{
    return{
        type:ActionTypes.DEL_STOCK_RESPONSE,
        payload
    }
}

export const doUpdateStock = (...payload: any) => {
    return {
        type: ActionTypes.UPDATE_STOCK,
        payload
    }
}

export const doUpdateStockResponse = (payload: any) => {
    return {
        type: ActionTypes.UPDATE_STOCK_RESPONSE,
        payload
    }
}

export const doGetFindStock = (payload: any) => {
    return {
        type: ActionTypes.FIND_STOCK,
        payload
    }
}

export const doGetFindListStockResponse = (payload: any) => {
    return {
        type: ActionTypes.FIND_STOCK_RESPONSE,
        payload : payload
    }
}