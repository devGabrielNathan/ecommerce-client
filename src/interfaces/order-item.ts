import { IProduct } from "./product";

export interface IOrderItem {
    id: string
    product: IProduct
    quantity: number
    subtotal: number
}
