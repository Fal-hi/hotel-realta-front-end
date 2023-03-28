import ActionTypes from "./actionTypes";
import { Departement } from "./departmentDto";

export const getDepartment = (search: string, page: number, entry: number) => {
  const payload = {
    search,
    page,
    entry,
  };
  return {
    type: ActionTypes.GET_DEPARTMENT,
    payload,
  };
};

export const getDepartmentResponse = (payload: Departement) => {
  return {
    type: ActionTypes.GET_DEPARTMENT_RESPONSE,
    payload,
  };
};

export const createDepartment = (payload: any) => {
  return {
    type: ActionTypes.CREATE_DEPARTMENT,
    payload,
  };
};

export const createDepartmentResponse = (payload: any): any => {
  return {
    type: ActionTypes.CREATE_DEPARTMENT_RESPONSE,
    payload,
  };
};

export const deleteDepartment = (payload: any) => {
  return {
    type: ActionTypes.DELETE_DEPARTMENT,
    payload,
  };
};

export const deleteDepartmentResponse = (payload: any) => {
  return {
    type: ActionTypes.DELETE_DEPARTMENT_RESPONSE,
    payload,
  };
};

export const updateDepartment = (payload: any) => {
  return {
    type: ActionTypes.UPDATE_DEPARTEMENT,
    payload,
  };
};
export const updateDepartmentResponse = (payload: any) => {
  return {
    type: ActionTypes.UPDATE_DEPARTEMENT_RESPONSE,
    payload,
  };
};
