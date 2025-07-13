import { GalleryItemContent } from "./gallery-item-content.class";

/** Project item class for games and code projects */
export class ProjectItem {
    /** Unique ID for the project */
    id:string;
    /** Title of the project */
    title:string;
    /** Description of the project */
    description:string;
    /** HTML text body for display on the project detail page */
    pageBody:string;
    /** The type of project this is (game or code)  */
    type:string;
    /** Extra information specific to the project type (genre for games, tech stack for webdev, etc) */
    meta:string;
    /** Array of media attributed to the project */
    mediaContent:Array<GalleryItemContent>;
    /** Date the project was posted */
    dateCreated:Date;

    constructor(idIn:string, titleIn:string, descriptionIn:string, pageBodyIn:string, typeIn:string, metaIn:string, mediaContentIn:Array<GalleryItemContent>, dateCreatedIn:Date){
        this.id = idIn;
        this.title = titleIn;
        this.description = descriptionIn;
        this.pageBody = pageBodyIn;
        this.type = typeIn;
        this.meta = metaIn;
        this.mediaContent = mediaContentIn;
        this.dateCreated = dateCreatedIn;
    }
}