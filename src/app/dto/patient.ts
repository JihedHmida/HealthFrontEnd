import { User } from './user';

export class Patient {
    public id: number;
    public firstName: string;
    public lastName: string;
    public cnam: string;
    public birthDate: Date;
    public email: string;
    public phone: string;
    public user: User;
    constructor() {}
    getName() {
        return this.firstName + this.lastName;
    }
}
