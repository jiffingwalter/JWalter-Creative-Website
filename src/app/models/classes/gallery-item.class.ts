/** Gallery item class */
export class GalleryItem {
    id:string;
    title:string;
    description:string;
    dateCreated:Date;
    dateUploaded:Date;

    constructor(idIn:string, titleIn:string, descriptionIn:string, dateCreatedIn:Date, dateUploadedIn:Date){
        this.id = idIn;
        this.title = titleIn;
        this.description = descriptionIn;
        this.dateCreated = dateCreatedIn;
        this.dateUploaded = dateUploadedIn;
    }
}
