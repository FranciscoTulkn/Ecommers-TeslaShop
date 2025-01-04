import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";
import { titleFonts } from "@/config/fonts";
import { ProductMobileSlideShow, ProductSlideShow, QuantitySelector, SizeSelector } from "@/components";

interface Props {
  params: {
    slug: string
  }
}

export default function ({ params }: Props) {

  const { slug } = params;
  const product = initialData.products.find( product => product.slug === slug );

  if ( !product ) {
    notFound();
  }


  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3  gap-3">

      {/* Slideshow */}
      <div className="col-span-1 md:col-span-2">

        {/* Mobile Slideshow */}
        <ProductMobileSlideShow 
          images={ product.images }
          title={ product.title }
          className="block md:hidden"
        />

        {/* Desktop Slideshow */}
        <ProductSlideShow 
          images={ product.images }
          title={ product.title }
          className="hidden md:block"
        />
      </div>

      {/* Product info */}
      <div className="col-span-1 px-5">
        <h1 className={ `${titleFonts.className} antialiased text-xl font-bold ` }>
          { product.title }
        </h1>
        <p className="text-lg mb-5">$ { product.price }</p>

        {/* Selector talla */}
        <SizeSelector
          selectedSize={ product.sizes[0] }
          availableSizes={ product.sizes }
        />

        {/* Selector cantidad */}
        <QuantitySelector
          quantity={ 2 }
        />

        {/* Button agregar cart */}
        <button className="btn-primary my-5">Agregar al carrito</button>

        {/* Description product */}
        <h3 className="font-bold text-sm">Descripción</h3>
        <p className="font-light">
          { product.description }
        </p>
      </div>
    </div>
  );
}