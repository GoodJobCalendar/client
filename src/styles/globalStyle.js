import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none; 
    color: var(--black);
    font-family: 'Pretendard';
    // 스크롤바 없애기
    ::-webkit-scrollbar {
    display: none;
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
  --point1:#5BFAD3; // 민트
  --point2:#4F32FF; // 파랑
  --point3:#FD6E6E; // 빨강
  }
  button{
    outline: none;
    border: none;
    cursor: pointer;
    background-color: transparent;
  }
}
`;

export default GlobalStyle;
