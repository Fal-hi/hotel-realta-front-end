import ActionTypes from "./actionType";

export const doRequestGetVendor = (search: any, page: any, entry: any) => {
    const payload = {
        search,
        page,
        entry,
      };
    return {
        type: ActionTypes.REQ_GET_VENDOR,
        payload
    }
}

export const doGetVendorResponse = (payload: any) => {
    return {
        type: ActionTypes.GET_VENDOR_RESPONSE,
        payload : payload
    }
}

export const doAdd = (payload: any) => {
    return {
        type: ActionTypes.ADD_VENDOR,
        payload
    }
}

export const doAddResponse = (payload: any) => {
    return {
        type: ActionTypes.ADD_VENDOR_RESPONSE,
        payload
    }
}

export const doRequestGetProduct = () => {
    return {
        type: ActionTypes.REQ_GET_PRODUCT
    }
}

export const doGetProductResponse = (payload: any) => {
    return {
        type: ActionTypes.GET_VENDOR_RESPONSE,
        payload : payload
    }
}

export const doDelete = (payload: any)=>{
    return{
        type:ActionTypes.DEL_VENDOR,
        payload
    }
}

export const doDeleteResponse = (payload: any)=>{
    return{
        type:ActionTypes.DEL_VENDOR_RESPONSE,
        payload
    }
}

export const doUpdate = (...payload: any) => {
    console.log(payload)
    return {
        type: ActionTypes.UPDATE_VENDOR,
        payload
    }
}

export const doUpdateResponse = (payload: any) => {
    return {
        type: ActionTypes.UPDATE_VENDOR_RESPONSE,
        payload
    }
}

export const doSearch = (payload: any) => {
    return {
        type: ActionTypes.SEARCH_VENDOR,
        payload
    }
}

export const doSearchResponse = (payload: any) => {
    return {
        type: ActionTypes.SEARCH_VENDOR_RESPONSE,
        payload
    }
}