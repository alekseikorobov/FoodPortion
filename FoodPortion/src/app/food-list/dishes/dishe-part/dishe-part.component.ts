import { Component, Input, OnInit } from '@angular/core';
import { IDishe } from 'src/app/shared/models';
import { IParams } from 'src/app/shared/models';
import { IProduct } from 'src/app/shared/models';
import { StorageService } from 'src/app/shared/storage.service';

@Component({
  selector: 'app-dishe-part',
  templateUrl: './dishe-part.component.html',
  styles: [
  ]
})
export class DishePartComponent implements OnInit {


  @Input('dishes') dishesPortion!: IDishe[];

  @Input('type') type!: string;

  constructor(private storageService: StorageService) {
   

  }
  ngOnInit(): void {
    console.log('ngOnInit');
    for (let index = 0; index < this.dishesPortion.length; index++) {
      const dishesPortion = this.dishesPortion[index];
      dishesPortion.portionPart.portionGroup = this.storageService.getGroupPortion(dishesPortion.portionPart.portionList);

    }
  }

  deleteRow(dishe: IDishe, product: IProduct) {

    let index = this.storageService.getIndexProductById(product.id, dishe.portionPart.portionList.map(c => c.product!));

    if (index > -1) {
      dishe.portionPart.portionList.splice(index, 1);
    }

    return false;
  }

  get params(): IParams {
    return this.storageService.params;
  }

  products_part: IProduct[] = []

  toggleMenu(e: any) {
    if (this.products_part.length == 0) {
      this.products_part = this.storageService.getProductByType(this.type, this.params.products);
    }
    return false;
  }

  addProduct(dishe: IDishe, product: IProduct) {

    dishe.portionPart.portionList.push({ product: product });

    dishe.portionPart.portionGroup = this.storageService.getGroupPortion(dishe.portionPart.portionList);

    return false;
  }
  deleteDishe(dishe: IDishe) {

    let index = this.getIndexDisheById(dishe.id, this.dishesPortion);

    if (index > -1) {
      this.dishesPortion.splice(index, 1);
    }

    return false;
  }
  getIndexDisheById(id: number, dishesPortion1: IDishe[]) {

    for (let index = 0; index < dishesPortion1.length; index++) {
      const dishesPortion = dishesPortion1[index];
      if (dishesPortion.id == id) {
        return index;
      }


    }

    return -1;
  }
  addDishe() {

    let dishe = <IDishe>{};

    let id = -1;

    while (this.getIndexDisheById(id, this.dishesPortion) != -1) {
      id -= 1;
    }

    dishe.id = id;

    dishe.portionPart = { portionList: [] }

    this.dishesPortion.push(dishe);

    return false;
  }

}
