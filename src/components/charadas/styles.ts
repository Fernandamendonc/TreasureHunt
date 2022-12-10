import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 0rem 3rem;
  text-align: center;
  color: black;

  .header{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`
export const RadioGroup = styled.div`
  width: 100%;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Content = styled.div`
  h1 {
    font-family: 'Pirata One', cursive;
  }
`

export const Button = styled.button`
  width: 100%;
  padding: 1.5rem 2rem;
  font-size: 1.25rem;
  font-weight: bold;
  font-size: 1.3rem;
  border-radius: 5px;
  background: #DFD1AB;
  color: black;
  transition: filter 0.4s ease;

  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    filter: brightness(0.9);
  }
`
