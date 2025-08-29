import { API_URL } from "./axios";
import { IAddress } from "../interfaces/address";

export async function getAllAddresses(): Promise<IAddress[]> {
    const response = await API_URL.get<IAddress[]>('addresses/');
    return response.data;
}

// export async function getAddressById(id: string): Promise<IAddress> {
//     const response = await API_URL.get<IAddress>(`addresses/${id}/`);
//     return response.data;
// }
