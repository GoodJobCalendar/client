import React from "react";
import styled from "styled-components";

function Pagination({ postPerPage, totalPosts, paginate }) {
  const pageNumbers = [];
  // 페이지 넘버를 설정하기 위해 페이지당 포스트 개수와 총 포스트 개수를 가져온다.
  // index 를 1로 설정하고, index 가 (총 포스트개수 / 페이지당 포스트 개수) 보다 크지 않을때까지 i값을 올린다.
  // 그리고 그 값을 pageNumber 에 넣어서 설장한다.
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Wrapper>
      <PageLists>
        {pageNumbers.map(number => (
          <PageNumber key={number}>
            <PageButton onClick={() => paginate(number)}>{number}</PageButton>
          </PageNumber>
        ))}
      </PageLists>
    </Wrapper>
  );
}
export default Pagination;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PageLists = styled.ul`
  display: flex;
`;
const PageNumber = styled.li``;
const PageButton = styled.button`
  cursor: pointer;
  font-size: 2rem;
  color: ${props => props.theme.uiColorOrange};
  margin: 0 0.3rem;
  padding: 0;
  border: none;
  background: none;
`;