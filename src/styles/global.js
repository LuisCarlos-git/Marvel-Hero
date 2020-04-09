import { createGlobalStyle } from 'styled-components';
import 'react-perfect-scrollbar/dist/css/styles.css';

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
    background: rgb(92, 3, 3);
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
