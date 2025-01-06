import Link from "next/link";

import Image from "next/image";
import { redirect } from "next/navigation";

import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function () {

  // redirect('/empty');

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      
      <div className="flex flex-col w-[1000px]">
        <Title 
          title="Carrito de compras"
          subtitle="Lleva el control de tus compras"  
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          {/* Carrito de compras */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Agregar productos</span>
            <Link href="/" className="mb-5 underline">
              Continúa comprando
            </Link>
          

            {/* Items del carrito */}
            {
              productsInCart.map( product => (
                <div key={ product.slug } className="flex mb-5">
                  <Image 
                    src={ `/products/${ product.images[0] }` }
                    alt={ product.title }
                    width={ 100}  
                    height={ 100 }
                    style={{
                      width: "100px",
                      height: "100px",
                    }}
                    className="mr-5 rounded"
                  />

                  <div>
                    <p>{ product.title }</p>
                    <p>${ product.price }</p>
                    <QuantitySelector quantity={ 1 } />

                    <button className=" mt-3">Eliminar</button>
                  </div>
                </div>
              ))
            }

          </div>

          {/* Checkout - Resumen de la orden */}
          <div className=" bg-white rounded-xl shadow-xl p-7 h-fit">
            <h2 className="mb-2 text-2xl">Resumen del pedido</h2>

            <div className="grid grid-cols-2">
              <span>No. de productos</span>
              <span className="text-right">3 artículos</span>

              <span>Subtotal</span>
              <span className="text-right">$ 100</span>

              <span>IVA (19%)</span>
              <span className="text-right">$ 100</span>

              <span className="mt-5 text-2xl">Total: </span>
              <span className="text-right mt-5 text-2xl">$ 200</span>
            </div>

            <div className="mt-5 mb-2 w-full">
              <Link 
                href="/checkout/address" 
                className="flex btn-primary justify-center">
                Checkout
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}