import { IDisheAll, IParams } from "./models";

export const inner_param: IParams = {
    call: 2600,
    portion1: 25,
    portion2: 30,
    portion3: 25,
    portion4: 15,
    portion_bzu: "1:1:4",
    products: [
        { id: 1, name: 'Тушенка говяж.', proteins: 17, fats: 18, carbohydrates: 0, calories100g: 230, onePortionG: 70, isMain: true, types: 'о,у' },
        { id: 2, name: 'Тушенка свин.', proteins: 15, fats: 35, carbohydrates: 0, calories100g: 380, onePortionG: 70, isMain: true, types: 'о,у' },
        { id: 3, name: 'Мясо сублим.', proteins: 60, fats: 40, carbohydrates: 0, calories100g: 600, onePortionG: 30, isMain: true, types: 'о,у' },
        { id: 4, name: 'Колбаса с/к', proteins: 20, fats: 40, carbohydrates: 0, calories100g: 430, onePortionG: 55, isMain: true, types: 'з,п' },
        { id: 5, name: 'Корейка копч.', proteins: 11, fats: 47, carbohydrates: 0, calories100g: 460, onePortionG: 55, isMain: true, types: 'з,п' },
        { id: 6, name: 'Суп конц. с мяс', proteins: 8, fats: 15, carbohydrates: 40, calories100g: 335, onePortionG: 40, isMain: true, types: 'о,у' },
        { id: 7, name: 'Сливки сухие', proteins: 17, fats: 45, carbohydrates: 30, calories100g: 607, onePortionG: 40, isMain: false, types: 'з,п' },
        { id: 8, name: 'Молоко сухое', proteins: 38, fats: 1, carbohydrates: 50, calories100g: 350, onePortionG: 40, isMain: true, types: 'з,п' },
        { id: 9, name: 'Мол. сгущ. с сах.', proteins: 7, fats: 9, carbohydrates: 55, calories100g: 340, onePortionG: 40, isMain: true, types: 'з,п' },
        { id: 10, name: 'Сыр жирн. (50%)', proteins: 25, fats: 30, carbohydrates: 0, calories100g: 370, onePortionG: 40, isMain: true, types: 'з,п' },
        { id: 11, name: 'Яичный порошок', proteins: 75, fats: 25, carbohydrates: 0, calories100g: 530, onePortionG: 40, isMain: true, types: 'з,п' },
        { id: 12, name: 'Масло сл. топленое', proteins: 0.4, fats: 98, carbohydrates: 0, calories100g: 880, onePortionG: 25, isMain: true, types: 'з,п' },
        { id: 13, name: 'Масло сливочное', proteins: 0.6, fats: 82, carbohydrates: 0.9, calories100g: 750, onePortionG: 25, isMain: true, types: 'з,п' },
        { id: 14, name: 'Масло подсолн.', proteins: 0, fats: 99.9, carbohydrates: 0, calories100g: 900, onePortionG: 22, isMain: true, types: 'з,о,у,п' },
        { id: 15, name: 'Сало свинное', proteins: 1.8, fats: 80, carbohydrates: 0, calories100g: 770, onePortionG: 60, isMain: true, types: 'з,о,у,п' },
        { id: 16, name: 'Сухари черн.', proteins: 11.2, fats: 1.7, carbohydrates: 69, calories100g: 326, onePortionG: 35, isMain: true, types: 'з,п' },
        { id: 17, name: 'Сухари бел.', proteins: 10, fats: 1, carbohydrates: 69, calories100g: 340, onePortionG: 0, isMain: true, types: 'з,п' },
        { id: 18, name: 'Печенье', proteins: 10, fats: 10, carbohydrates: 70, calories100g: 420, onePortionG: 25, isMain: true, types: 'з,п' },
        { id: 19, name: 'Макароны', proteins: 10, fats: 1, carbohydrates: 75, calories100g: 360, onePortionG: 90, isMain: true, types: 'о,у' },
        { id: 20, name: 'Рис', proteins: 8, fats: 0, carbohydrates: 78, calories100g: 350, onePortionG: 70, isMain: true, types: 'о,у' },
        { id: 21, name: 'Гречка', proteins: 13, fats: 2, carbohydrates: 68, calories100g: 330, onePortionG: 75, isMain: true, types: 'о,у' },
        { id: 22, name: 'Манка', proteins: 11, fats: 0, carbohydrates: 73, calories100g: 320, onePortionG: 45, isMain: true, types: 'з' },
        { id: 23, name: 'Овсянка', proteins: 12, fats: 6, carbohydrates: 65, calories100g: 340, onePortionG: 55, isMain: true, types: 'з' },
        { id: 24, name: 'Пшено', proteins: 8, fats: 2, carbohydrates: 62, calories100g: 320, onePortionG: 70, isMain: true, types: 'з' },
        { id: 25, name: 'Картоф. пюре', proteins: 6.1, fats: 0, carbohydrates: 72.3, calories100g: 315, onePortionG: 60, isMain: true, types: 'о,у' },
        { id: 26, name: 'Грибы свежие', proteins: 2.7, fats: 0.7, carbohydrates: 1.3, calories100g: 20, onePortionG: 0, isMain: true, types: 'о,у' },
        { id: 27, name: 'Соль поваренная', proteins: 0, fats: 0, carbohydrates: 0, calories100g: 0, onePortionG: 0, isMain: true, types: 'з,о,у,п' },
        { id: 28, name: 'Лук репчатый', proteins: 2, fats: 0, carbohydrates: 9, calories100g: 45, onePortionG: 15, isMain: true, types: 'о,у,п' },
        { id: 29, name: 'Чеснок', proteins: 0, fats: 0, carbohydrates: 0, calories100g: 0, onePortionG: 15, isMain: true, types: 'о,у,п' },
        { id: 30, name: 'Сахар', proteins: 0, fats: 0, carbohydrates: 99, calories100g: 505, onePortionG: 20, isMain: true, types: 'п' },
        { id: 31, name: 'Халва', proteins: 12, fats: 30, carbohydrates: 45, calories100g: 500, onePortionG: 40, isMain: true, types: 'п' },
        { id: 32, name: 'Шоколад черный', proteins: 4, fats: 29, carbohydrates: 50, calories100g: 510, onePortionG: 50, isMain: true, types: 'з,п' },
        { id: 33, name: 'Шоколад молочн.', proteins: 5.8, fats: 37, carbohydrates: 47, calories100g: 568, onePortionG: 50, isMain: true, types: 'з,п' },
        { id: 34, name: 'Какао порошок', proteins: 24, fats: 20, carbohydrates: 28, calories100g: 373, onePortionG: 20, isMain: true, types: 'з,п' },
        { id: 35, name: 'Сухофрукты', proteins: 2, fats: 1, carbohydrates: 65, calories100g: 230, onePortionG: 15, isMain: true, types: 'з,п' },
        { id: 36, name: 'Орехи грецкие', proteins: 14, fats: 56, carbohydrates: 11, calories100g: 620, onePortionG: 25, isMain: true, types: 'з,п' },
        { id: 37, name: 'Хлеб', proteins: 14, fats: 56, carbohydrates: 11, calories100g: 620, onePortionG: 25, isMain: true, types: 'з,о,у,п' },
    ]
};

