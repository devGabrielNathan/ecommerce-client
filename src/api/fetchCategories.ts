import { API_URL } from "./axios";
import { ICategory } from "../interfaces/category";

export async function getAllCategories(): Promise<ICategory[]> {
    const response = await API_URL.get<ICategory[]>('categories/');
    return response.data;
};

export async function getCategoryById(id: string): Promise<ICategory> {
    const response = await API_URL.get<ICategory>(`categories/${id}/`);
    return response.data;
};
