'use client'
import { shoesSeed } from '@/app/api/shoes/seedShoes'
import { Product, Category } from "@/interfaces";
import ProductGrid from "@/components/products/product-grid/ProductGrid";


interface Props {
    params : {
        id: Category;
    }
}

const products: Product[] = shoesSeed.products;
const link= 'https://nikearprod.vtexassets.com/arquivos/ids/'

const labels:Record<Category, string> = {

    men: 'Para Hombres',
    women: 'Para Mujeres',
    kid: 'Para Niños',
    unisex: 'Unisex'
}



export default function CategoryPage({params}:Props) {

    const {id} = params
    const products = shoesSeed.products.filter((product)=>product.gender === id)


    return (
        <>
        <h1 className="text-3xl text-center mb-2">{`Articulos ${labels[id]}`}</h1>

        <ProductGrid 
        products={products}
        />
        </>
    )
}