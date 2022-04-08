export interface TodoAction {
    title: string,
    action: ((item?: any) => void)
}