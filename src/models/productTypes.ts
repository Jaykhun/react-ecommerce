import { FetchCategory } from './categoryTypes'

export interface ProductImage {
    product_id: number,
    product_variants_id: null | number,
    image_path: string,
    id: number,
}

export interface FetchProduct {
    name: string,
    price: number,
    description: string,
    quantity: number,
    discount: number,
    id: number,
    images: ProductImage[],
    category: FetchCategory
}

export interface AddProduct {
    product: {
        name: string,
        price: number,
        description: string,
        quantity: number,
        discount: number,
        id: number,
        category_id: number,
    },
    product_images: [{ image_path: string }]
}

export interface EditProduct {
    name: string,
    price: number,
    description: string,
    quantity: number,
    discount: number,
    category_id: number,
}