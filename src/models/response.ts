interface PaginatedResponse<T> {
  items: T[]
  totalPages: number
  totalCount: number
  hasNextPage: boolean
  hasPreviousPage: boolean
}
