import axios from "../config";


const getTransaction = (search:any, page:any, limit:any, type:any)=>{
    return axios.get(`/payment-transacation?search=${search}&page=${page}&limit=${limit}&type=${type}`);
}

const getHistoryTransaction = (search:any, page:any, limit:any)=>{
    return axios.get(`/payment-transacation/topup?search=${search}&page=${page}&limit=${limit}`);
}

const createTopup = (data:any)=>{
    return axios.post(`/payment-transacation`,data);
}

const createBookingandResto = (data:any)=>{
    return axios.post(`/payment-transacation/booking`,data);
}
const TransactionApi ={
    getTransaction,
    createTopup,
    createBookingandResto,
    getHistoryTransaction
}

export default TransactionApi