import { API_URL } from "./axios";
import { IProduct } from "../interfaces/product";

export async function getAllProducts(): Promise<IProduct[]> {
    const response = await API_URL.get<IProduct[]>('products/');
    return response.data;
};

export async function getProductById(id: string): Promise<IProduct> {
    const response = await API_URL.get<IProduct>(`products/${id}/`);
    return response.data;
};