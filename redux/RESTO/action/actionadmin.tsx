import ActionTypes from "./actionType";

////////////////////////UNTUK MENAMPILKAN SEMUA DATA PADA RESTO MENU/////////////////////
export const doGetRestoMenuAll = (search: string, page: number, entry: number, sortType: string)=>{
    const payload = {
        search,
        page,
        entry,
        sortType,
      };
    return {
            type: ActionTypes.GET_RESTOMENU,
            payload,
        }
};

export const doGetRestoMenuAllResponse = (payload:any)=>{
   return {
       
            type: ActionTypes.GET_RESTOMENU_RESPONSE,
            payload
   }
};

////////////////////////UNTUK MENAMBAHKAN DATA PADA RESTO MENU////////////////////////
export const addRestoMenu =(payload:any)=>{
    return {
        type: ActionTypes.ADD_RESTOMENU,
        payload
    };
};

export const addRestoMenuResponse = (payload:any)=>{
    return{
        type: ActionTypes.ADD_RESTOMENU_RESPONSE,
        payload
    }
}

/////////////////////UNTUK MENGHAPUS DATA PADA RESTO MENU////////////////////////
export const deleteRestoMenu =(payload:any)=>{
    return {
        type: ActionTypes.DEL_RESTOMENU,
        payload
    };
};

export const deleteRestoMenuResponse = (payload:any)=>{
    return{
        type: ActionTypes.DEL_RESTOMENU_RESPONSE,
        payload
    }
}

/////////////////////UNTUK MENGEDIT DATA PADA RESTO MENU////////////////////////
export const updateRestoMenu =({...payload})=>{
    
    return {
        type: ActionTypes.UPDATE_RESTOMENU,
        payload
    };
};

export const updateRestoMenuResponse = (payload:any)=>{
    return{
        type: ActionTypes.UPDATE_RESTOMENU_RESPONSE,
        payload
    }
}
