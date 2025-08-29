import { IUser } from "./user";
import { IProduct } from "./product";
// import { IOrderItem } from "./order-item";

export interface IOrder {
    id: string
    user: IUser
    items: IOrderItem
}


export interface IOrderItem {
    id: string
    product: IProduct
    quantity: number
    subtotal: number
}