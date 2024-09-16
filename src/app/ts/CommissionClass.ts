/**
 * Commission class to store commission information
 */
export class Commission{
    name:string;
    description:string;
    date_created:Date;
    status:string;

    constructor(name:string,description:string,date_created:Date,status:string){
        this.name = name;
        this.description = description;
        this.date_created = date_created;
        this.status = status;
    }

    toString(){
        return JSON.stringify(this);
    }
}