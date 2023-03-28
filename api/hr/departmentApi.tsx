import axios from "../config";

interface Idata {
  name: string;
}

const getDepartment = (search: any, page: number, entry: number) => {
  return axios.get(
    `/hr/department?search=${search}&page=${page}&entry=${entry}`
  );
};

const createDepartment = (data: Idata) => {
  return axios.post(`/hr/department`, data);
};

const deleteDepartment = (id: number) => {
  return axios.delete(`/hr/department/${id}`);
};

const updateDepartment = (id: number, data: Idata) => {
  return axios.put(`/hr/department/${id}`, data);
};

const departmentApi = {
  updateDepartment,
  getDepartment,
  createDepartment,
  deleteDepartment,
};

export default departmentApi;
