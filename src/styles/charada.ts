import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 30px;
    margin-bottom: 30px;
    font-family: 'Pirata One', cursive;
    text-transform: uppercase;
  }

  .header {
    h2 {
      font-family: 'Lobster', cursive;
    }

    span {
      font-family: 'Crimson Text', serif;
    }
  }
`