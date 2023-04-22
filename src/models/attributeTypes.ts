export interface IAttribute {
    attribute_name: string,
    category_id: number
}

export interface IVariants {
    value: string,
}

export interface FetchVariants extends IVariants {
    id: number
}

export interface FetchAttribute extends IAttribute {
    id: number,
    variants: FetchVariants[]
}

export interface AddAttribute {
    attribute: IAttribute,
    variants: IVariants[]
}

export interface EditAttribute extends IAttribute {

}