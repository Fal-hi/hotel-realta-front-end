import orderApi from '@/api/resto/orderRestoApi';
import { call, put } from 'redux-saga/effects'
import { doAddOrderRestoResponse } from '../action/actionOrder';

function* handleAddOrderResto(action: any): any {
    try {
        const result: any = yield call(orderApi.createOrderResto, action.payload);
        console.log('ini saga order',result)
        yield put(doAddOrderRestoResponse(result.data))
    } catch (error) {
        yield put(doAddOrderRestoResponse({ message: error }))
    }
}

export {
    handleAddOrderResto
}