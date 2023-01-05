import { Component } from '@angular/core';
import { IPortion } from '../shared/IPortion';
import { IPortionDay } from '../shared/IPortionDay';
import { IPortionGroup } from '../shared/IPortionGroup';
import { IPortionPart } from '../shared/IPortionPart';
import { IProduct as IProduct } from '../shared/IProduct';
import { StorageService } from '../shared/storage.service';


@Component({
  selector: 'app-portions',
  templateUrl: './portions.component.html'
})
export class PortionsComponent {

  portionList: IPortionDay[] = [
    {
      day: '01',
      portion1: {
        portionList: [
          {
            product: { id: 4, name: 'Колбаса с/к', proteins: 20, fats: 40, carbohydrates: 0, calories100g: 430, onePortionG: 55, isMain: true, types: 'з,п' },
          }
        ],
      }
    }
  ]

  constructor(private storageService: StorageService) {

    for (let index = 0; index < this.portionList.length; index++) {
      const portion = this.portionList[index];

      if (portion.portion1?.portionGroup == null) {
        portion.portion1.portionGroup = this.getGroupPortion(portion.portion1.portionList);
      }

    }

  }
  getGroupPortion(portion1List: IPortion[]): IPortionGroup {
    let g = <IPortionGroup>{
      calories: 0,
      caloriesPorcent: 0,
      portionGramm: 0
    };

    for (let index = 0; index < portion1List.length; index++) {
      const portion = portion1List[index];
      g.calories += portion.product.calories100g * portion.product.onePortionG / 100;
      g.caloriesPorcent += g.calories * 100 / this.storageService.params.call;
      g.portionGramm += portion.product.onePortionG;
    }


    return g;
  }

  days: number = 1
  countPeoples: number = 1

  generate() {
    this.portionList = [];

    for (let index = 0; index < this.days; index++) {

      let portion = <IPortionDay>{
        day: (index + 1).toString(),
        portion1: this.getPortions('з'),
        portion2: this.getPortions('о'),
        portion3: this.getPortions('у'),
        portion4: this.getPortions('п'),
      };

      this.portionList.push(portion);
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

  getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }

  getPortions(type: string): IPortionPart {

    let portionPart = <IPortionPart>{};

    let portions = new Array<IPortion>();

    let products = this.getProductByType(type, this.storageService.params.products);

    console.log('products', type, products);

    var max_call = 0;

    if (type == 'з') {
      max_call = this.storageService.params.call * this.storageService.params.portion1 / 100;
    } else if (type == 'о') {
      max_call = this.storageService.params.call * this.storageService.params.portion2 / 100;
    } if (type == 'у') {
      max_call = this.storageService.params.call * this.storageService.params.portion3 / 100;
    } if (type == 'п') {
      max_call = this.storageService.params.call * this.storageService.params.portion4 / 100;
    }
    console.log('max_call', max_call);

    let max_iteration = 50;

    let index = this.getRandomInt(products.length);

    let g = <IPortionGroup>{
      calories: 0,
      caloriesPorcent: 0,
      portionGramm: 0
    };

    let accuracy = 50; //погрешность вычисления, точность

    while (Math.abs(max_call - g.calories) > accuracy && max_iteration > 0) {
      index = this.getRandomInt(products.length);
      let product = products[index];

      if (!product.isMain && portions.length == 0) {
        continue;
      }


      max_iteration--;

      if (this.storageService.existsId(product.id, portions.map(c => c.product))) {
        continue;
      }

      if (product.isMain && this.storageService.existsMain(portions.map(c => c.product))) {
        continue;
      }


      let new_calories = g.calories + product.calories100g * product.onePortionG / 100;
      if ((max_call - new_calories) < -accuracy) {
        continue;
      }


      portions.push(<IPortion>{
        product: product
      });

      g.calories += product.calories100g * product.onePortionG / 100;
      g.caloriesPorcent = +(g.calories * 100 / this.storageService.params.call).toFixed(2);
      g.portionGramm += product.onePortionG;
    }

    portionPart.portionList = portions;
    portionPart.portionGroup = g;

    console.log('max_iteration', max_iteration);
    console.log('g.calories', g.calories);
    console.log('max_call - g.calories', max_call - g.calories);

    return portionPart;
  }
}
