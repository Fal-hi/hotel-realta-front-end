import axios from "../config";


const getUserAccount = ()=>{
    return axios.get(`/user-accounts`);
}
const createAccount = (data:any)=>{
    return axios.post(`/user-accounts`,data);
}
const updateAccount = (id: number, data:any) => {
    return axios.put(`/user-accounts/${id}`, data);
};

const deleteAccount = (id: number) => {
    return axios.delete(`/user-accounts/${id}`);
};

const AccountApi ={
    getUserAccount,
    createAccount,
    updateAccount,
    deleteAccount
}

export default AccountApi