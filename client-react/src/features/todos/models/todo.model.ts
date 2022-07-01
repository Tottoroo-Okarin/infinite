export interface Todo {
    title: string,
    description: string,
    id: string,
    completed: boolean,
    statusId: number,
    estimate: number,
    assigneeId: string,
    assignedById: string,
    assignedOn: string,
    lastUpdatedOn: string,
    comments: Array<Object>
}