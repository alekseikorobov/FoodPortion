import { Component, Directive, Input, OnDestroy, OnInit } from '@angular/core';
import { StorageService } from '../shared/storage.service';
import { IParams } from '../shared/models';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html'
})
export class FoodListComponent  { 

  constructor(private storageService: StorageService) {
        
  }

  get params():IParams{
    return this.storageService.params;
  }  

  


  textSaved = '';
  save() {

    this.storageService.save();

    console.log('export const inner_disheAll: IDisheAll = ');
    console.dir(JSON.stringify(this.storageService.disheAll));    
    console.log('export const inner_param: IParams = ');
    console.dir(JSON.stringify(this.storageService.params));
    console.log('export const inner_products: IProduct[] = ');
    console.dir(JSON.stringify(this.storageService.products));


    this.textSaved = 'Saved';
    

    setTimeout(() => {
      this.textSaved = '';
    }, 1000);
  }

  textCleared = '';
  clear() {
    
    this.storageService.clear();

    
    this.textCleared = 'Cleared';

    setTimeout(() => {
      this.textCleared = '';
    }, 1000);
  }
}
