import { Component } from '@angular/core';
import { IParams, IPortionDay, IPortionPart, IProduct } from 'src/app/shared/models';
import { StorageService } from 'src/app/shared/storage.service';

@Component({
  selector: 'app-travel-products',
  templateUrl: './travel-products.component.html',
  styles: [
  ]
})
export class TravelProductsComponent {


  products!: IProduct[];

  constructor(private storageService: StorageService) {

    this.products = this.initProduct();
  }
  initProduct(): IProduct[] {
    let _products: IProduct[] = [];
    for (let index = 0; index < this.storageService.portions.length; index++) {
      const portionDay = this.storageService.portions[index];

      this.portionByDay(_products, portionDay.portion1);
      this.portionByDay(_products, portionDay.portion2);
      this.portionByDay(_products, portionDay.portion3);
      this.portionByDay(_products, portionDay.portion4);
    }
    return _products;

  }
  portionByDay(_products: IProduct[], portionPart: IPortionPart) {
    for (let index1 = 0; index1 < portionPart.portionList.length; index1++) {
      const portion = portionPart.portionList[index1];

      if (portion.product) {
        let index_product = this.storageService.getIndexProductById(portion.product.id, _products);
        if (index_product == -1) {
          _products.push(
            {
              name:portion.product.name,
              onePortionG:portion.product.onePortionG,
              calories100g:0,
              carbohydrates:0,
              fats:0,
              id:portion.product.id,
              isMain:false,
              proteins:0,
              types:''
            }
          );
        } else {
          _products[index_product].onePortionG += portion.product.onePortionG;
        }
      }
    }
  }
  get params(): IParams {
    return this.storageService.params;
  }

  download() {

  }
}
