import axios from "../config";


const getRestoall = (search: any, page: number, entry: number)=>{
    return axios.get( `/resto-menus?search=${search}&page=${page}&limit=${entry}`);
}

const getResto = (seacrh:any)=>{
    return axios.get(`/resto-menus/${seacrh}`);
}

const adminApi ={
    getResto,
    getRestoall
}

export default adminApi