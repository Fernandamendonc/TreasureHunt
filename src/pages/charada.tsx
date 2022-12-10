import ProgressBar from "@ramonak/react-progress-bar";

import { useState } from "react";

import { Container } from "../styles/charada";


import { Charada1 } from '../components/charadas/Charada1'
import { Charada2 } from '../components/charadas/Charada2'
import { Charada3 } from '../components/charadas/Charada3'
import { Charada4 } from '../components/charadas/Charada4'
import Premios from "../components/Premiomoedas";

export function CharadaContent({ step, nextStep }: CharadaContentProps) {
  switch (step) {
    case 1:
      return <Charada1 nextStep={nextStep} />
    case 2:
      return <Charada2 nextStep={nextStep} />
    case 3:
      return <Charada3 nextStep={nextStep} />
    case 4:
      return <Charada4 nextStep={nextStep} />
    default:
      return <Premios />
    }
  }

export default function Charadas() {
  const [step, setStep] = useState(1)

  function nextStep() {
    setStep(prevState => prevState + 1)
  }
  return (
    <main>
      <ProgressBar
        completed={step - 1}
        maxCompleted={4}
        isLabelVisible={false}
        borderRadius="0px"
        height="14px"
        baseBgColor="#DFD1AB"
        bgColor="#000"
      />
      <Container>
        <CharadaContent step={step} nextStep={nextStep} />
      </Container>
    </main>
  )
}

interface CharadaContentProps {
  step: number
  nextStep: () => void
}
