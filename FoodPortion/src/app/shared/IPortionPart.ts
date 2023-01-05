import { IPortion } from './IPortion';
import { IPortionGroup } from './IPortionGroup';

export interface IPortionPart {
  portionList: IPortion[];
  portionGroup?: IPortionGroup;
}
