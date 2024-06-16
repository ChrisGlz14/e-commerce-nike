'use client'
// C:\Users\ChrisPC\Desktop\proyectos-personales\e-commerce-nike\src\app\(shop)\page.tsx
import React from 'react';
import { shoesInitialData } from "@/seeds/seedShoesHome";
import FirstPage from "@/components/ui/title/FirstPage";
import Products from "@/components/products/products";

const Home = () => {

  return (
    <>
      <FirstPage 
        title="NIKE"
        subtitle="SHOP"
      />
      <Products shoes={shoesInitialData}/>
    </>
  );
}

export default Home;
