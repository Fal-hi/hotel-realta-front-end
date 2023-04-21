import axios from '../config';

const createOrderResto = (data:any) =>{
    return axios.post('/order-menu-detail/',data)
}

const getOrderMenu = (id:any) =>{
    return axios.get(`/order-menu-detail/${id}`)
}

const updateOrder = (id:any ,data:any)=>{
    console.log('API', id, data)
    return axios.put(`/order-menus/${id.orme_id}`,data)
}

const orderApi = {
    createOrderResto,
    getOrderMenu,
    updateOrder
}

export default orderApi