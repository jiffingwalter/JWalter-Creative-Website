export class GalleryItemContent{
    /** Unique ID for the content that is used to reference the image for display */
    id:string; 
    /** Type of media of the content (image | video | audio) */
    type:string;
    //galleryItemId:string;
    /** Title of the content, used for alt text */
    title:string;
    /** File extention associated to the media */
    extention:string;
    /** Date the content was loaded into the database */
    //loadDate:Date;

    constructor(idIn:string,typeIn:string,galleryItemIdIn:string,titleIn:string,extentionIn:string,loadDateIn:Date){
        this.id = idIn;
        this.type = typeIn;
        //this.galleryItemId = galleryItemIdIn;
        this.extention = extentionIn;
        this.title = titleIn;
        //this.loadDate = loadDateIn;
    }
}