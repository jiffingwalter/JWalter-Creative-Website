import { GalleryItemContent } from "./gallery-item-content.class";

/** Gallery item class */
export class GalleryItem {
    /** Unique ID for the gallery item */
    id:string;
    /** Title of the gallery item */
    title:string;
    /** Description of the gallery item */
    description:string;
    /** Array of content attributed to the gallery item */
    content:Array<GalleryItemContent>;
    /** Array of tags attributed to the gallery item */
    tags:Array<string>;
    /** Date the gallery item was created and posted */
    dateCreated:Date;
    /** Date the gallery item was loaded into the database */
    loadDate:Date;

    constructor(idIn:string, titleIn:string, descriptionIn:string, content:Array<GalleryItemContent>, tags:Array<string>, dateCreatedIn:Date, loadDate:Date){
        this.id = idIn;
        this.title = titleIn;
        this.description = descriptionIn;
        this.content = content;
        this.tags = tags;
        this.dateCreated = dateCreatedIn;
        this.loadDate = loadDate;
    }
}
