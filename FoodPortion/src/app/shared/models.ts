export interface IDishe extends IId {
    name: string;
    portionPart: IPortionPart;
}

export interface IDisheAll {
    dishesPortion1: IDishe[]
    dishesPortion2: IDishe[]
    dishesPortion3: IDishe[]
    dishesPortion4: IDishe[]
}
export interface IId {
    id: number;
}
export interface IProduct extends IId {
    name: string;
    isMain: boolean;
    types: string;
    proteins: number;
    fats: number;
    carbohydrates: number;
    calories100g: number;
    onePortionG: number;
}
export interface IPortionPart {
    portionList: IPortion[];
    portionGroup?: IPortionGroup;
}
export interface IPortionGroup {
    portionGramm: number;
    calories: number;
    caloriesPorcent: number;
}
export interface IPortionDay {
    day: string;
    portion1: IPortionPart;
    portion2?: IPortionPart;
    portion3?: IPortionPart;
    portion4?: IPortionPart;
}

export interface IPortion {
    product?: IProduct;
    productId?: number;
}
export interface IParams {
    products: IProduct[];
    call: number;
    portion1: number;
    portion2: number;
    portion3: number;
    portion4: number;
    portion_bzu: string;
}
