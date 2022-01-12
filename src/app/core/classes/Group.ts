import {GroupModel} from "../model/group.model";
import {Category} from "./Category";

export class Group implements GroupModel {
  current_group_am: string;
  group_id: number;
  group_nm: string;
  categories: Category[] = []
  isActive = false


  constructor(group_id: number, group_nm: string, current_group_am: string) {
    this.current_group_am = current_group_am;
    this.group_id = group_id;
    this.group_nm = group_nm;
  }
}
