import { createGlobalStyle } from 'styled-components';
import constants from './constants';

const GlobalStyle = createGlobalStyle`

  #root {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  body {
    background-color: ${constants.colors.orange};
    display: flex;
    align-content: center;
    
    .logo-title {
      font-size: 32px;
      font-family: 'Grape Nuts', cursive;
    }

    .title{
      font-size: 25px;
      font-family: 'IBM Plex Sans Thai Looped', sans-serif;
    }

    .subtitle{
      font-size: 20px;
      font-family: 'Josefin Sans', sans-serif;
    }

    .text{
      font-size: 16px;
      font-family: 'Maitree', serif;
    }
  }

`

export default GlobalStyle;