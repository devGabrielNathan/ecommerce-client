import {IUser} from './user';

export interface IPhone {
    id: string;
    ddd: string;
    number: string;
    user: IUser;
}