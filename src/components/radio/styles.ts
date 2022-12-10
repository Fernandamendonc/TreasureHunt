import styled from 'styled-components'

export const Container = styled.div`
  border-radius: 5px;
  border: solid 1.6px black;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #DFD1AB;
    border: solid 2px #DFD1AB;
  }

  .img {
    margin-left: 1rem;
  }
`

export const Input = styled.input`
  &:checked + label {
    background: #DFD1AB;
  }
  &[type='radio'] {
    display: none;
  }
`

export const RadioContainer = styled.label`
  cursor: pointer;
  width: 100%;
  padding: 2rem 0.5rem;
  color: black;
  transition: border-color 0.2s ease;
`