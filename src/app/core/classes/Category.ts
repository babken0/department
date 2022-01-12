import {CategoryModel} from "../model/category.model";
import {SubCategory} from "./SubCategory";

export class Category implements CategoryModel {
  category_id: number;
  category_nm: string;
  current_cat_am: string;
  subCategories: Array<SubCategory> = [];
  isActive = false;

  constructor(category_id: number, category_nm: string, current_cat_am: string) {
    this.category_id = category_id;
    this.category_nm = category_nm;
    this.current_cat_am = current_cat_am;
  }
}
