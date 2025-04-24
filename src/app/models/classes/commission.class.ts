/**
 * Commission class to store commission information
 */
export class Commission{
    name:string;
    description:string;
    dateCreated:Date;
    status:string;

    constructor(name:string,description:string,dateCreated:Date,status:string){
        this.name = name;
        this.description = description;
        this.dateCreated = dateCreated;
        this.status = status;
    }

    toString(){
        return JSON.stringify(this);
    }
}