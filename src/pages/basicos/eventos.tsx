import Evento from "@/components/basicos/Entento";

export default function PaginaEventos() {
  return(
    <div className="flex justify-center items-center flex-wrap h-screen gap-5">
      <Evento />
      <Evento />
      <Evento />
    </div>
  )
}