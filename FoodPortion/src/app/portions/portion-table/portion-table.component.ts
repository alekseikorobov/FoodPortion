import { Component, Input } from '@angular/core';
import { IPortionPart } from 'src/app/shared/IPortionPart';

@Component({
  selector: 'app-portion-table',
  templateUrl: './portion-table.component.html'
})
export class PortionTableComponent {

  @Input('portion') portion?: IPortionPart;

}
