import axios from "../config";


const getBank = (seacrh:any)=>{
    return axios.get(`/bank?search=${seacrh}`);
}

const BankApi ={
    getBank
}

export default BankApi