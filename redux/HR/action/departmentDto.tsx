interface IData {
  department: number[] | string[];
  from: number;
  page: number;
  rows: number;
  to: number;
  totalData: number;
  totalPage: number;
}

export interface Departement {
  statusCode?: number;
  message: string | unknown;
  data?: IData;
}
