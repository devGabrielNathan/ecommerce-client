import { Status } from '../enums/status';

export interface ISubCategory {
    id: string;
    name: string;
    status: Status;
    category: string;
}
