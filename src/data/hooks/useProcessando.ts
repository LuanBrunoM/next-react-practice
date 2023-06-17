import { useState } from "react"

export default function useProcessando(){
  const [processando, setProcessando] = useState<boolean>(false)

  function iniciarProcemento() {
    setProcessando(true)
  }

  function finalizarProcessamento() {
    setProcessando(false)
  }

  return{
    processando,
    iniciarProcemento,
    finalizarProcessamento
  }
}