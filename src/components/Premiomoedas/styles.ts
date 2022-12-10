import styled from 'styled-components'

export const Container = styled.main`
  padding: 5rem 2rem;
  background: var(--yellow-50);
  color: black;
`

export const Heading = styled.header`
  display: flex;
  justify-content: space-around;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 2rem;
    margin-top: 20px;
    margin-bottom: 20px;
    font-family: 'Pirata One', cursive;
    text-transform: uppercase;
  }
  h2 {
    font-family: 'Lobster', cursive;
  }
  span {
    margin: 0.7rem 0;
    font-size: 1.25rem;
  }

  .moeda {
    margin-bottom: 41px;
    gap: 1rem;
  }
`

export const Button = styled.button`
  width: 100%;
  margin-top: 1rem;
  padding: 1.5rem 0;
  border-radius: 3rem;
  border: none;
  font-size: 1.25rem;
  font-weight: bold;
  background: var(--yellow-60);
  transition: filter 0.4s ease;

  &:hover {
    filter: brightness(0.9);
  }
`