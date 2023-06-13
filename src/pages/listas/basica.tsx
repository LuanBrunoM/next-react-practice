import TabelaMSI from "./TabelaMSI"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";



export default function PaginalIstaBasica() {
  const times = [
    'G2',
    'Cloud9',
    'T1',
    'Gen.G',
    'JDG Gaming',
    'PSG Talon',
    'Golden Guardians',
    'Bilibili Gaming'
  ]

  return (
    <div className={`
      flex flex-col justify-center items-center h-screen
    `}>
      <h1 className="flex items-center gap-3 text-5xl font-black text-white">
        <FontAwesomeIcon icon={faTrophy} size="xs" color="#ffd700" />
        Tabela MSI 2023
      </h1>
      <TabelaMSI times={times} />
    </div>
  )
}