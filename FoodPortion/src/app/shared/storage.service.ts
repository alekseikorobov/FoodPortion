import { Injectable } from '@angular/core';
import { inner_param, inner_disheAll } from './const';
import { IDishe, IDisheAll, IProduct,IId,IParams,IPortion,IPortionGroup } from './models';

@Injectable({
  providedIn: 'root'
})
export class StorageService {


  _disheAll!: IDisheAll;

  get disheAll(): IDisheAll {
    if (!this._disheAll) {
      let disheAll_str = localStorage.getItem('DisheAll');

      if (disheAll_str != null) {
        this._disheAll = JSON.parse(disheAll_str);
      }
      else {
        this._disheAll = this.initProduct();
      }
    }

    return this._disheAll;
  }

  initProduct(): IDisheAll {

    this.initProductPart(inner_disheAll.dishesPortion1);
    this.initProductPart(inner_disheAll.dishesPortion2);
    this.initProductPart(inner_disheAll.dishesPortion3);
    this.initProductPart(inner_disheAll.dishesPortion4);

    console.log('inner_disheAll', inner_disheAll);

    return inner_disheAll;


  }
  initProductPart(dishes: IDishe[]) {
    for (let index = 0; index < dishes.length; index++) {
      const dishesPortion = dishes[index];
      for (let index = 0; index < dishesPortion.portionPart.portionList.length; index++) {
        const portion = dishesPortion.portionPart.portionList[index];
        portion.product = this.getProductById(portion.productId!);
      }
      dishesPortion.portionPart.portionGroup = this.getGroupPortion(dishesPortion.portionPart.portionList);
      console.log('dishesPortion.portionPart.portionGroup',dishesPortion.portionPart.portionGroup);
    }
  }


  getProductByType(type: string, products: IProduct[]): IProduct[] {

    let results = new Array<IProduct>();

    for (let index = 0; index < products.length; index++) {
      const product = products[index];
      if (product.types.includes(type)) {
        results.push(product);
      }
    }

    return results;

  }


  getGroupPortion(portion1List: IPortion[]): IPortionGroup {
    let g = <IPortionGroup>{
      calories: 0,
      caloriesPorcent: 0,
      portionGramm: 0
    };

    for (let index = 0; index < portion1List.length; index++) {
      const portion = portion1List[index];
      if (portion.product) {
        g.calories += portion.product.calories100g * portion.product.onePortionG / 100;
        g.caloriesPorcent = +(g.calories * 100 / this.params.call).toFixed(2);
        g.portionGramm += portion.product.onePortionG;
      }
    }


    return g;
  }



  existsMain(products: IProduct[]): boolean {
    for (let index = 0; index < products.length; index++) {
      const product = products[index];
      if (product.isMain) {
        return true;
      }
    }

    return false;
  }
  clear() {
    localStorage.removeItem('params');
    localStorage.removeItem('DisheAll');
  }


  save() {
    localStorage.setItem('params', JSON.stringify(this._param));

    localStorage.setItem('DisheAll', JSON.stringify(this.disheAll));
  }

  existsId(id: number, items: IId[]): boolean {

    for (let index = 0; index < items.length; index++) {
      const item = items[index];
      if (item.id == id) {
        return true;
      }
    }
    return false;
  }

  addProduct(product: IProduct) {

    let id = -1;

    while (this.existsId(id, this._param.products)) {
      id -= 1;
    }

    product.id = id;


    this._param.products.push(product);
  }

  getIndexProductById(id: number, products: IProduct[]): number {

    for (let index = 0; index < products.length; index++) {
      const product = products[index];
      if (product.id == id) {
        return index;
      }
    }
    return -1;
  }

  getProductById(id: number): IProduct | undefined {

    for (let index = 0; index < this.params.products.length; index++) {
      const product = this.params.products[index];
      if (product.id == id) {
        return product;
      }
    }
    return undefined;
  }

  deleteProduct(id: number) {

    let index = this.getIndexProductById(id, this.params.products);

    if (index > -1) {
      this.params.products.splice(index, 1);
    }

  }



  _param!: IParams;
  get params(): IParams {

    if (!this._param) {
      let params_str = localStorage.getItem('params');

      if (params_str != null) {
        this._param = JSON.parse(params_str);
      } else {
        this._param = inner_param;
      }
    }
    return this._param;
  }

  constructor() { }
}


