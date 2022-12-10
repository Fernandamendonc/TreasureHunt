import { useRouter } from 'next/router'

import Image from 'next/image'
import logoImg from '../../../public/assets/logo.svg'
import menuImg from '../../../public/assets/menu.svg'
import cifraoImg from '../../../public/assets/cifrao.png'

import { 
  Container, 
  Content, 
  Heading, 
  Button } from './styles'

export default function Premios() {
  const router = useRouter()
  return (
    <Container>
      <Heading>
        <Image
            src={logoImg}
            alt='logo'
        />
      </Heading>
      <Content>
        <h1>Total de moedas</h1>
        <div className="moedas">
          <Image 
            className='moeda'
            src={cifraoImg}
            alt='cifrao'
          />
          <Image 
            className='moeda'
            src={cifraoImg}
            alt='cifrao'
          />
          <Image 
            className='moeda'
            src={cifraoImg}
            alt='cifrao'
          />
          <Image 
            className='moeda'
            src={cifraoImg}
            alt='cifrao'
          />
          <Image 
            className='moeda'
            src={cifraoImg}
            alt='cifrao'
          />
        </div>
        <h2>você conseguiu!!!</h2>
        <span>vai ganhar massagem por 10 minutos</span>
      </Content>
        
      <Button type="button"  onClick={() => router.push(`/`)}>
          Voltar para início
      </Button>
    </Container>
  )
}