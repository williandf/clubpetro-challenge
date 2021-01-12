import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    color: #000;
    background: #FFF;
  }
  body, input, button, textarea {
    font: 400 16px Roboto, sans-serif;
  }
`;
 
export default GlobalStyle;