import { useState } from "react"
import useProcessando from "./useProcessando"

export default function useStarWars(){
  const { processando, iniciarProcemento, finalizarProcessamento } = useProcessando()
  const [personagens, setPersonagens] = useState<any>([])


  async function obterPersonagens() {
    try {
      iniciarProcemento()
      const resp = await fetch('https://swapi.dev/api/people')
      const dados = await resp.json()
      setPersonagens(dados.results)
    } finally {
      finalizarProcessamento()
    }
  }

  return{
    personagens,
    obterPersonagens,
    processando
  }
}