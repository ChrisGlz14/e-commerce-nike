import { Product } from "@/interfaces";

export const shoesSeed = {
  products: [
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        "489605-1200-1200?width=1200&height=1200&aspect=true",
        "378596-1200-1200?width=1200&height=1200&aspect=true",
      ],
      inStock: 7,
      price: 75.999,
      size: ["XS", "S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Nike Revolution 6",

      sale: true,
      gender: "men",
    },
    {
      description:
        "The Men's Quilted Shirt Jacket features a uniquely fit, quilted design for warmth and mobility in cold weather seasons. With an overall street-smart aesthetic, the jacket features subtle silicone injected Tesla logos below the back collar and on the right sleeve, as well as custom matte metal zipper pulls. Made from 87% nylon and 13%.",
      images: [
        "762481-1200-1200?width=1200&height=1200&aspect=true",
        "792655-1200-1200?width=1200&height=1200&aspect=true",
      ],
      inStock: 5,
      price: 139.999,
      size: ["XS", "S", "M", "XL", "XXL"],
      slug: "men_quilted_shirt_jacket",
      type: "shirts",
      tags: ["jacket"],
      title: "Men's Quilted Shirt Jacket",

      sale: true,
      gender: "men",
    },

    {
      description:
        "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Zip Up Bomber has a premium, modern silhouette made from a sustainable bamboo cotton blend for versatility in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, a concealed chest pocket with custom matte zipper pulls and a french terry interior. Made from 70% bamboo and 30% cotton.",
      images: [
        "811540-1200-1200?width=1200&height=1200&aspect=true",
        "912686-1200-1200?width=1200&height=1200&aspect=true",
      ],
      inStock: 10,
      price: 135.999,
      size: ["S", "M", "L", "XL", "XXL"],
      slug: "men_raven_lightweight_zip_up_bomber_jacket",
      type: "shirts",
      tags: ["shirt"],
      title: "Men's Raven Lightweight Zip Up Bomber Jacket",
      sale: true,
      gender: "men",
    },
    {
      description:
        "Los primeros pasos de tu bebé son un punto de inflexión. (¿Tienes tu cámara lista?) Diseñamos el Nike Swoosh 1 para dar a sus pies las herramientas cruciales que necesitan para el desarrollo natural y para ayudar a prevenir futuros problemas en los pies. El tejido Flyknit supersuave y una variedad de características se combinan para crear un calzado con el aval de la APMA (American Podiatric Medical Association)",
      images: [
        "845226-1200-1200?width=1200&height=1200&aspect=true",
        "853777-1600-1600?width=1600&height=1600&aspect=true",
      ],
      inStock: 10,
      price: 159.999,
      size: ["S", "M", "L", "XL", "XXL"],
      slug: "Nike_Swoosh_1",
      type: "shoe",
      tags: ["shoe"],
      title: "Nike Swoosh 1",
      sale: true,
      gender: "kid",
    },
    {
      description:
        "Tienes las habilidades y el talento, ahora muéstralo con el calzado de fútbol Nike Jr. Las presillas de agarre y las correas dobles se combinan para brindar un diseño fácil de poner que elimina la necesidad de usar cordones y te ayuda a moverte por la cancha rápidamente. Además, la unidad Zoom Air agrega comodidad adicional y elasticidad sobre una variedad de terrenos, desde pasto auténtico hasta pasto",
      images: [
        "809347-1200-1200?width=1200&height=1200&aspect=true",
        "815250-1200-1200?width=1200&height=1200&aspect=true",
      ],
      inStock: 6,
      price: 134.999,
      size: [],
      slug: "nike-swoosh-2",
      type: "shoe",
      tags: ["shoe"],
      title: "Nike Swoosh 2",

      sale: true,
      gender: "kid",
    },
    {
      description:
        "Quizás tu pequeño tenga clase de natación. O, simplemente, necesitan ponerse algo sencillo para jugar y arrastrarse bajo el sol. El Nike Sunray Adjust 6 es supersuave para disfrutarlo cuando llega el calor. Los bordes ayudan a mantener los pies de tu pequeño contenidos mientras juega: no queremos que se resbale. Además, no hay nada más fácil que un cierre de correas. Que la seguridad sea la menos importante de tus preocupaciones.",
      images: [
        "785987-1200-1200?width=1200&height=1200&aspect=true",
        "787009-1200-1200?width=1200&height=1200&aspect=true",
      ],
      inStock: 9,
      price: 59.999,
      size: [],
      slug: "Nike Sunray Adjust 6",
      type: "shoe",
      tags: ["shoe"],
      title: "Nike_Sunray_Adjust_6",

      sale: true,
      gender: "kid",
    },
  ] as Product[],
};
