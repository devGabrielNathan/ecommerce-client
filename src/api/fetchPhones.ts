import { API_URL } from "./axios";
import { IPhone } from "../interfaces/phone";

export async function getAllPhones(): Promise<IPhone[]> {
    const response = await API_URL.get<IPhone[]>('phones/');
    return response.data;
};

export async function getPhoneById(id: string): Promise<IPhone> {
    const response = await API_URL.get<IPhone>(`phones/${id}/`);
    return response.data;
};
