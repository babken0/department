import {DepartmentModel} from "../model/department.model";
import {Group} from "./Group";

export class Department implements DepartmentModel{
  department_id: number;
  department_nm: string;
  current_department_am: string;
  isActive = false


  groups:Group[] = [];

  constructor( department_id: number, department_nm: string,current_department_am: string) {
    this.current_department_am = current_department_am;
    this.department_id = department_id;
    this.department_nm = department_nm;
  }


}
