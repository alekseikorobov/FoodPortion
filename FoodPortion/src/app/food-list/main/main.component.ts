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

}
