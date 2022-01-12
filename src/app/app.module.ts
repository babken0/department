import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { BudgetTreeComponent } from './components/budget-tree/budget-tree.component';
import { UpDownDirective } from './directives/up-down.directive';

@NgModule({
  declarations: [
    AppComponent,
    BudgetTreeComponent,
    UpDownDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
