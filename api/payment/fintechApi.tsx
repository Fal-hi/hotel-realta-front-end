import axios from "../config";


const getFintech = (seacrh:any)=>{
    return axios.get(`/fintech?search=${seacrh}`);
}

const FintechApi ={
    getFintech
}

export default FintechApi