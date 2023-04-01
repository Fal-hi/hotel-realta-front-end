import adminApi from '@/api/resto/adminApi'
import { call, put} from 'redux-saga/effects'
import { doGetRestoMenuAllResponse, getNamaRestoResponse } from '../action/actionadmin'

function* handleGetRestoMenuAll(action:any):any{
    try {
        const { search, page, entry } = action.payload
        const result = yield call(adminApi.getRestoall,search,page,entry)
        yield put(doGetRestoMenuAllResponse(result.data))
    } catch (error) {
        yield put(doGetRestoMenuAllResponse({message:error}))
    }
}

function* handleGetNamaResto(action:any):any {
    try {
        const result:any = yield call(adminApi.getResto,action.payload);     
        yield put(getNamaRestoResponse(result.data))
    } catch (error) {
        yield put(getNamaRestoResponse({message: error}))
    }
}


export{
    handleGetRestoMenuAll,
    handleGetNamaResto
}