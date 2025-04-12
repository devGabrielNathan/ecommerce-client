import { API_URL } from "./axios";
import { IOrder } from "../interfaces/order"; 

export async function getAllOrders(): Promise<IOrder[]> {
    const response = await API_URL.get<IOrder[]>('orders/');
    return response.data;
};

export async function getOrderById(id: string): Promise<IOrder> {
    const response = await API_URL.get<IOrder>(`orders/${id}/`);
    return response.data;
};
