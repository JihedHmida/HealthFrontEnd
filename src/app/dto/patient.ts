import { User } from './user';

export class Patient {
    public firstName: string;
    public lastName: string;
    public cnam: string;
    public birthDate: string;
    public email: string;
    public phone: string;
    public user: User;
    constructor() {}
}
