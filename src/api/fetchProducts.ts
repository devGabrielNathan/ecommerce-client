import { API_URL } from "./axios";
import { IProduct, ProductsPaginatedResponse } from "../interfaces/product";

export async function getAllProducts(page: number = 1): Promise<ProductsPaginatedResponse<IProduct>> {
    try {
        const response = await API_URL.get<ProductsPaginatedResponse<IProduct>>(`products/?page=${page}`);

        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        return {
            count: 0,
            next: null,
            previous: null,
            results: [],
        };
    }
}

export async function getProductById(id: string): Promise<IProduct> {

    const response = await API_URL.get<IProduct>(`products/${id}/`);
    return response.data;
}
