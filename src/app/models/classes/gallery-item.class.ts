import { Media } from "./media.class";

/** Gallery item class */
export class GalleryItem {
    /** Unique ID for the gallery item */
    id:string;
    /** Title of the gallery item */
    title:string;
    /** Description of the gallery item */
    description:string;
    /** Array of content attributed to the gallery item */
    content:Array<Media>;
    /** Array of tags attributed to the gallery item */
    tags:Array<string>;
    /** Date the gallery item was created and posted */
    postDate:Date;
    /** Date the gallery item was loaded into the database */
    loadDate:Date;

    constructor(idIn:string, titleIn:string, descriptionIn:string, content:Array<Media>, tags:Array<string>, postDateIn:Date, loadDate:Date){
        this.id = idIn;
        this.title = titleIn;
        this.description = descriptionIn;
        this.content = content;
        this.tags = tags;
        this.postDate = postDateIn;
        this.loadDate = loadDate;
    }
}
