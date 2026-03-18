import { Product } from "@/hooks/interfaces";

export async function getProducts(): Promise<Product[]> {
  try {
    const isServer = typeof window === 'undefined';
    const baseUrl = isServer 
      ? (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000') 
      : '';

    const res = await fetch(`${baseUrl}/api/products`, {
      cache: "no-store"
    });

    if (!res.ok) return []; // Retornar array sin nada
    
    const data = await res.json();
    return Array.isArray(data) ? data : []; 
  } catch (error) {
    console.error(error);

    console.error("Error en getProducts:", error);
    return [];
  }
}