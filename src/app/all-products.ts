import { Product } from "./product";
import { xiaomi } from "./xiaomi";
import { apple } from "./apple";
import { oneplus } from "./oneplus";
import { pixel } from "./pixel";

export const products: Product[] = [
]
xiaomi.forEach(addProduct);
apple.forEach(addProduct);
oneplus.forEach(addProduct);
pixel.forEach(addProduct);

function addProduct(product:Product):void {
    products.push(product);
}