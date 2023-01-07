import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { PortionsComponent } from './portions/portions.component';
import { PortionTableComponent } from './portions/portions-list/portion-table/portion-table.component';
import { ProductsComponent } from './food-list/products/products.component';
import { DishesComponent } from './food-list/dishes/dishes.component';
import { MainComponent } from './food-list/main/main.component';
import { DishePartComponent } from './food-list/dishes/dishe-part/dishe-part.component';
import { TravelProductsComponent } from './portions/travel-products/travel-products.component';
import { PortionsListComponent } from './portions/portions-list/portions-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    PortionsComponent,
    PortionTableComponent,
    ProductsComponent,
    DishesComponent,
    MainComponent,
    DishePartComponent,
    TravelProductsComponent,
    PortionsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
