export interface Product {
    // id: string;
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: Size[] | undefined;
    slug: string;
    type: ValidTypes;
    tags: string[];
    title: string;
    sale: boolean;
    gender: Category;
}

export type Category = 'men' | 'women' | 'kid' | 'unisex';

export type Size = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL' ;

export type ValidTypes = 'shirt' | 'shoes' | 'accesories'