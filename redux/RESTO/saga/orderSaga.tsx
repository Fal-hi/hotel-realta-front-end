import orderApi from '@/api/resto/orderRestoApi';
import { call, put } from 'redux-saga/effects'
import { doAddOrderRestoResponse, doGetOrderRestoResponse } from '../action/actionOrder';

function* handleAddOrderResto(action: any): any {
    try {
        const result: any = yield call(orderApi.createOrderResto, action.payload);
        yield put(doAddOrderRestoResponse(result.data))
    } catch (error) {
        yield put(doAddOrderRestoResponse({ message: error }))
    }
}
function* handleGetOrderResto(action:any): any {
    //  console.log('INI DI SAGA',action.payload)
    try {
        const result: any = yield call(orderApi.getOrderMenu, action.payload.orme_id);
        yield put(doGetOrderRestoResponse(result.data))
    } catch (error) {
        yield put(doGetOrderRestoResponse({ message: error }))
    }
}

export {
    handleAddOrderResto,
    handleGetOrderResto
}