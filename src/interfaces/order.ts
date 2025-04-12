import { IUser } from "./user";
import { IOrderItem } from "./order-item";

export interface IOrder {
    id: string
    user: IUser
    items: IOrderItem
}
