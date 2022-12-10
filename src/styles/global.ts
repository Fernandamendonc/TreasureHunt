import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    // pallet
    --yellow-50: #F4EAD5;
    --yellow-100: #EA4335;
    --yellow-60: #DFD1AB;
  }

  @media (max-width: 450px) {
    html {
      font-size: 81.25%; //13px
    }
  }

  body {
    background: var(--yellow-50);
    font-family: 'Crimson Text', serif;
  }

  body, input, textarea, button {
    border: 0;
    color: black;
    font-family: 'Crimson Text', serif;
  }

  h3, h4, h5, h6 {
    font-weight: 500;
    color: black;
  }

  h1 {
    font-weight: 700;
    font-size: 2rem;
    color: black;
  }

  h2 {
    font-weight: 700;
    font-size: 1.5rem;
    color: black;
  }

  button, a {
    text-decoration: none;
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ::-webkit-scrollbar {
    width: 1.3rem;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }
  
  ::-webkit-scrollbar-thumb {
    border-radius: 0.65rem;
    border: 6px solid transparent;
    
    background: var(--gray-600);
    background-clip: content-box;
    &:hover {
      background-color: var(--blue-200);
    }
  }
`