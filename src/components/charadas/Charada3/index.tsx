import { useState } from 'react'
import { toast } from 'react-toastify'

import { Radio } from '../../radio/index'

import { CharadaProps } from '../interfaces'

import Image from 'next/image'
import logoImg from '../../../../public/assets/logo.svg'
import setaImg from '../../../../public/assets/seta.png'

import { 
  Container, 
  RadioGroup, 
  Button, 
  Content} from '../styles'

export function Charada3({ nextStep }: CharadaProps) {
  const name = 'c3'
  const repostas = [
    { id: 1, label: 'guarda-roupa' },
    { id: 2, label: 'monitor' },
    { id: 3, label: 'cama' },
    { id: 4, label: 'teclado' }
  ]
  const [answer, setAnswer] = useState<number | null>(null)

  function handleConfirm() {
    if (answer === 1 || answer === 3 || answer === 2) {
      toast('Está frio')
      return
    }
    nextStep()
  }

  return (
    <Container>
      <Image
        src={logoImg}
        alt='logo'
      />
      <h1>charadas</h1>
      <div className="header">
        <h2>O que é, o que é?</h2>
        <span>
          Eu tenho chaves, mas não tenho fechaduras. Eu tenho espaço, mas não tenho espaço. Você pode entrar, mas não pode sair. O que eu sou?
        </span>
      </div>

      <Content>
        <RadioGroup onChange={e => setAnswer(Number(e.target.value))}>
          {repostas.map(resposta => (
            <Radio
            key={resposta.id}
            name={name}
            resposta={resposta.label}
            value={resposta.id}
            />
            ))}
        </RadioGroup>
      </Content>

      <Button type="button" onClick={handleConfirm} disabled={!answer}>
        <div></div>
        proximo
        <Image 
          src={setaImg}
          alt='seta'
        />
      </Button>
    </Container>
  )
}