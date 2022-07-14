import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
	* {
    text-decoration: none;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  input {
    border-style: none;
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  button {
    border-style: none;
    cursor: pointer;
  }
  li {
    list-style: none;
  }
`;
export default GlobalStyle;
