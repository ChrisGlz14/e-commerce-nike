
export interface Product {
    _id?: string; // MongoDB usa _id
    title: string;
    slug: string;
    description: string;
    brand: string; // Este campo está en tu DB, agrégalo aquí
    price: number;
    images: string[];
    gender: Category;
    type: ValidTypes;
    tags: string[];
    variants: ProductVariant[]; // Cambiado de 'inStock' a 'variants' para que coincida con la DB
    isActive: boolean;
    
    // Si estos campos no están en todos los documentos de la DB, usa '?'
    allSizes?: Size[]; 
    availableSizes?: Size[];
    sale?: SaleInfo;
    createdAt?: string;
    updatedAt?: string;
}

export interface ProductVariant {
  size: string; // En tu DB el size es un string (ej: "9"), asegúrate de que coincida con tu type Size
  stock: number;
}

export interface SaleInfo {
  isOnSale: boolean;
  discountPercentage?: number;
  salePrice?: number;
}

export type Category = 'men' | 'women' | 'kid' | 'unisex';

export type Size = "4" | "4.5" | "5" | "5.5" | "6" | "6.5" | "7" | "7.5" | "8" | "8.5" | "9" | "9.5" | "10" | "10.5" | "11" | "11.5" | "12" | "12.5" | "13";

export type ValidTypes =
  | 'shirt'
  | 'shoes'
  | 'pants'
  | 'hoodie'
  | 'jacket'
  | 'accesories';