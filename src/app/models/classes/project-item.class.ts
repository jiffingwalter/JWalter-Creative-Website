import { GalleryItemContent } from "./gallery-item-content.class";

/** Project item class for games and code projects */
export class ProjectItem {
    /** Unique ID for the project */
    id:string;
    /** Title of the project */
    title:string;
    /** Description of the project */
    description:string;
    /** The type of project this is (game or code)  */
    type:string;
    /** Array of media attributed to the project */
    content:Array<GalleryItemContent>;
    /** Date the project was posted */
    dateCreated:Date;

    constructor(idIn:string, titleIn:string, descriptionIn:string, typeIn:string, content:Array<GalleryItemContent>, dateCreatedIn:Date){
        this.id = idIn;
        this.title = titleIn;
        this.description = descriptionIn;
        this.type = typeIn;
        this.content = content;
        this.dateCreated = dateCreatedIn;
    }
}