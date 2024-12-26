import { titleFonts } from "@/config/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <h2>Hola mundo</h2>
      <h2 className={ `${titleFonts.className} font-bold` }>Hola mundo</h2>
    </div>
  );
}
