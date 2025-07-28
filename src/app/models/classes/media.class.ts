export class Media{
    /** Unique ID for the content that is used to reference the media from backend */
    id:string; 
    /** Type of media of the content (image | video | audio) */
    type:string;
    /** The ID of the item this content is associated with */
    parentId:string;
    /** Title of the content, used for alt text */
    title:string;
    /** File extention associated to the media */
    extention:string;
    /** Date the content was loaded into the database */
    loadDate:Date;

    constructor(idIn:string,typeIn:string,parentId:string,titleIn:string,extentionIn:string,loadDateIn:Date){
        this.id = idIn;
        this.type = typeIn;
        this.parentId = parentId;
        this.extention = extentionIn;
        this.title = titleIn;
        this.loadDate = loadDateIn;
    }
}