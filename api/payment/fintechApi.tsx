import axios from "../config";


const getFintech = (seacrh:any)=>{
    return axios.get(`/fintech?search=${seacrh}`);
}

const createFintech = (data:any)=>{
    return axios.post(`/fintech`,data);
}
const updateFintech = (id: number, data:any) => {
    return axios.put(`/fintech/${id}`, data);
};

const deleteFintech = (id: number) => {
    return axios.delete(`/fintech/${id}`);
};

const FintechApi ={
    getFintech,
    createFintech,
    updateFintech,
    deleteFintech
}

export default FintechApi