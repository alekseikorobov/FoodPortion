import { Component } from '@angular/core';
import { IProduct as IProduct } from '../shared/IProduct';
import { StorageService } from '../shared/storage.service';


interface IPortion {
  product: IProduct
}

interface IPortionGroup {
  portionGramm: number;
  calories: number;
  caloriesPorcent: number;
}

interface IPortionDay {

  day: string;
  portion1List: IPortion[]
  portion1Group?: IPortionGroup

  portion2List: IPortion[]
  portion2Group?: IPortionGroup

  portion3List: IPortion[]
  portion3Group?: IPortionGroup

  portion4List: IPortion[]
  portion4Group?: IPortionGroup
}


@Component({
  selector: 'app-portions',
  templateUrl: './portions.component.html'
})
export class PortionsComponent {


  portionList: IPortionDay[] = [
    {
      day: '01',
      portion1List: [
        {
          product: { id: 4, name: 'Колбаса с/к', proteins: 20, fats: 40, carbohydrates: 0, calories100g: 430, onePortionG: 55, isMain: true, types: 'з,п' },
        }
      ],
      portion2List: [],
      portion3List: [],
      portion4List: [],
    }
  ]

  constructor(private storageService: StorageService) {

    for (let index = 0; index < this.portionList.length; index++) {
      const portion = this.portionList[index];

      if (portion.portion1Group == null) {
        portion.portion1Group = this.getGroupPortion(portion.portion1List);
        portion.portion2Group = this.getGroupPortion(portion.portion2List);
        portion.portion3Group = this.getGroupPortion(portion.portion3List);
        portion.portion4Group = this.getGroupPortion(portion.portion4List);
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
        portion1List: this.getPortions('з'),
        portion2List: this.getPortions('о'),
        portion3List: this.getPortions('у'),
        portion4List: this.getPortions('п'),
      };

      portion.portion1Group = this.getGroupPortion(portion.portion1List);
      portion.portion2Group = this.getGroupPortion(portion.portion2List);
      portion.portion3Group = this.getGroupPortion(portion.portion3List);
      portion.portion4Group = this.getGroupPortion(portion.portion4List);

      this.portionList.push(portion);
    }
  }
  getPortions(type: string): IPortion[] {
    throw new Error('Method not implemented.');
  }
}
