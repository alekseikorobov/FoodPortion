import { Component, Directive, Input, OnDestroy, OnInit } from '@angular/core';
import { StorageService } from '../shared/storage.service';
import { IParams } from '../shared/IParams';
import { IProduct } from '../shared/IProduct';

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

  deleteRow(p: IProduct) {
    this.storageService.deleteProduct(p.id);
    return false;
  }

  addRow() {
    this.storageService.addProduct({
      id: 1,
      name: "",
      proteins: 0,
      fats: 0,
      carbohydrates: 0,
      calories100g: 0,
      onePortionG: 0,
      isMain:true,
      types:'з,о,у,п'
    });
    return false;
  }


  textSaved = '';
  save() {

    this.storageService.save();

    


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
