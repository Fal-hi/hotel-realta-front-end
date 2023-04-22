import ActionTypesBooking from "../action/actionTypeBooking";

const initialState = {
    otherRooms: {},
    status: false,
    message: '',
};

function otherRoomsReducers(state = initialState, action: any) {
    const { type, payload } = action;
    switch (type) {
        case ActionTypesBooking.RES_GET_OTHER_ROOMS:
            return {
                ...state,
                otherRooms: payload,
                status: true,
                message: 'Data berhasil didapatkan',
            };
        default:
            return state;
    }
}

export default otherRoomsReducers