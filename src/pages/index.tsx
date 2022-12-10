import { useRouter } from 'next/router'

import Image from 'next/image'
import logoImg from '../../public/assets/logo.svg'
import menuImg from '../../public/assets/menu.svg'
import saidaImg from '../../public/assets/saida.svg'
import naviopirataImg from '../../public/assets/naviopirata.svg'
import cifraoImg from '../../public/assets/cifrao.png'

import { Button, Container, Header, Main } from "../styles/home";
import { useState } from 'react'

export default function Home() {
  const router = useRouter()
  const [IsOpen, setIsOpen] = useState(false)

  return (
    <Container>
      <Header>
        <Image
          src={logoImg}
          alt='logo'
        />
      </Header>
      <Main>
        <h1>Caça Ao Tesouro</h1>
        <span>charadas</span>
        <Button
          type="button"
          onClick={() => router.push(`/charada`)}
          >
          Começar
        </Button>
        <Image 
          src={naviopirataImg}
          alt='navio pirata'
        />
        <div className="regras">
          <h2>charadas</h2>
            <span>
              <Image 
                src={cifraoImg}
                alt='cifrao'
              />
              As charadas vão funcionar dentro do site mas para pegar as recompensas você vai precisar se esforçar e procurar em cada local da casa seus tesouros conforme for acertando as charadas... <br />
              Tem mais uma coisinha para cada charada que você acertar vai ganhar uma moeda e conseguindo 5 moedas vai ganhar uma massagem por 10 minutos!!
            </span>
            <Image 
            className='segundocifrao'
              src={cifraoImg}
              alt='cifrao'
            />
        </div>
      </Main>
    </Container>
  )
}
