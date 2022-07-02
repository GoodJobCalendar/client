import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    @media screen and (max-width: 768px){
      div {        
        justify-content: space-between;        
      }
    }
    
}
`;

export default GlobalStyle;
