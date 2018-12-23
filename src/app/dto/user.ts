export class User {
    public userId: number;
    public userName: string;
    public userPwd: string;
    public isAdmin: boolean;

    public constructor(name?: string, pwd?: string) {
        this.userName = name;
        this.userPwd = pwd;
    }
}
