import { API_URL } from "./axios";
import { ISubCategory } from "../interfaces/subcategory";

export async function getAllSubCategories(): Promise<ISubCategory[]> {
    const response = await API_URL.get<ISubCategory[]>('subcategories/');

    return response.data;
}

// export async function getSubCategoryById(id: string): Promise<ISubCategory> {
//     const response = await API_URL.get<ISubCategory>(`subcategories/${id}/`);
//     return response.data;
// }
