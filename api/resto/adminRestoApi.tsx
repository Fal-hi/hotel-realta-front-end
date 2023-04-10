import axios from "../config";


const getRestoall = (search: any, page: number, entry: number)=>{
    return axios.get( `/resto-menus?search=${search}&page=${page}&limit=${entry}`);
}

const createRestoMenu = (data:any)=>{
    return axios.post('/resto-menus',data)
}

const deleteRestoMenu = (id:number)=>{
    return axios.delete(`/resto-menus/${id}`)
}

const updateRestoMenu = (id:number,data:any)=>{
    return axios.put(`/resto-menus/${id}`,data)
}

const adminApi ={
    getRestoall,
    createRestoMenu,
    deleteRestoMenu,
    updateRestoMenu
}

export default adminApi