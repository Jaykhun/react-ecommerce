export interface ICategory {
    name: string,
    id: number,
}

export interface FetchCategory extends ICategory {
    children_category: ICategory[],
    parent_category: null
}