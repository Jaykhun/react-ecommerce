export interface ProductImage {
    product_id: number,
    product_variants_id: null | number,
    image_path: string,
    id: number
}

interface Category{
    name: string,
    id: number
}

interface ProductCategory{
    name: string,
    id: number
    children_category: Category[]
}

export interface IProduct {
    name: string;
    price: number;
    description: string;
    quantity: number;
    discount: number;
    id: number;
    images: ProductImage[];
    category: ProductCategory;
}
