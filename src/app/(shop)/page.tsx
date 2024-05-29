import FirstPage from "../../components/ui/title/FirstPage";
import ProductGrid from "@/components/products/product-grid/ProductGrid";
import { initialData } from "@/seeds/seed";
import Products from "../../components/products/products";



export default function Home() {
  return (
    <>
      
      <FirstPage 
      title = "NIKE"
      subtitle = "SHOP"
      />
      <Products />

      
    </>
  );
}
