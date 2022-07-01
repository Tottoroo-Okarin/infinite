export interface TodoInputs {
    id?: string
    title: string,
    description: string,
    assigneeId: string,
    statusId: number,
    estimate: number | null
};