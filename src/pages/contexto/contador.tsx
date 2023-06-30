import Contador from "@/components/contexto/Contador";
import { ContadorProvaider } from "@/data/contexts/ContadorContext";


export default function PaginaContador() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen relative">
      <Contador />
    </div>
  )
}