import {SubCategoryModel} from "../model/subCategory.model";

export class SubCategory implements SubCategoryModel {
  current_sub_cat_am: string;
  sub_cat_id: number;
  sub_cat_nm: string;


  constructor(sub_cat_id: number, sub_cat_nm: string, current_sub_cat_am: string) {
    this.current_sub_cat_am = current_sub_cat_am;
    this.sub_cat_id = sub_cat_id;
    this.sub_cat_nm = sub_cat_nm;
  }
}
