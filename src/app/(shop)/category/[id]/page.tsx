import { ProductGrid, Title } from "@/components";
import { Categories } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

const seedProducts = initialData.products;

interface Props {
  params: {
    id: Categories;
  };
}

export default function ({ params }: Props) {

  const { id } = params;
  const products = seedProducts.filter( product => product.gender === id );

  // if (id == 'kids') {
  //   notFound();
  // }

  const labels: Record<Categories, string> = {
    'men': 'para hombres',
    'women': 'para mujeres',
    'kid': 'para niños',
    'unisex': 'para Todos'
  };

  return (
    <>
          <Title 
            title={`Artículos ${ labels[id] }`}
            subtitle="Todos los productos de Teslo"
            className="mb-2"
          />
    
          <ProductGrid
            products={ products }
          />
        </>
  );
}