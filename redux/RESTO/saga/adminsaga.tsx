import adminApi from '@/api/resto/adminRestoApi'
import { call, put} from 'redux-saga/effects'
import { addRestoMenuResponse, doGetRestoMenuAllResponse, updateRestoMenu, updateRestoMenuResponse } from '../action/actionadmin'

 /////////////////////UNTUK MENAMPILKAN SEMUA DATA PADA RESTO MENU////////////////////////
function* handleGetRestoMenuAll(action:any):any{
    try {
        const { search, page, entry,sortType } = action.payload
        const result = yield call(adminApi.getRestoall,search,page,entry,sortType)
        yield put(doGetRestoMenuAllResponse(result.data))
    } catch (error) {
        yield put(doGetRestoMenuAllResponse({message:error}))
    }
}

 /////////////////////UNTUK MENAMBAH DATA PADA RESTO MENU////////////////////////
function* handleAddRestoMenu(action:any):any {
    try {
        const result:any = yield call(adminApi.createRestoMenu,action.payload);     
        yield put(addRestoMenuResponse(result.data))
    } catch (error) {
        yield put(addRestoMenuResponse({message: error}))
    }
}

 /////////////////////UNTUK MENGHAPUS DATA PADA RESTO MENU////////////////////////
function* handleDeleteRestoMenu(action:any):any {
    try {
        const result:any = yield call(adminApi.deleteRestoMenu,action.payload);     
        yield put(addRestoMenuResponse(result.data))
    } catch (error) {
        yield put(addRestoMenuResponse({message: error}))
    }
}

 /////////////////////UNTUK MENGEDIT DATA PADA RESTO MENU////////////////////////
 function* handleUpdateRestoMenu(action:any):any {
 
    try {
        const result:any = yield call(adminApi.updateRestoMenu,action.payload.id, action.payload.dataAll);     
        yield put(updateRestoMenuResponse(result.data))
    } catch (error) {
        yield put(updateRestoMenuResponse({message: error}))
    }
}
export{
    handleGetRestoMenuAll,
    handleAddRestoMenu,
    handleDeleteRestoMenu,
    handleUpdateRestoMenu
}