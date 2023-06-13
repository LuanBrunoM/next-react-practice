import { useState } from "react"
import Pergunta from "./Pergunta"

export default function Faq() {
  const [ativo, setAtivo] = useState<number>(0)

  function alternarVisibilidade(indice: number){
    if(indice === ativo){
      setAtivo(-1)
    }else{
      setAtivo(indice)
    }
  }

  return(
    <div className="flex flex-col gap-2 w-[90%] md:w-3/4">
      <Pergunta 
      indice={0}
      aberta={ativo === 0}
      alternarVisibilidade={alternarVisibilidade}
      pergunta=
        "Quais são as principais diferenças entre o TypeScript e o JavaScript?" 
      resposta=
        "As principais diferenças entre o TypeScript e o JavaScript são: o TypeScript é um superconjunto do JavaScript, ou seja, todo código JavaScript é código TypeScript válido; o TypeScript"
      />
      <Pergunta 
      indice={1}
      aberta={ativo === 1}
      alternarVisibilidade={alternarVisibilidade}
      pergunta=
        'O que é uma declaração de tipo "Union" no TypeScript e como ela é usada?'
      resposta=
        'Uma declaração de tipo "Union" no TypeScript permite combinar dois ou mais tipos em uma única declaração separada por o operador de pipe (|). Isso significa que um valor pode ter um dos vários tipos especificados. Por exemplo, number | string indica que um valor pode ser do tipo número ou do tipo string.'
      />
      <Pergunta 
      indice={2}
      aberta={ativo === 2}
      alternarVisibilidade={alternarVisibilidade}
      pergunta=
        'O que são "decorators" no TypeScript e como eles são usados?' 
      resposta=
        "Decorators no TypeScript são uma funcionalidade que permite adicionar metadados e comportamentos extras a classes, métodos, propriedades e outros elementos. Eles são marcados com o símbolo '@' e são amplamente utilizados em frameworks como Angular. Os decorators são usados para adicionar funcionalidades extras, como anotações de tipo, validação, logging, etc."
      />
      <Pergunta
      indice={3} 
      aberta={ativo === 3}
      alternarVisibilidade={alternarVisibilidade}
      pergunta=
        "Como o TypeScript suporta a herança de tipos e a implementação de interfaces?" 
      resposta=
        "O TypeScript suporta herança de tipos usando a palavra-chave extends. Uma classe pode estender outra classe, herdar suas propriedades e métodos, além de adicionar novos membros ou substituir os existentes. Em relação às interfaces, uma classe pode implementar uma ou várias interfaces, garantindo que ela cumpra os contratos especificados pelas interfaces."
      />
      
    </div>
  )
}