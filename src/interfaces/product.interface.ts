export interface Product {
    // id: string;
    description: string;
    images: string[];
    inStock: number;
    price: number;
    size: Size[];
    slug: string;
    type: string;
    tags: string[];
    title: string;
    gender: 'men'|'women'|'kid'|'unisex';
}

export type Category = 'men' | 'women' | 'kid' | 'unisex';

export type Size = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL';

export type ValidTypes = 'shirt' | 'shoes' | 'accesories'