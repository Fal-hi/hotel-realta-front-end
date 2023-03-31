import axios from "../config";


const getRestoall = ()=>{
    return axios.get( `/resto-menus`);
}

const getResto = (seacrh:any)=>{
    return axios.get(`/resto-menus/${seacrh}`);
}

const adminApi ={
    getResto,
    getRestoall
}

export default adminApi