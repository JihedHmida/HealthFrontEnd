import { User } from './user';

export class Doctor {
    public id: number;
    public firstName: string;
    public lastName: string;
    public publicCode: string;
    public birthDate: Date;
    public email: string;
    public phone: string;
    public user: User;
    constructor() {}
}
