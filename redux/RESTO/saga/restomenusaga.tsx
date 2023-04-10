import restoMenuApi from '@/api/resto/restoMenuApi'
import { call, put} from 'redux-saga/effects'
import { addRestoMenuPhotoResponse, getGuestMenuPhoto, getGuestMenuPhotoResponse } from '../action/actionrestomenu'

function* handleAddRestoPhotos(action:any):any{
    try {
        const result = yield call(restoMenuApi.createRestoPhoto,action.payload)
        yield put(addRestoMenuPhotoResponse(result.data))
    } catch (error) {
        yield put(addRestoMenuPhotoResponse({message:error}))
    }
}

function* handleGetGuest():any {
    
    try {
        const result = yield call(restoMenuApi.getaallguest)
        
        yield put(getGuestMenuPhotoResponse(result.data))
    } catch (error) {
        yield put(getGuestMenuPhotoResponse({message:error}))
    }
}

export {
    handleAddRestoPhotos,
    handleGetGuest
}