import { IDisheAll, IParams } from "./models";

export const inner_param: IParams = {
    "call": 2600,
    "portion1": 25,
    "portion2": 30,
    "portion3": 25,
    "portion4": 20,
    "portion_bzu": "1:1:4",
    "products": [
        {
            "calories100g": 230,
            "carbohydrates": 0,
            "fats": 18,
            "id": 1,
            "isMain": true,
            "name": "Тушенка говяж.",
            "onePortionG": 70,
            "proteins": 17,
            "types": "о,у"
        },
        {
            "calories100g": 380,
            "carbohydrates": 0,
            "fats": 35,
            "id": 2,
            "isMain": true,
            "name": "Тушенка свин.",
            "onePortionG": 70,
            "proteins": 15,
            "types": "о,у"
        },
        {
            "calories100g": 600,
            "carbohydrates": 0,
            "fats": 40,
            "id": 3,
            "isMain": true,
            "name": "Мясо сублим.",
            "onePortionG": 30,
            "proteins": 60,
            "types": "о,у"
        },
        {
            "calories100g": 430,
            "carbohydrates": 0,
            "fats": 40,
            "id": 4,
            "isMain": true,
            "name": "Колбаса с/к",
            "onePortionG": 55,
            "proteins": 20,
            "types": "з,п"
        },
        {
            "calories100g": 460,
            "carbohydrates": 0,
            "fats": 47,
            "id": 5,
            "isMain": true,
            "name": "Корейка копч.",
            "onePortionG": 55,
            "proteins": 11,
            "types": "з,п"
        },
        {
            "calories100g": 335,
            "carbohydrates": 40,
            "fats": 15,
            "id": 6,
            "isMain": true,
            "name": "Суп конц. с мяс",
            "onePortionG": 40,
            "proteins": 8,
            "types": "о,у"
        },
        {
            "calories100g": 607,
            "carbohydrates": 30,
            "fats": 45,
            "id": 7,
            "isMain": false,
            "name": "Сливки сухие",
            "onePortionG": 40,
            "proteins": 17,
            "types": "з,п"
        },
        {
            "calories100g": 350,
            "carbohydrates": 50,
            "fats": 1,
            "id": 8,
            "isMain": true,
            "name": "Молоко сухое",
            "onePortionG": 40,
            "proteins": 38,
            "types": "з,п"
        },
        {
            "calories100g": 340,
            "carbohydrates": 55,
            "fats": 9,
            "id": 9,
            "isMain": true,
            "name": "Мол. сгущ. с сах.",
            "onePortionG": 40,
            "proteins": 7,
            "types": "з,п"
        },
        {
            "calories100g": 370,
            "carbohydrates": 0,
            "fats": 30,
            "id": 10,
            "isMain": true,
            "name": "Сыр жирн. (50%)",
            "onePortionG": 40,
            "proteins": 25,
            "types": "з,п"
        },
        {
            "calories100g": 530,
            "carbohydrates": 0,
            "fats": 25,
            "id": 11,
            "isMain": true,
            "name": "Яичный порошок",
            "onePortionG": 40,
            "proteins": 75,
            "types": "з,п"
        },
        {
            "calories100g": 880,
            "carbohydrates": 0,
            "fats": 98,
            "id": 12,
            "isMain": true,
            "name": "Масло сл. топленое",
            "onePortionG": 25,
            "proteins": 0.4,
            "types": "з,п"
        },
        {
            "calories100g": 750,
            "carbohydrates": 0.9,
            "fats": 82,
            "id": 13,
            "isMain": true,
            "name": "Масло сливочное",
            "onePortionG": 25,
            "proteins": 0.6,
            "types": "з,п"
        },
        {
            "calories100g": 900,
            "carbohydrates": 0,
            "fats": 99.9,
            "id": 14,
            "isMain": true,
            "name": "Масло подсолн.",
            "onePortionG": 22,
            "proteins": 0,
            "types": "з,о,у,п"
        },
        {
            "calories100g": 770,
            "carbohydrates": 0,
            "fats": 80,
            "id": 15,
            "isMain": true,
            "name": "Сало свинное",
            "onePortionG": 60,
            "proteins": 1.8,
            "types": "з,о,у,п"
        },
        {
            "calories100g": 326,
            "carbohydrates": 69,
            "fats": 1.7,
            "id": 16,
            "isMain": true,
            "name": "Сухари черн.",
            "onePortionG": 35,
            "proteins": 11.2,
            "types": "з,п"
        },
        {
            "calories100g": 340,
            "carbohydrates": 69,
            "fats": 1,
            "id": 17,
            "isMain": true,
            "name": "Сухари бел.",
            "onePortionG": 0,
            "proteins": 10,
            "types": "з,п"
        },
        {
            "calories100g": 420,
            "carbohydrates": 70,
            "fats": 10,
            "id": 18,
            "isMain": true,
            "name": "Печенье",
            "onePortionG": 25,
            "proteins": 10,
            "types": "з,п"
        },
        {
            "calories100g": 360,
            "carbohydrates": 75,
            "fats": 1,
            "id": 19,
            "isMain": true,
            "name": "Макароны",
            "onePortionG": 90,
            "proteins": 10,
            "types": "о,у"
        },
        {
            "calories100g": 350,
            "carbohydrates": 78,
            "fats": 0,
            "id": 20,
            "isMain": true,
            "name": "Рис",
            "onePortionG": 70,
            "proteins": 8,
            "types": "о,у"
        },
        {
            "calories100g": 330,
            "carbohydrates": 68,
            "fats": 2,
            "id": 21,
            "isMain": true,
            "name": "Гречка",
            "onePortionG": 75,
            "proteins": 13,
            "types": "о,у"
        },
        {
            "calories100g": 320,
            "carbohydrates": 73,
            "fats": 0,
            "id": 22,
            "isMain": true,
            "name": "Манка",
            "onePortionG": 45,
            "proteins": 11,
            "types": "з"
        },
        {
            "calories100g": 340,
            "carbohydrates": 65,
            "fats": 6,
            "id": 23,
            "isMain": true,
            "name": "Овсянка",
            "onePortionG": 55,
            "proteins": 12,
            "types": "з"
        },
        {
            "calories100g": 320,
            "carbohydrates": 62,
            "fats": 2,
            "id": 24,
            "isMain": true,
            "name": "Пшено",
            "onePortionG": 70,
            "proteins": 8,
            "types": "з"
        },
        {
            "calories100g": 315,
            "carbohydrates": 72.3,
            "fats": 0,
            "id": 25,
            "isMain": true,
            "name": "Картоф. пюре",
            "onePortionG": 60,
            "proteins": 6.1,
            "types": "о,у"
        },
        {
            "calories100g": 20,
            "carbohydrates": 1.3,
            "fats": 0.7,
            "id": 26,
            "isMain": true,
            "name": "Грибы свежие",
            "onePortionG": 0,
            "proteins": 2.7,
            "types": "о,у"
        },
        {
            "calories100g": 0,
            "carbohydrates": 0,
            "fats": 0,
            "id": 27,
            "isMain": true,
            "name": "Соль поваренная",
            "onePortionG": 0,
            "proteins": 0,
            "types": "з,о,у,п"
        },
        {
            "calories100g": 45,
            "carbohydrates": 9,
            "fats": 0,
            "id": 28,
            "isMain": true,
            "name": "Лук репчатый",
            "onePortionG": 15,
            "proteins": 2,
            "types": "о,у,п"
        },
        {
            "calories100g": 0,
            "carbohydrates": 0,
            "fats": 0,
            "id": 29,
            "isMain": true,
            "name": "Чеснок",
            "onePortionG": 15,
            "proteins": 0,
            "types": "о,у,п"
        },
        {
            "calories100g": 505,
            "carbohydrates": 99,
            "fats": 0,
            "id": 30,
            "isMain": true,
            "name": "Сахар",
            "onePortionG": 20,
            "proteins": 0,
            "types": "п"
        },
        {
            "calories100g": 500,
            "carbohydrates": 45,
            "fats": 30,
            "id": 31,
            "isMain": true,
            "name": "Халва",
            "onePortionG": 40,
            "proteins": 12,
            "types": "п"
        },
        {
            "calories100g": 510,
            "carbohydrates": 50,
            "fats": 29,
            "id": 32,
            "isMain": true,
            "name": "Шоколад черный",
            "onePortionG": 50,
            "proteins": 4,
            "types": "з,п"
        },
        {
            "calories100g": 568,
            "carbohydrates": 47,
            "fats": 37,
            "id": 33,
            "isMain": true,
            "name": "Шоколад молочн.",
            "onePortionG": 50,
            "proteins": 5.8,
            "types": "з,п"
        },
        {
            "calories100g": 373,
            "carbohydrates": 28,
            "fats": 20,
            "id": 34,
            "isMain": true,
            "name": "Какао порошок",
            "onePortionG": 20,
            "proteins": 24,
            "types": "з,п"
        },
        {
            "calories100g": 230,
            "carbohydrates": 65,
            "fats": 1,
            "id": 35,
            "isMain": true,
            "name": "Сухофрукты",
            "onePortionG": 15,
            "proteins": 2,
            "types": "з,п"
        },
        {
            "calories100g": 620,
            "carbohydrates": 11,
            "fats": 56,
            "id": 36,
            "isMain": true,
            "name": "Орехи грецкие",
            "onePortionG": 25,
            "proteins": 14,
            "types": "з,п"
        },
        {
            "calories100g": 620,
            "carbohydrates": 11,
            "fats": 56,
            "id": 37,
            "isMain": true,
            "name": "Хлеб",
            "onePortionG": 25,
            "proteins": 14,
            "types": "з,о,у,п"
        }
    ]
};

