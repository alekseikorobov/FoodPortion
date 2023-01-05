import { Injectable } from '@angular/core';
import { IParams } from "./IParams";
import { IProduct } from './IProduct';
import { inner_param } from './const';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  
  
  
  existsMain(products: IProduct[]):boolean {
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
  }


  save() {
    localStorage.setItem('params', JSON.stringify(this.param));
  }

  existsId(id: number, products: IProduct[]): boolean {

    for (let index = 0; index < products.length; index++) {
      const product = products[index];
      if (product.id == id) {
        return true;
      }
    }
    return false;
  }

  addProduct(product: IProduct) {

    let id = -1;

    while (this.existsId(id, this.param.products)) {
      id -= 1;
    }

    product.id = id;


    this.param.products.push(product);
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

  deleteProduct(id: number) {
    
    let index = this.getIndexProductById(id, this.param.products);

    if (index > -1) { // only splice array when item is found
      this.param.products.splice(index, 1); // 2nd parameter means remove one item only
    }

  }

  

  param!: IParams;
  get params(): IParams {

    if (!this.param) {
      let params_str = localStorage.getItem('params');

      if (params_str != null) {
        this.param = JSON.parse(params_str);
      } else {
        this.param = inner_param;
      }
    }
    return this.param;
  }

  constructor() { }
}


