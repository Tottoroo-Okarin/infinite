export interface Todo {
    title: string,
    description: string,
    id: string,
    completed: boolean,
    estimate: number,
    assigneeId: string,
    assignedById: string,
    assignedOn: string,
    lastUpdatedOn: string,
    comments: Array<Object>
}