import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DishesComponent } from './food-list/dishes/dishes.component';
import { FoodListComponent } from './food-list/food-list.component';
import { MainComponent } from './food-list/main/main.component';
import { ProductsComponent } from './food-list/products/products.component';
import { PortionsListComponent } from './portions/portions-list/portions-list.component';
import { PortionsComponent } from './portions/portions.component';
import { TravelProductsComponent } from './portions/travel-products/travel-products.component';

const routes: Routes = [
  { path: '', redirectTo: 'settings/dishes', pathMatch: 'full' },
  { path: 'settings', redirectTo: 'settings/dishes', pathMatch: 'full' },
  {
    path: 'settings', component: FoodListComponent,
    children: [
      { path: 'dishes', component: DishesComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'main', component: MainComponent },
    ]
  },
  { path: 'portions', redirectTo: 'portions/list', pathMatch: 'full' },
  {
    path: 'portions', component: PortionsComponent,
    children: [
      { path: 'list', component: PortionsListComponent },
      { path: 'products', component: TravelProductsComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
