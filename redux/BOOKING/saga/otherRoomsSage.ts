import bookingApi from "@/api/booking/bookingApi";
import { call, put } from "redux-saga/effects";
import { doResponseGetOtherRooms } from "../action/booking";

function* handleGetOtherRooms(action: any): Generator {
    try {

        const result: any = yield call(
            bookingApi.getListOtherRooms,
            action.payload
        );

        yield put(doResponseGetOtherRooms(result.data))

        // console.log(result)
        // if (result.data.statusCode >= 400) {
        //     return yield put(doLoginFailed(result.data));
        // }

        // yield put(doLoginSuccess(result.data));
    } catch (e: any) {
        console.log(e)
        // yield put(
        //     doLoginFailed({
        //         message: e,
        //     })
        // );
    }
}

export { handleGetOtherRooms }