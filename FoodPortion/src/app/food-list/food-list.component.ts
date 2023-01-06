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
