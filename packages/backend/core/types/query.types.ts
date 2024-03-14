export type Query = {
  id?: number | string
  mediaId?: number
  page?: number
  perPage?: number
  search?: string
  type?: string
  sort?: string
  onList?: boolean
  size?: number
}