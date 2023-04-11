import ActionTypes from "./actionType";

export const doReqGetListOrder = (search: any, page: any, entry: any, searchStat:any) => {
    const payload = {
        searchStat,
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

export const doUpdateListOrder = (...payload: any) => {
    console.log(payload)
    return {
        type: ActionTypes.UPDATE_LISTORDER,
        payload
    }
}

export const doUpdateListResponse = (payload: any) => {
    return {
        type: ActionTypes.UPDATE_LISTORDER_RESPONSE,
        payload
    }
}

export const doDeleteListOrder = (payload: any)=>{
    return{
        type:ActionTypes.DEL_LISTORDER,
        payload
    }
}

export const doDeleteListOrderResponse = (payload: any)=>{
    // console.log(payload)
    return{
        type:ActionTypes.DEL_LISTORDER_RESPONSE,
        payload
    }
}

export const doGetFindListOrder = (payload: any) => {
    return {
        type: ActionTypes.FIND_LISTORDER,
        payload
    }
}

export const doGetFindListOrderResponse = (payload: any) => {
    return {
        type: ActionTypes.FIND_LISTORDER_RESPONSE,
        payload : payload
    }
}

export const doDeleteListDetail= (payload: any)=>{
    // console.log(payload)
    return{
        type:ActionTypes.DEL_LIST_DETAIL,
        payload,
    }
}

export const doDeleteListDetailResponse = (payload: any)=>{
    // console.log(payload)
    return{
        type:ActionTypes.DEL_LIST_DETAIL_RESPONSE,
        payload
    }
}