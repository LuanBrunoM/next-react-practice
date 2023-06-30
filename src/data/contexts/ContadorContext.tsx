import { createContext, useState } from "react"

interface ContadorContextoProps {
  numero: number
  incrementar: () => void
  decrementar: () => void
}

const ContadorContext = createContext<ContadorContextoProps>({} as any)
export default ContadorContext

export function ContadorProvaider(props: any) {
  const [numero, setNumero] = useState(4321)


  function incrementar() {
    setNumero(numero + 1)
  }
  function decrementar() {
    setNumero(numero - 1)
  }

  return (
    <ContadorContext.Provider value={{
      numero, incrementar, decrementar
    }}>
      {props.children}
    </ContadorContext.Provider>
  )
}