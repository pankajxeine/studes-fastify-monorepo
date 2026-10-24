export type ListItem<T> = T extends (infer Item)[] ? Item : T

export interface PaginatedResponse<T> {
    data: T[]
    pagination: {
        page: number
        limit: number
        total: number
        totalPages: number
    }
}