export const inner_disheAll: IDisheAll = {
    "dishesPortion1": [
        {
            "id": 1,
            "name": "Гречка с молоком",
            "portionPart": {
                "portionGroup": {
                    "calories": 387.5,
                    "caloriesPorcent": 14.9,
                    "portionGramm": 115
                },
                "portionList": [
                    {
                        "product": {
                            "calories100g": 350,
                            "carbohydrates": 50,
                            "fats": 1,
                            "id": 8,
                            "isMain": true,
                            "name": "Молоко сухое",
                            "onePortionG": 40,
                            "proteins": 38,
                            "types": "з,п"
                        },
                        "productId": 8
                    },
                    {
                        "product": {
                            "calories100g": 330,
                            "carbohydrates": 68,
                            "fats": 2,
                            "id": 21,
                            "isMain": true,
                            "name": "Гречка",
                            "onePortionG": 75,
                            "proteins": 13,
                            "types": "о,у"
                        },
                        "productId": 21
                    }
                ]
            }
        },
        {
            "id": 2,
            "name": "Бутерброд с хлебом",
            "portionPart": {
                "portionGroup": {
                    "calories": 391.5,
                    "caloriesPorcent": 15.06,
                    "portionGramm": 80
                },
                "portionList": [
                    {
                        "product": {
                            "calories100g": 430,
                            "carbohydrates": 0,
                            "fats": 40,
                            "id": 4,
                            "isMain": true,
                            "name": "Колбаса с/к",
                            "onePortionG": 55,
                            "proteins": 20,
                            "types": "з,п"
                        },
                        "productId": 4
                    },
                    {
                        "product": {
                            "calories100g": 620,
                            "carbohydrates": 11,
                            "fats": 56,
                            "id": 37,
                            "isMain": true,
                            "name": "Хлеб",
                            "onePortionG": 25,
                            "proteins": 14,
                            "types": "з,о,у,п"
                        },
                        "productId": 37
                    }
                ]
            }
        }
    ],
    "dishesPortion2": [
        {
            "id": 1,
            "name": "Гречка с мясом",
            "portionPart": {
                "portionGroup": {
                    "calories": 427.5,
                    "caloriesPorcent": 16.44,
                    "portionGramm": 105
                },
                "portionList": [
                    {
                        "product": {
                            "calories100g": 600,
                            "carbohydrates": 0,
                            "fats": 40,
                            "id": 3,
                            "isMain": true,
                            "name": "Мясо сублим.",
                            "onePortionG": 30,
                            "proteins": 60,
                            "types": "о,у"
                        },
                        "productId": 3
                    },
                    {
                        "product": {
                            "calories100g": 330,
                            "carbohydrates": 68,
                            "fats": 2,
                            "id": 21,
                            "isMain": true,
                            "name": "Гречка",
                            "onePortionG": 75,
                            "proteins": 13,
                            "types": "о,у"
                        },
                        "productId": 21
                    }
                ]
            }
        },
        {
            "id": 2,
            "name": "Бутерброд с хлебом",
            "portionPart": {
                "portionGroup": {
                    "calories": 391.5,
                    "caloriesPorcent": 15.06,
                    "portionGramm": 80
                },
                "portionList": [
                    {
                        "product": {
                            "calories100g": 430,
                            "carbohydrates": 0,
                            "fats": 40,
                            "id": 4,
                            "isMain": true,
                            "name": "Колбаса с/к",
                            "onePortionG": 55,
                            "proteins": 20,
                            "types": "з,п"
                        },
                        "productId": 4
                    },
                    {
                        "product": {
                            "calories100g": 620,
                            "carbohydrates": 11,
                            "fats": 56,
                            "id": 37,
                            "isMain": true,
                            "name": "Хлеб",
                            "onePortionG": 25,
                            "proteins": 14,
                            "types": "з,о,у,п"
                        },
                        "productId": 37
                    }
                ]
            }
        }
    ],
    "dishesPortion3": [
        {
            "id": 1,
            "name": "Шоколадка",
            "portionPart": {
                "portionGroup": {
                    "calories": 284,
                    "caloriesPorcent": 10.92,
                    "portionGramm": 50
                },
                "portionList": [
                    {
                        "product": {
                            "calories100g": 568,
                            "carbohydrates": 47,
                            "fats": 37,
                            "id": 33,
                            "isMain": true,
                            "name": "Шоколад молочн.",
                            "onePortionG": 50,
                            "proteins": 5.8,
                            "types": "з,п"
                        },
                        "productId": 33
                    }
                ]
            }
        }
    ]
}