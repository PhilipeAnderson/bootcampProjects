import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #FFFFFF;
    --black: #000000;

    --backgroundDefault: #FFFFFF;
    --backgroundLight: #DDD6CD;
    --backgroundDark: #474747;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media(max-width: 1080px){
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 720px){
    html {
      font-size: 87.50%
    }
  }

  body {
    color: var(--white);
    background-image: url('/assets/back.png');
    background-repeat: no-repeat;
  }

  body, input, textarea, select, button {
    font: 400 1rem 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    cursor: pointer;
    text-decoration: none;
  }
`;