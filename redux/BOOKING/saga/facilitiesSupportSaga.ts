import { call, put } from "redux-saga/effects";
import bookingApi from "@/api/booking/bookingApi";
import { doResponseGetAllFacilitiesSupport } from "../action/booking";

function* handleGetAllFacilitiesSupport(action: any): Generator {
    try {
        console.log(action.payload)
        const result: any = yield call(bookingApi.getAllFacilitiesSupport);
        console.log(result)
        yield put(doResponseGetAllFacilitiesSupport(result.data))
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

export default handleGetAllFacilitiesSupport
