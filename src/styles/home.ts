import styled from "styled-components";

export const Container = styled.div`
  padding-top: 28px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  background-color: var(--yellow-50);
`

export const Header = styled.header`
  background-color: var(--yellow-50);
  display: flex;
  justify-content: space-around;
`

export const Main = styled.button`
  padding-top: 24px;
  background-color: var(--yellow-50);
  gap: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  
  h1 {
    font-family: 'Lobster', cursive;
    padding: 2px 0;
  }

  .regras {
    padding-top: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;

    h2 {
      font-family: 'Pirata One', cursive;
      text-transform: uppercase;
      padding: 16px 0;
    }
    span {
      width: 245px;
    }

    &:nth-child(5) {
      justify-content: flex-end;
      align-items: flex-end;
    }
  }
`

export const Button = styled.button`
  padding: 5px;
  width: 100px;
  margin-bottom: 1rem;
  border: none;
  border-radius: 10px;
  font-size: 0.9rem;

  background-color: var(--yellow-60);
`
