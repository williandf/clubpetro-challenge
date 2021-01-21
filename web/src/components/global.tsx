import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    @media (max-width: 570px) {
      width:100%;
    }
    max-width: 1440px;
    width: 90%;
    margin: 0 auto;
    color: #000;
    background: #FFF;
  }
  body, input, button, textarea {
    font: 400 16px Roboto, sans-serif;
  }
`;
 
export default GlobalStyle;