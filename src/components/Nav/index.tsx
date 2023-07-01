import React from "react";
import {
  NavbarContainer,
  NavbarLinkContainer,
  NavbarLink,
} from '../../styles';

export const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLinkContainer>
        <NavbarLink className="nav-link active" to="/">
          Home
        </NavbarLink>
        <NavbarLink className="nav-link" to="/characters">
          Characters
        </NavbarLink>
      </NavbarLinkContainer>
    </NavbarContainer>
  );
};
