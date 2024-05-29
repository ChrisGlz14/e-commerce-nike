export interface Product {
    // id: string;
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: ValidSizes[];
    slug: string;
    tags: string[];
    title: string;
    type: string;
    gender: 'men'|'women'|'kid'|'unisex';
}

export type ValidSizes = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL';

export type ValidTypes = 'shirt' | 'shoes' | 'accesories'