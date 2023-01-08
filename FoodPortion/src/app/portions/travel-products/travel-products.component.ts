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

  products_g!: IProduct;

  constructor(private storageService: StorageService) {

    this.products = this.initProduct();
    this.products_g = this.initGroupProduct();
  }
  initGroupProduct(): IProduct {
    let pg = <IProduct>{
      onePortionG: 0,
      calories100g: 0
    };
    for (let index = 0; index < this.products.length; index++) {
      const product = this.products[index];
      pg.calories100g += product.calories100g;
      pg.onePortionG += product.onePortionG;
    }

    pg.calories100g = +(pg.calories100g).toFixed(2);
    pg.onePortionG = +(pg.onePortionG).toFixed(2);


    return pg;
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
              name: portion.product.name,
              onePortionG: portion.product.onePortionG,
              calories100g: 0,
              carbohydrates: 0,
              fats: 0,
              id: portion.product.id,
              isMain: false,
              proteins: 0,
              types: '',
              count_portion: 1
            }
          );
        } else {
          _products[index_product].onePortionG += portion.product.onePortionG;
          _products[index_product].count_portion! += 1;
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
