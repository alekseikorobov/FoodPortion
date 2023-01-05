import { IPortionPart } from './IPortionPart';

export interface IPortionDay {

  day: string;
  portion1: IPortionPart;
  portion2?: IPortionPart;
  portion3?: IPortionPart;
  portion4?: IPortionPart;
}
