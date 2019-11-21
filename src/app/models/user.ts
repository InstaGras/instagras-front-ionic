export class User {
    username: string;
    lastname: string;
    firstname: string;
    nbFollowers: string;
    nbFollowed: string;

    constructor(username: string, firstname: string, lastname: string){
        this.username=username;
        this.firstname=firstname;
        this.lastname=lastname;
    }
}
