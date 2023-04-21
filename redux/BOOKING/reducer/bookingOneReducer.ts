import ActionTypesBooking from "../action/actionTypeBooking";

const initialState = {
    bookingOne: {},
    status: false,
    message: '',
};

function bookingOneReducers(state = initialState, action: any) {
    const { type, payload } = action;

    switch (type) {
        case ActionTypesBooking.RES_GET_ONE_BOOKING:
            return {
                bookingOne: payload,
                status: true,
                message: `Data telah berhasil didapatkan`
            }
        default:
            return state;
    }
}

export default bookingOneReducers