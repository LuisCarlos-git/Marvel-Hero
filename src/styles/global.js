import { createGlobalStyle } from 'styled-components';
import 'react-perfect-scrollbar/dist/css/styles.css';

import fundo from '../assets/fundo.jpg';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  &:focus {
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased !important
  }

  body, input, button {  
    font-weight: bold;
  }

  html,body, #root {
    height: 100%;
    background: #000 url(${fundo});
    background-repeat: no-repeat;    
    background-size: cover;
    
  }
  

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
