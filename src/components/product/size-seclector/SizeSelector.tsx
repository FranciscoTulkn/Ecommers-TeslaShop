import type { Size } from "@/interfaces";
import clsx from "clsx";

interface Props {
    selectedSize: Size;
    availableSizes: Size[];
}

export const SizeSelector = ({ selectedSize, availableSizes }: Props) => {
  return (
    <div className="my-5">
      <h3 className="font-bold mb-4">Talla disponibles: </h3>

      <div className="flex">
        {
          availableSizes.map( size => (
            <button key={size} className={
              clsx(
                'mx-2 rounded-md text-lg hover:underline transition-all hover:bg-gray-100',
                {
                  'underline': size === selectedSize
                }

              )
            } >
              {size}
            </button>))
          }
      </div>
    </div>
  )
}
