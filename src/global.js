import { createGlobalStyle } from 'styled-components';

import background from './assets/images/background.svg';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #191920;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-position: center top;
  }

  body, input, button {
    font-family: Roboto, sans-serif;
    font-size: 14px;
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
  }

  ul, a {
    list-style: none;
    text-decoration: none;
  }
`;

export default GlobalStyle;
