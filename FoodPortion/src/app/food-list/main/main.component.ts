import { Component } from '@angular/core';
import { IParams } from 'src/app/shared/models';
import { StorageService } from 'src/app/shared/storage.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
  ]
})
export class MainComponent {

  constructor(private storageService: StorageService) {
        
  }

  get params():IParams{
    return this.storageService.params;
  } 

  getProportions(){

    let bzu = this.params.portion_bzu.split(':').map(s=>+s);
    if(bzu.length != 3) {
      return 'не корректный формат, пример 1:1:4';
    }    
    return '';
  }

}
