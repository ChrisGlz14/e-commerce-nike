import { Product } from "@/interfaces";

export async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, {
      cache: "no-store"
    });

    if (!res.ok) return []; // Retornar array sin nada
    
    const data = await res.json();
    return Array.isArray(data) ? data : []; 
  } catch (error) {
    console.error(error);
    return [];
  }
}