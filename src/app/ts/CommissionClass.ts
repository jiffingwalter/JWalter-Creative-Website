/**
 * Commission class to store commission information
 */
export class Commission{
    name:string;
    description:string;
    date_created:Date;

    constructor(name:string,description:string,date_created:Date){
        this.name = name;
        this.description = description;
        this.date_created = date_created;
    }

    toString(){
        return JSON.stringify(this);
    }
}