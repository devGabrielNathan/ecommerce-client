import { ISubCategory } from "./subcategory";
import { Status } from "../enums/status";

export interface IProduct {
    id: string
    brand: string
    name: string
    description: string
    price: number
    quantity: number
    status: Status
    subcategory: ISubCategory
}
