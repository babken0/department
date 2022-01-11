import {SubCategory} from "./SubCategory";

export interface Category {
  category_id: number,
  category_nm: string,
  current_cat_am: string,
  subCategories: SubCategory[]
}
