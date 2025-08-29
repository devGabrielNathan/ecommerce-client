import { API_URL } from "./axios";
import  { ILogin, ILoginResponse, IRegister } from "../interfaces/auth.ts"

export async function Login(email:string, password:string): Promise<ILoginResponse> {
    const response = await API_URL.post<ILogin>('auth/login/', {
        email,
        password
    });

    return response.data as unknown as ILoginResponse;
}

export async function Register(username: string, email:string, password:string, password_confirmation: string): Promise<IRegister[]> {
    // shorthand property -> quando o nome da propriedade é igual ao nome da variável
    // O payload deve ser um objeto com as propriedades esperadas pela API.
    // Detalhe: o nome das propriedades no payload deve corresponder exatamente ao que a API espera.
    // Exemplo: se a API espera "password_confirmation", o payload deve ter essa propriedade com esse nome exato.
    // Não poderiamos ter algo como "confirmPassword" no payload se a API espera "password_confirmation".
    const payload = {
        username,
        email,
        password,
        password_confirmation
    }
    // const payload = {
    //     username: username,
    //     email: email,
    //     password: password,
    //     password_confirmation: password_confirmation
    // }
    const response = await API_URL.post<IRegister[]>('register/', payload);

    return response.data;
}