import ImagemAletoria from "@/components/hooks/ImgamAleatoria";

export default function PaginaImagens() {
  return (
    <div className={`
      flex justify-center items-center h-screen gap-5
    `}>
      <ImagemAletoria />
      <ImagemAletoria />
      <ImagemAletoria />
    </div>
  )
}