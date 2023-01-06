import { Component } from '@angular/core';
import { IDishe, IDisheAll } from 'src/app/shared/models';
import { StorageService } from 'src/app/shared/storage.service';


@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html'
})
export class DishesComponent {


  disheAll!:IDisheAll;

  constructor(storageService: StorageService) {    
    this.disheAll = storageService.disheAll;
  }
  
}
