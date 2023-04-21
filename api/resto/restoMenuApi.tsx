import axios from '../config'

const createRestoPhoto = (data:any)=>{
    return axios.post(`/resto-menu-photos/upload`,data, {
    headers: {
        "Content-Type":"multipart/form-data"
    }
})
}



const restoMenuApi = {
    createRestoPhoto,
  
}

export default restoMenuApi;