export const inner_disheAll: IDisheAll = {
    dishesPortion1: [{
        id: 1,
        name: 'Гречка с молоком',
        portionPart: {
            portionList: [
                { productId: 8 },{ productId: 21 }
            ]
        }
    },{
        id: 2,
        name: 'Бутерброд с хлебом',
        portionPart: {
            portionList: [
                { productId: 4 },{ productId: 37 }
            ]
        }
    }],
    dishesPortion2: [{
        id: 1,
        name: 'Гречка с мясом',
        portionPart: {
            portionList: [
                { productId: 3 },{ productId: 21 }
            ]
        }
    },{
        id: 2,
        name: 'Бутерброд с хлебом',
        portionPart: {
            portionList: [
                { productId: 4 },{ productId: 37 }
            ]
        }
    }],
    dishesPortion3: [{
        id: 1,
        name: 'Гречка с мясом',
        portionPart: {
            portionList: [
                { productId: 3 },{ productId: 21 }
            ]
        }
    },{
        id: 2,
        name: 'Бутерброд с хлебом',
        portionPart: {
            portionList: [
                { productId: 33 },{ productId: 37 }
            ]
        }
    }],
    dishesPortion4: [{
        id: 1,
        name: 'Шоколадка',
        portionPart: {
            portionList: [
                { productId: 33 }
            ]
        }
    }],
}