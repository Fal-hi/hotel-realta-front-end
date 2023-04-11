import axios from "../config";


const getBank = (seacrh:any)=>{
    return axios.get(`/bank?search=${seacrh}`);
}

const createBank = (data:any)=>{
    return axios.post(`/bank`,data);
}
const updateBank = (id: number, data:any) => {
    return axios.put(`/bank/${id}`, data);
};

const deleteBank = (id: number) => {
    return axios.delete(`/bank/${id}`);
};

const BankApi ={
    createBank,
    getBank,
    updateBank,
    deleteBank
}

export default BankApi