import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none; 
    color: ${(props) => props.theme.colors.black};
    font-family: 'Pretendard';
    // 스크롤바 없애기
    ::-webkit-scrollbar {
    display: none;
  }
  p,span{
    color:inherit;
  }
  // 버튼 초기화
  button {
    background-color: transparent;
    border: 0;
    cursor: pointer;
  }
}
`;

export default GlobalStyle;
