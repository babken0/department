import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map, shareReplay} from "rxjs/operators";
import {BudgetModel} from "../model/budget.model";
import {Category} from "../classes/Category";
import {Department} from "../classes/Department";
import {Group} from "../classes/Group";
import {SubCategory}from "../classes/SubCategory";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  subCategories$ !: Observable<BudgetModel[]>
  private departments: Department[] = []

  constructor(private http: HttpClient) {
    this.subCategories$ = this.http.get("../../assets/response.json")
      .pipe(
        map(data => data["data"] as BudgetModel[]),
        shareReplay({bufferSize: 1, refCount: true})
      )
    this.initDepartments()
  }

  getDepartments() {
    return this.departments;
  }


  initDepartments() {
    return this.subCategories$.pipe(
      map(subCategories => subCategories.map(
        sub => {
          this.addDepartment(sub.department_id, sub.department_nm, sub.current_department_am);
          this.addGroup(sub.group_id, sub.group_nm, sub.current_group_am, sub.department_id);
          this.addCategory(sub.category_id, sub.category_nm, sub.current_cat_am, sub.department_id, sub.group_id);
          this.addSubcategory(sub.sub_cat_id, sub.sub_cat_nm, sub.current_sub_cat_am, sub.department_id, sub.group_id, sub.category_id)
        }
        )
      ))
  }

  private addDepartment(id: number, name: string, amount: string) {
    if (!this.departments.find(department => department.department_id === id)) {
      this.departments.push(new Department(id, name, amount))
    }
  }

  private addGroup(group_id: number, group_nm: string, current_group_am: string, department_id: number) {
    const department: Department = <Department>this.departments.find(department => department.department_id == department_id);
    if (!department.groups.find(group => group.group_id == group_id)) {
      department.groups.push(new Group(group_id, group_nm, current_group_am))
    }
  }

  private addCategory(category_id: number, category_nm: string, current_cat_am: string, department_id: number, group_id: number) {
    const department: Department = <Department>this.departments.find(department => department.department_id == department_id);
    const group: Group = <Group>department.groups.find(group => group.group_id == group_id)
    if (!group.categories.find(category => category.category_id == category_id)) {
      group.categories.push(new Category(category_id, category_nm, current_cat_am))
    }
  }

  private addSubcategory(sub_cat_id: number, sub_cat_nm: string, current_sub_cat_am: string, department_id: number, group_id: number, category_id: number) {
    const department: Department = <Department>this.departments.find(department => department.department_id == department_id);
    const group: Group = <Group>department.groups.find(group => group.group_id == group_id);
    const category: Category = <Category>group.categories.find(category => category.category_id == category_id);
    if (!category.subCategories?.find(subCategory => subCategory.sub_cat_id == sub_cat_id)) {
      category.subCategories.push(new SubCategory(sub_cat_id, sub_cat_nm, current_sub_cat_am))
    }
  }

}
