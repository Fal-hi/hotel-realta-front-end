import axios from "../config";


const getUserAccount = ()=>{
    return axios.get(`/user-accounts`);
}

const AccountApi ={
    getUserAccount
}

export default AccountApi