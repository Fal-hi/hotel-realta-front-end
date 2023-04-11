import axios from '../config'

const createRestoPhoto = (data:any)=>{
    return axios.post(`/resto-menu-photos/upload`,data, {
    headers: {
        "Content-Type":"multipart/form-data"
    }
})
}

const getaallguest =()=>{
    return axios.get('/resto-menus/photo')
}

const restoMenuApi = {
    createRestoPhoto,
    getaallguest
}

export default restoMenuApi;