import { Product } from '@/interfaces';

export const shoesSeed = {
    products: [
        {
                description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
                images: [
                    '489605-1200-1200?width=1200&height=1200&aspect=true',
                    '378596-1200-1200?width=1200&height=1200&aspect=true'
                    
                ],
                inStock: 7,
                price: 75,
                sizes: ['XS','S','M','L','XL','XXL'],
                slug: "mens_chill_crew_neck_sweatshirt",
                type: 'shirts',
                tags: ['sweatshirt'],
                title: "Nike Revolution 6",
                gender: 'men'
            },
        {
            description: "The Men's Quilted Shirt Jacket features a uniquely fit, quilted design for warmth and mobility in cold weather seasons. With an overall street-smart aesthetic, the jacket features subtle silicone injected Tesla logos below the back collar and on the right sleeve, as well as custom matte metal zipper pulls. Made from 87% nylon and 13% polyurethane.",
            images: [
                '762481-1200-1200?width=1200&height=1200&aspect=true',
                '792655-1200-1200?width=1200&height=1200&aspect=true'
            ],
            inStock: 5,
            price: 200,
            sizes: ['XS','S','M','XL','XXL'],
            slug: "men_quilted_shirt_jacket",
            type: 'shirts',
            tags: ['jacket'],
            title: "Men's Quilted Shirt Jacket",
            gender: 'men'
        },
        
        {
            description: "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Zip Up Bomber has a premium, modern silhouette made from a sustainable bamboo cotton blend for versatility in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, a concealed chest pocket with custom matte zipper pulls and a french terry interior. Made from 70% bamboo and 30% cotton.",
            images: [
                '811540-1200-1200?width=1200&height=1200&aspect=true',
                '912686-1200-1200?width=1200&height=1200&aspect=true'
            ],
            inStock: 10,
            price: 130,
            sizes: ['S','M','L','XL','XXL'],
            slug: "men_raven_lightweight_zip_up_bomber_jacket",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Raven Lightweight Zip Up Bomber Jacket",
            gender: 'men'
        },
    ] as Product[],
};