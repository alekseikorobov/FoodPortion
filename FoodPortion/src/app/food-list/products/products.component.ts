import { Component } from '@angular/core';
import { IParams } from 'src/app/shared/models';
import { IProduct } from 'src/app/shared/models';
import { StorageService } from 'src/app/shared/storage.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent {

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

}
