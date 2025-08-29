import { Status } from '../enums/status'; // ajuste o path conforme sua estrutura

export interface ICategory {
    id: string;
    name: string;
    status: Status;
}