import {Group} from "./Group";

export  interface Department {
  department_id: number,
  department_nm: string,
  current_department_am:string,
  groups:Group[]
}
