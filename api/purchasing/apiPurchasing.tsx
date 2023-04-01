import axios from '../config'

//VENDOR

const getAll = (search: any, page: number, entry: number) => {
    return axios.get(`/purchasing/vendor?page=${page}&limit=${entry}&search=${search}`);
};  

const create = (data:any) => {
    return axios.post('purchasing/vendor',data);
};

const product = () => {
    return axios.get('purchasing/veproStock')
}

const update = (id: number, data: any) => {
    return axios.put(`purchasing/vendor/${id}`, data)
}

const remove = (id: number) => {
    return axios.delete(`purchasing/vendor/${id}`)
}

const search = (search: any) => {
    return axios.get(`purchasing/vendor/${search}`)
}


//STOCK

const getAllStock = (search: any, page: number, entry: number) => {
    return axios.get(`purchasing/stock?page=${page}&limit=${entry}&search=${search}`);
}


//LISTORDER

const getListOrder = (search: any, page: number, entry: number) => {
    return axios.get(`/purchasing/listOrder?page=${page}&limit=${entry}&search=${search}`)
}

const apiPurchasing = {
    getAll,
    create,
    product,
    remove,
    update,
    search,
    getAllStock,
    getListOrder
}

export default apiPurchasing