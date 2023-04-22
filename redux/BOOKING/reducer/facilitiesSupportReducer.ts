import ActionTypesBooking from "../action/actionTypeBooking";

const initialState = {
    faci_supports: [],
    message: '',
    refresh: false,
};

function facilitiesSupportBookingReducers(state = initialState, action: any) {
    const { type, payload } = action;
    switch (type) {
        case ActionTypesBooking.RES_GET_ALL_FACILITIES_SUPPORT:
            console.log(payload);
            return {
                // tambahkan operator spread untuk menggabungkan state yang ada dengan properti yang berubah
                faci_supports: payload?.data,
                refresh: true,
                message: "Data Facilities Support Berhasil Didapatkan",
            };
        default:
            return state;
    }
}

export default facilitiesSupportBookingReducers
