import bookingApi from "@/api/booking/bookingApi";
import {call, put} from "redux-saga/effects"
import { doResponseGetBookingyQuery, doResponseGetListBooking } from '../action/booking'



function* handleGetOneBooking(action: any): Generator {
    try {
        const result: any = yield call(
            bookingApi.getBookingByQuery,
            action.payload
        );
        yield put(doResponseGetBookingyQuery(result.data))

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

export { handleGetOneBooking };
