import { Injectable } from '@angular/core';
import { inner_disheAll } from './inner_disheAll';
import { inner_param } from './inner_param';
import { inner_products } from './inner_products';
import { IDishe, IDisheAll, IProduct, IId, IParams, IPortion, IPortionGroup, IPortionDay } from './models';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  _portions!: IPortionDay[];

  get portions(): IPortionDay[] {

    if (!this._portions) {
      let portions_str = localStorage.getItem('PortionDay');

      if (portions_str != null) {
        this._portions = JSON.parse(portions_str);
      }
      else {
        this._portions = [];
      }
      for (let index = 0; index < this._portions.length; index++) {
        const portion = this._portions[index];

        if (portion.portion1) { portion.portion1.portionGroup = this.getGroupPortion(portion.portion1.portionList); }
        if (portion.portion2) { portion.portion2.portionGroup = this.getGroupPortion(portion.portion2.portionList); }
        if (portion.portion3) { portion.portion3.portionGroup = this.getGroupPortion(portion.portion3.portionList); }
        if (portion.portion4) { portion.portion4.portionGroup = this.getGroupPortion(portion.portion4.portionList); }
      }
    }
    return this._portions;

  }

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
      this.fixedDisheAllGroup();
    }

    return this._disheAll;
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
  _products!: IProduct[];
  get products(): IProduct[] {

    if (!this._products) {
      let params_str = localStorage.getItem('Products');

      if (params_str != null) {
        this._products = JSON.parse(params_str);
      } else {
        this._products = inner_products;
      }
    }
    return this._products;
  }

  initProduct(): IDisheAll {

    this.initProductPart(inner_disheAll.dishesPortion1);
    this.initProductPart(inner_disheAll.dishesPortion2);
    this.initProductPart(inner_disheAll.dishesPortion3);

    return inner_disheAll;


  }
  initProductPart(dishes: IDishe[]) {
    for (let index = 0; index < dishes.length; index++) {
      const dishesPortion = dishes[index];
      for (let index = 0; index < dishesPortion.portionPart.portionList.length; index++) {
        const portion = dishesPortion.portionPart.portionList[index];
        if (portion.productId) {
          portion.product = this.getProductById(portion.productId);
        }
      }
      dishesPortion.portionPart.portionGroup = this.getGroupPortion(dishesPortion.portionPart.portionList);
    }
  }
  fixedDisheAllGroup() {
    this.initProductPart(this._disheAll.dishesPortion1);
    this.initProductPart(this._disheAll.dishesPortion2);
    this.initProductPart(this._disheAll.dishesPortion3);
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
        g.calories += +(portion.product.calories100g * portion.product.onePortionG / 100).toFixed(2);
        g.caloriesPorcent = +(g.calories * 100 / this.params.call).toFixed(2);
        g.portionGramm += portion.product.onePortionG;

        if (!g.carbohydrates) g.carbohydrates = 0;
        if (!g.fats) g.fats = 0;
        if (!g.proteins) g.proteins = 0;

        g.carbohydrates += +(portion.product.carbohydrates * portion.product.onePortionG / 100).toFixed(2);
        g.fats += +(portion.product.fats * portion.product.onePortionG / 100).toFixed(2);
        g.proteins += +(portion.product.proteins * portion.product.onePortionG / 100).toFixed(2);

        let p1 = g.proteins == 0 ? 1 : g.proteins;

        g.proteins_p =  1;
        g.carbohydrates_p = +(g.carbohydrates/p1).toFixed(2);
        g.fats_p =  +(g.fats/p1).toFixed(2);

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
    localStorage.removeItem('Products');
    localStorage.removeItem('PortionDay');
  }


  save() {
    localStorage.setItem('params', JSON.stringify(this.params));
    localStorage.setItem('DisheAll', JSON.stringify(this.disheAll));
    localStorage.setItem('Products', JSON.stringify(this.products));
    localStorage.setItem('PortionDay', JSON.stringify(this.portions));
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

  getMaxId(items: IId[]): number {
    let maxId = 0;
    for (let index = 0; index < items.length; index++) {
      maxId = Math.max(maxId, items[index].id);
    }
    return maxId;
  }

  addProduct(product: IProduct) {

    let id = this.getMaxId(this.products) + 1;
    product.id = id;
    this.products.push(product);
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

    for (let index = 0; index < this.products.length; index++) {
      const product = this.products[index];
      if (product.id == id) {
        return product;
      }
    }
    return undefined;
  }

  deleteProduct(id: number) {

    let index = this.getIndexProductById(id, this.products);

    if (index > -1) {
      this.products.splice(index, 1);
    }

  }

}


