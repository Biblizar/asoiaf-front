import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 50px;
  background-color: #293030;
  display: flex;
  flex-direction: column;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  color: white;
  font-size: x-large;
  text-decoration: none;
  margin: 10px;
  &:hover {
    color: #6e1f28;
  }
`;
