import { CarrinhoProvaider } from '@/data/contexts/CarrinhoContext'
import { ContadorProvaider } from '@/data/contexts/ContadorContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CarrinhoProvaider>
      <ContadorProvaider>
        <Component {...pageProps} />
      </ContadorProvaider>
    </CarrinhoProvaider>

  )
}
