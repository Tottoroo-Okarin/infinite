import { User } from "./user.model";

export interface TodoComment {
    id: string,
    authorId: string,
    createdOn: string,
    lastUpdatedOn: string,
    content: string;
    attachments: Array<string>
}