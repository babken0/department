import {Category} from "./Category";

export interface Group {
  group_id: number,
  group_nm: string,
  current_group_am: string,
  categories:Category[],
}
