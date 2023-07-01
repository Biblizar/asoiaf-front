import { Link } from "react-router-dom";
import styled from "styled-components";

export const BooksContainer = styled.li`
    display: flex;
    justify-content: center;
`

export const BookStyled = styled(Link)`
  color: white;
  font-size: x-large;
  text-decoration: none;
  margin: 10px;
  &:hover {
    color: #6e1f28;
  }
`;

export const StyledBookList = styled.ul`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
