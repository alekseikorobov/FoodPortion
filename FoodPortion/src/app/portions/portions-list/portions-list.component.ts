import { Component } from '@angular/core';
import { IDishe, IId, IParams, IPortion, IPortionDay, IPortionGroup, IPortionPart } from 'src/app/shared/models';
import { StorageService } from 'src/app/shared/storage.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-portions-list',
  templateUrl: './portions-list.component.html',
  styles: [
  ]
})
export class PortionsListComponent {
  get portionList(): IPortionDay[] {
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
  save() {
    this.storageService.save();
    this.textSaved = 'Saved';
    setTimeout(() => {
      this.textSaved = '';
    }, 1000);
  }

  downloadFile(data: any) {
    const replacer = (key: any, value: any) => {
      if(value === null) return '';
      
      if (typeof value === 'string' || value instanceof String){
        value = value?.replace(',',' ');
      }

      return value;

    }; // specify how you want to handle null values here
    const header = Object.keys(data[0]);
    let csv = data.map((row: any) => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
    csv.unshift(header.join(','));
    let csvArray = csv.join('\r\n');

    var blob = new Blob([csvArray], { type: 'text/csv' })
    saveAs(blob, "food_portions.csv");
  }


  download() {

    let data: any[] = [];

    for (let index = 0; index < this.portionList.length; index++) {
      const portion = this.portionList[index];

      let lineList: any[] = this.getLineList(portion.portion1, 'Завтрак', portion.day);

      lineList.forEach(item => {
        data.push(item);
      })
      lineList = this.getLineList(portion.portion2, 'Обед', portion.day);

      lineList.forEach(item => {
        data.push(item);
      })

      lineList = this.getLineList(portion.portion3, 'Ужин', portion.day);

      lineList.forEach(item => {
        data.push(item);
      })

      lineList = this.getLineList(portion.portion4, 'Перекус', portion.day);

      lineList.forEach(item => {
        data.push(item);
      })
    }


    this.downloadFile(data);

  }
  getLineList(portionPart: IPortionPart, type: string, day: string): any[] {
    let lineList: any[] = [];

    for (let index = 0; index < portionPart.portionList.length; index++) {
      const portion1 = portionPart.portionList[index];
      let line: any = {};      

      line['День'] = day;
      line['part'] = type;
      if (portion1.product) {
        line['Продукты'] = portion1.product.name;
        line['Кол-во гр/чел'] = portion1.product.onePortionG;
        line['Калорийность ккал/100гр'] = portion1.product.calories100g;
        line['Калорийность порции'] = portion1.product.calories100g * portion1.product.onePortionG / 100;
        line['белки (%)'] = portion1.product.proteins;
        line['жиры (%)'] = portion1.product.fats;
        line['Углеводы (%)'] = portion1.product.carbohydrates;
        line['белки (г)'] = portion1.product.proteins * portion1.product.onePortionG / 100;
        line['жиры (г)'] = portion1.product.fats * portion1.product.onePortionG / 100;
        line['Углеводы (г)'] = portion1.product.carbohydrates * portion1.product.onePortionG / 100;
      }
      lineList.push(line);
    }
    {
      let line: any = {};
      line['День'] = day;
      line['part'] = type;
      line['Продукты'] = '';
      line['Кол-во гр/чел'] = portionPart.portionGroup?.portionGramm;
      line['Калорийность ккал/100гр'] = portionPart.portionGroup?.calories;
      line['Калорийность порции'] = portionPart.portionGroup?.caloriesPorcent;
      line['белки (%)'] = '';
      line['жиры (%)'] = '';
      line['Углеводы (%)'] = '';
      line['белки (г)'] = '';
      line['жиры (г)'] = '';
      line['Углеводы (г)'] = '';
      lineList.push(line);
    }

    return lineList;
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
