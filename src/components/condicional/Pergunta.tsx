import { useState } from "react"
import If from "./If"
import { IconChevronDown } from "@tabler/icons-react"
import { IconChevronUp } from "@tabler/icons-react"


interface PerguntaProps {
  indice: number
  pergunta: string
  resposta: string
  aberta: boolean
  alternarVisibilidade: (indice: number) => void
}

export default function Pergunta(props: PerguntaProps) {
  const [aberta, setAberta] = useState<boolean>(false)

  const temp = <h1>Oi</h1>

  return (
    <div className={`border border-zinc-600 rounded-md overflow-hidden`}>
      <div 
        className={`bg-zinc-700 p-5 cursor-pointer flex justify-between`}
        onClick={() => props.alternarVisibilidade(props.indice)}
      >
        <span>{props.pergunta}</span>
        {props.aberta ? <IconChevronUp /> : <IconChevronDown />}
      </div>
      <If teste={props.aberta}>
          <div className="p-5">
            {props.resposta}
          </div>
      </If> 
      
    </div>
  )
}