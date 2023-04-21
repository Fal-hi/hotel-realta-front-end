import ActionTypes from "../action/actionType";

const initialState = {
    gallery: [],
    message: '',
    refresh: '',
}

function galleryReducers(state = initialState, action: any){
    const {type, payload} = action;
    switch (type) {
        case ActionTypes.GET_ALL_PHOTOS_RESPONSE:
            return {...state, gallery: payload, refresh: true}
            default:
                return state
    }
}

export default galleryReducers