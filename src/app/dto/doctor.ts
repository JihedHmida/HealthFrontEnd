import { User } from './user';

export class Doctor {
    public firstName: string;
    public lastName: string;
    public publicCode: string;
    public birthDate: string;
    public email: string;
    public phone: string;
    public user: User;
    constructor() {}
}
