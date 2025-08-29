export interface ILogin {
  email: string;
  password: string;
}

export interface ILoginResponse {
    id: string;
    access: string;
    refresh: string;
}

export interface IRegister {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}