import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/home">
            Home
          </NavLink>
          <NavLink to="/support">
            Support
          </NavLink>
          <NavLink to="/contact">
            Contact
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;