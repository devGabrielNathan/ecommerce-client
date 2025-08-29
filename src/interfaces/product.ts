import { ISubCategory } from "./subcategory";
import { Status } from "../enums/status";

export interface IProduct {
    id: string
    brand: string
    name: string
    description: string
    price: number
    image: string | null
    quantity: number
    status: Status
    subcategory: ISubCategory
}

export interface ProductsPaginatedResponse<T> {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
}