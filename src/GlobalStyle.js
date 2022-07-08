import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none; 
}

:root{
  --gray1:#EFEFEF;
  --gray2:#D1D1D1;
  --gray3:#9A9A9A;
  --gray4:#777777;
  --black:#111111;

  --blue1:#ECF1F8;
  --blue2:#A6C9FF;
  --blue3:#74A0E3;
  --blue4:#3284FF;

  --point1:#5BFAD3;
  --point2:#4F32FF;
  --point3:#5BFAD3;
}
`;

export default GlobalStyle;
