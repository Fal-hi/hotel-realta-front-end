import axios from '../config'

//VENDOR

const getAll = (search: any, page: number, entry: number, searchPri: any) => {
    return axios.get(`/purchasing/vendor?page=${page}&limit=${entry}&search=${search}&searchPri=${searchPri}`);
};  

const create = (data:any) => {
    return axios.post('purchasing/vendor',data);
};

const product = () => {
    return axios.get('purchasing/veproStock')
}

const productId = (id: any) => {
    return axios.get(`purchasing/veproStock/${id}`)
}

// const productId = (page: number, limit: number, id: any) => {
//     return axios.get(`veproStockId?page=${page}&limit=${limit}&id=${id}`)
// }

const update = (id: number, data: any) => {
    return axios.put(`purchasing/vendor/${id}`, data)
}

const remove = (id: number) => {
    return axios.delete(`purchasing/vendor/${id}`)
}

const search = (search: any) => {
    return axios.get(`purchasing/vendor/${search}`)
}

export const getStocks = async () => {
    const response = await axios.get('purchasing/stocks');
    return response.data
}

export const getVendors = async () => {
    const response = await axios.get('purchasing/vendorAll');
    return response.data
}


const removeVepro = (id: number) => {
    return axios.delete(`purchasing/vendor-product/${id}`)
}

const updateVepro = (id: number, data: any) => {
    return axios.put(`purchasing/vendor-product/${id}`, data)
}


//STOCK

const getAllStock = (search: any, page: number, entry: number) => {
    return axios.get(`purchasing/stock?page=${page}&limit=${entry}&search=${search}`);
}

const createStock = (data:any) => {
    return axios.post('purchasing/stock',data);
}

const removeStock = (id: number) => {
    return axios.delete(`purchasing/stock/${id}`)
}

const updateStock = (id: number, data: any) => {
    return axios.put(`purchasing/stock/${id}`, data)
}

const stockId = (id: any) => {
    return axios.get(`purchasing/stock/${id}`)
}


//LISTORDER

const getListOrder = (search: any, page: number, entry: number, searchStat:any) => {
    return axios.get(`/purchasing/listOrder?page=${page}&limit=${entry}&search=${search}&searchStat=${searchStat}`)
}

const updateListOrder = (id: number, data: any) => {
    // console.log(id)
    return axios.put(`purchasing/purchase-order-header/${id}`, data)
}

const removeListOrder = (id: number) => {
    return axios.delete(`purchasing/purchase-order-header/${id}`)
}

const findListOrder = (id: any) => {
    return axios.get(`purchasing/listOrder/${id}`)
}

const removePurchaseDetail = (id: number) => {
    return axios.delete(`purchasing/purchase-order-detail/${id}`)
}



//VENDOR PRODUCT
const createVendorProduct = (data:any) => {
    return axios.post('purchasing/vendor-product',data);
}


//PURCHASE ORDER DETAIL
const createPode = (data:any) => {
    return axios.post('purchasing/purchase-order-detail',data);
}

const updatePode = (id: number, data: any) => {
    return axios.put(`purchasing/purchase-order-detail/${id}`,data)
}


//STOCK DETAIL
const createStod = (data:any) => {
    return axios.post('purchasing/stock-detail',data);
}

const updateStod = (id: number, data: any) => {
    return axios.put(`purchasing/stock-detail/${id}`, data)
}


//PURCHASE ORDER HEADER
const createPohe = (data:any) => {
    return axios.post('purchasing/purchase-order-header',data);
}


//STOCK PHOTOS
const createPhotos = (data: any) => {
    return axios.post(`purchasing/stock-photo`,data, {
        headers:{
            "Content-Type":'multipart/form-data'
        }
    })
}

const getPhotos = (search: any, page: number, entry: number) => {
    return axios.get(`/purchasing/gallery?page=${page}&limit=${entry}&search=${search}`);
}

const apiPurchasing = {
    getAll,
    create,
    product,
    remove,
    update,
    search,
    getAllStock,
    getListOrder,
    createStock,
    removeStock,
    updateStock,
    updateListOrder,
    removeListOrder,
    productId,
    findListOrder,
    removePurchaseDetail,
    createVendorProduct,
    removeVepro,
    updateVepro,
    createPode,
    updatePode,
    createStod,
    createPohe,
    stockId,
    updateStod,
    createPhotos,
    getPhotos,
}

export default apiPurchasing