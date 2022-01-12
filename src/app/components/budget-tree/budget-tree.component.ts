import { Component, OnInit } from '@angular/core';
import {Department} from "../../core/classes/Department";
import {DepartmentService} from "../../core/services/department-service";

@Component({
  selector: 'app-budget-tree',
  templateUrl: './budget-tree.component.html',
  styleUrls: ['./budget-tree.component.css']
})
export class BudgetTreeComponent implements OnInit {
  departments:Department[] = []
  constructor(private departmentService:DepartmentService) {
    departmentService.initDepartments().subscribe()
    this.departments = departmentService.getDepartments();
  }

  ngOnInit(): void {
  }

  toggleDepartment() {
    this.departments.map(department => {
      department.isActive = false
      department.groups.map(group => {
        group.isActive = false
        group.categories.map(category => category.isActive =false)
      })
    })
  }

  toggleGroup() {
    this.departments.map(department => {
      department.isActive = true
      department.groups.map(group => {
        group.isActive = false
        group.categories.map(category => category.isActive =false)
      })
    })
  }

  toggleCategory() {
    this.departments.map(department => {
      department.isActive = true
      department.groups.map(group => {
        group.isActive = true
        group.categories.map(category => category.isActive =false)
      })
    })
  }

  toggleSubCategory() {
    this.departments.map(department => {
      department.isActive = true
      department.groups.map(group => {
        group.isActive = true
        group.categories.map(category => category.isActive = !category.isActive)
      })
    })
  }
}
