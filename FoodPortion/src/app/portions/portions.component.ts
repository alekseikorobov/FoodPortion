import { Component } from '@angular/core';
import { IDishe, IId, IParams, IPortion, IPortionDay, IPortionGroup, IPortionPart } from '../shared/models';
import { StorageService } from '../shared/storage.service';


@Component({
  selector: 'app-portions',
  templateUrl: './portions.component.html'
})
export class PortionsComponent {

  get portionList(): IPortionDay[]{
    return this.storageService.portions;
  }

  constructor(private storageService: StorageService) {
  }


  generate() {
    this.portionList.length = 0;

    for (let index = 0; index < this.params.count_day; index++) {

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


  get params(): IParams {
    return this.storageService.params;
  }

  textSaved = '';
  save(){
    this.storageService.save();
    this.textSaved = 'Saved';
    setTimeout(() => {
      this.textSaved = '';
    }, 1000);
  }
  download(){

  }

  getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }

  getPortions(type: string): IPortionPart {

    let portionPart = <IPortionPart>{};

    let portions = new Array<IPortion>();
    let dishes: IDishe[] = [];

    var max_call = 0;

    if (type == 'з') {
      dishes = this.storageService.disheAll.dishesPortion1;
      max_call = this.params.call * this.params.portion1 / 100;
    } else if (type == 'о' || type == 'у') {
      dishes = this.storageService.disheAll.dishesPortion2;
      max_call = this.params.call * this.params.portion2 / 100;
    } if (type == 'п') {
      dishes = this.storageService.disheAll.dishesPortion3;
      max_call = this.params.call * this.params.portion3 / 100;
    }

    let max_iteration = 50;

    let index = this.getRandomInt(dishes.length);

    let g = <IPortionGroup>{
      calories: 0,
      caloriesPorcent: 0,
      portionGramm: 0
    };

    let accuracy = 50; //погрешность вычисления, точность
    let addedIds: IId[] = []
    while (Math.abs(max_call - g.calories) > accuracy && max_iteration > 0) {
      index = this.getRandomInt(dishes.length);
      let dishe = dishes[index];

      max_iteration--;

      if (this.storageService.existsId(dishe.id, addedIds)) {
        continue;
      }

      let new_calories = g.calories + dishe.portionPart.portionGroup!.calories;
      
      if ((max_call - new_calories) < -accuracy) {
        continue;
      }
      
      dishe.portionPart.portionList.forEach(product =>
        portions.push(<IPortion>{
          product: product.product
        })
      );
      
      addedIds.push({ id: dishe.id });

      g.calories += dishe.portionPart.portionGroup!.calories;
      g.caloriesPorcent = +(g.calories * 100 / this.params.call).toFixed(2);
      g.portionGramm += dishe.portionPart.portionGroup!.portionGramm;
    }

    portionPart.portionList = portions;
    portionPart.portionGroup = g;
    
    return portionPart;
  }  
}
