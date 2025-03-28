'use client';

import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { IoCardOutline } from "react-icons/io5";


const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

interface Props {
  params: {
    id: string;
  }
}

export default function ({ params }: Props) {

  const { id } = params;

  // TODO: Validar que el id exista
  // redirec()
  
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      
      <div className="flex flex-col w-[1000px]">
        <Title title={ `Orden: ${ id }` }
          subtitle="Resumen de la compra" 
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          {/* Carrito de compras */}
          <div className="flex flex-col mt-5">
            <div className={
              clsx(
                'flex justify-between items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5',
                {
                  'bg-red-500': false,
                  'bg-green-700': true,
                }
              )
            }>
              <IoCardOutline size={30} />
              {/* <span className="mx-2">Pendiente de pago</span> */}
              <span className="mx-2">Orden pagada</span>
            </div>
          

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
                    <p>${ product.price } x 3</p>
                    <p className="font-bold">Subtotal: ${ product.price * 3 }</p>
                  </div>
                </div>
              ))
            }

          </div>

          {/* Checkout - Resumen de la orden */}
          <div className="rounded-xl shadow-xl p-7">

            <h2 className="text-2xl mb-2 font-bold">Dirección de entrega</h2>
            <div className="mb-10">
              <p className="font-semibold text-xl">Matthew Baker</p>
              <p>123 Main Street</p>
              <p>New York, NY 10001</p>
              <p>United States</p>
              <p>(123) 456-7890</p>
            </div>

            {/* Divider */}
            <div className="w-full h-0.5 rounded bg-gray-200 mb-10"></div>

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

            <div className="mt-5 mb-2 w-full ">

              <div className={
                clsx(
                  'flex justify-between items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5',
                  {
                    'bg-red-500': false,
                    'bg-green-700': true,
                  }
                )
              }>
                <IoCardOutline size={30} />
                {/* <span className="mx-2">Pendiente de pago</span> */}
                <span className="mx-2">Orden pagada</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}