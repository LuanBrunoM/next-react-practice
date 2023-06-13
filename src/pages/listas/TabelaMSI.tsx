interface TabelaMSI {
  times: string[]
}

export default function TabelaMSI(props: TabelaMSI) {

  // const itens: any[] = []
  // for (let i = 0; i < props.times.length; i++) {
  //   itens.push(
  //     <li key={props.times[i]} className="text-xl list-decimal">
  //       {props.times[i]}
  //     </li>
  //   )
  // }

  // const itens2 = props.times.map((time, i) => {
  //   return (
  //     <li
  //       key={time}
  //       className={`text-xl list-decimal ${i % 2 === 0 ? 'text-blue-400' : 'text-red-500'}`}
  //     >
  //       {time}
  //     </li>
  //   )
  // })

  return (
    <ol>
      {props.times.map((time, i) => {
        return (
          <li
            key={time}
            className={`text-xl list-decimal ${i % 2 === 0 ? 'text-blue-400' : 'text-red-500'}`}
          >
            {time}
          </li>
        )
      })}
    </ol>
  )
}