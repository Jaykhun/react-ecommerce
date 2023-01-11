export interface IProduct {
    name: string;
    price: number;
    description: string;
    quantity: number;
    discount: number;
    category_id: number;
}

interface ProductImage {
    image_path: string;
}

export interface RootProduct {
    product: IProduct;
    product_images: ProductImage[];
}
