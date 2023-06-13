import { useState } from "react";
import Display from "./Display";
import Botoes from "./Botoes";

export default function Contador(){
  const [num, setNum] = useState<number>(0)

  function incrementar(valor:number){ setNum(num + valor)}

  function decrementar(valor:number){ setNum(num - valor)}


  return(
    <div className={`
      flex flex-col p-2 w-72 h-72
      border border-zinc-400 rounded-lg
    `}>
      <Display valor={num} />
      <Botoes inc={incrementar} dec={decrementar}/>
      
    </div>
  )
}