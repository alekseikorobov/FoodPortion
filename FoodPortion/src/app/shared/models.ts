export interface IDishe extends IId {
    isShow?: boolean;
    name: string;
    portionPart: IPortionPart;
}

export interface IDisheAll {
    dishesPortion1: IDishe[] //завтрак
    dishesPortion2: IDishe[] //обед / ужин
    dishesPortion3: IDishe[] //перекус
}
export interface IId {
    id: number;
}
export interface IProduct extends IId {
    name: string;
    isMain: boolean; // TODO: переделать в итрибут для отключения продукта из питания
    types: string; //з,о,у,п
    proteins: number;
    fats: number;
    carbohydrates: number;
    calories100g: number;
    onePortionG: number;

    count_portion?: number;
}
export interface IPortionPart {
    portionList: IPortion[];
    portionGroup?: IPortionGroup;
}
export interface IPortionGroup {
    portionGramm: number;
    calories: number;
    caloriesPorcent: number;

    proteins?: number;
    fats?: number;
    carbohydrates?: number;

    proteins_p?: number;
    fats_p?: number;
    carbohydrates_p?: number;
}
export interface IPortionDay {
    day: string;
    portion1: IPortionPart; //завтрак
    portion2: IPortionPart; //обед
    portion3: IPortionPart; //ужин
    portion4: IPortionPart; //перекус
}

export interface IPortion {
    product?: IProduct;
    productId?: number;
}
export interface IParams {
    call: number;
    portion1: number; //завтрак (%)
    portion2: number; //обед (%)
    portion3: number; //ужин (%)
    portion4: number; //перекус (%)
    portion_bzu: string;
    use_portion_bzu: boolean;
    count_day:number;
    count_people:number;
}
