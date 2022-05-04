
export interface TodoAction {
    title: string,
    action: ((item: any, name?: any, description?: any) => void),
    id: string
}