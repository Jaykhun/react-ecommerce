export interface ChildrenCategory {
    name: string,
    id: number
}

export interface ICategory {
    name: string,
    id: number,
    children_category: ChildrenCategory[],
    parent_category: null | string
}