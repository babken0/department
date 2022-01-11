import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SubCategory} from "../model/SubCategory";
import {map, shareReplay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {
  subCategories$ !: Observable<SubCategory[]>

  constructor(private http:HttpClient) {
    this.subCategories$ =  this.http.get("src/assets/response.json")
      .pipe(
        map(data => data["data"] as SubCategory[]),
        shareReplay({bufferSize: 1, refCount: true})
      )
  }

  getSubCategories(){
    return this.subCategories$;
  }
}
