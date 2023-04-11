import axios from '../config';

const createOrderResto = (data:any) =>{
    return axios.post('/order-menu-detail/',data)
}

const orderApi = {
    createOrderResto
}

export default orderApi