export class GalleryItemContent{
    /** Unique ID for the content that is used to reference the image for display */
    id:string; 
    /** Type of media of the content (image | video | audio) */
    type:string;
    //galleryItemId:string;
    /** Title of the content, used for alt text */
    title:string;
    /** Date the content was loaded into the database */
    //loadDate:Date;

    constructor(id:string,type:string,galleryItemId:string,title:string,loadDate:Date){
        this.id = id;
        this.type = type;
        //this.galleryItemId = galleryItemId;
        this.title = title;
        //this.loadDate = loadDate;
    }
}