import axios from "../config";


const getTransaction = ()=>{
    return axios.get(`/payment-transacation`);
}

const TransactionApi ={
    getTransaction
}

export default TransactionApi