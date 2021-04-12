import { Category } from "./category";
import { xiaomi } from "./xiaomi";
import { apple } from "./apple";
import { oneplus } from "./oneplus";
import { pixel } from "./pixel";

export const categories: Category[] = [
    {
        id: 1, 
        name: 'Apple',
        products: apple
    },
    {
        id: 2, 
        name: 'Xiaomi',
        products: xiaomi
    },
    {
        id: 3, 
        name: 'One Plus',
        products: oneplus
    },
    {
        id: 4, 
        name: 'Pixel',
        products: pixel
    }
]