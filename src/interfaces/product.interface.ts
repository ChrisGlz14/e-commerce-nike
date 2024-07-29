
export interface Product {
    // id: string;
    images: string[];
    description: string;
    inStock: number;
    price: number;
    allSizes: Size[];
    availableSizes: Size[];
    slug: string;
    type: ValidTypes;
    tags: string[];
    title: string;
    sale: boolean;
    gender: Category;
}

export type Category = 'men' | 'women' | 'kid' | 'unisex';

export type Size = "4" | "4.5" | "5" | "5.5" | "6" | "6.5" | "7" | "7.5" | "8" | "8.5" | "9" | "9.5" | "10" | "10.5" | "11" | "11.5" | "12" | "12.5" | "13";

export type ValidTypes = 'shirt' | 'shoes' | 'accesories'