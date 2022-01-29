import { Category } from "src/app/categories/shared/interface/category";
import { Picture } from "src/app/core/models/Picture";

export class Product {
    "idProduct": number;
    "nameProduct": string;
    "description": string;
    "price": number;
    "stock": number;
    "category" : Category;
    "pictures": Picture[]; 
}