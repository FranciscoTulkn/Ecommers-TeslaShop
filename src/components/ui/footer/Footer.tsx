import { titleFonts } from "@/config/fonts"
import Link from "next/link"

export const Footer = () => {
  return (
    <div className="flex w-full justify-center text-xs mb-10">
      
      <Link href="/" className="mx-2">
        <span className={ `${titleFonts.className} antialiased font-bold` }>Teslo </span>
        <span>| Tienda </span>
        <span>&copy; { new Date().getFullYear() } Hecho con ❤️ DevFJTR </span>
      </Link>

      <Link href="/" >
        <span className="mx-2">Terminos y Condiciones</span>
      </Link>

      <Link href="/" >
        <span className="mx-2">Aviso de Privacidad</span>
      </Link>
    </div>
  )
}
