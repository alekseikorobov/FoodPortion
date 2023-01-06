import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DishesComponent } from './food-list/dishes/dishes.component';
import { FoodListComponent } from './food-list/food-list.component';
import { MainComponent } from './food-list/main/main.component';
import { ProductsComponent } from './food-list/products/products.component';
import { PortionsComponent } from './portions/portions.component';

const routes: Routes = [
  { path: '', redirectTo: 'settings/dishes', pathMatch: 'full' },
  { path: 'settings', redirectTo: 'settings/dishes', pathMatch: 'full' },
  { 
    path: 'settings', component: FoodListComponent,
      children:[
        { path:'dishes',component:DishesComponent },
        { path:'products',component:ProductsComponent },
        { path:'main',component:MainComponent },
      ]
  },  
  { path: 'portions', component: PortionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
