import Image from 'next/image'
import relogioImg from '../../../public/assets/relogio.png'

import { 
  RadioContainer, 
  Input, 
  Container} from './styles'

interface RadioProps {
  name: string
  resposta: string
  value: number
  disabled?: boolean
}

export function Radio({ name, resposta, value, disabled = false }: RadioProps) {
  const id = String(
    Math.floor(Math.random() * 90000) + 10000
  )

  return (
    <>
      <Container>
        <Input 
          type="radio" 
          name={name} 
          id={id} 
          value={value} 
          disabled={disabled} />
          <RadioContainer htmlFor={id}>
            <span>{resposta}</span>
          </RadioContainer>
      </Container>
    </>
  )
}