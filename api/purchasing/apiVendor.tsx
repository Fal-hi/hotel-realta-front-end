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

const getAllStock = () => {
    return axios.get('purchasing/stocks/')
}

const ApiVendor = {
    getAll,
    create,
    product,
    remove,
    update,
    search,
    getAllStock,
}

export default ApiVendor