export interface ICategory {
    name: string,
    id: number,
    parent_category_id: number | null,
    children_category: undefined | []
}