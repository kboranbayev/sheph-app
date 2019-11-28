import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { Link, Route } from "react-router-dom";
import PropTypes from "prop-types";
import Entry from "../form/entry-detail";
import logo from '../../resources/images/sheph-w-bg.png';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        style={{ backgroundColor: props.backColor }}
        light
        brand={logo}
        expand="md"
      >
        <NavbarBrand
          tag={Link}
          to="/"
          style={{ color: "white", fontWeight: "900" }}
        >
          <img src={logo} alt="logo" height="50" width="50" />
{' '}
Sheph
</NavbarBrand>
        <NavbarToggler onClick={toggle} style={{ backgroundColor: "white" }} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/" style={{ color: "white" }}>
                Browse
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/about" style={{ color: "white" }}>
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/submit" style={{ color: "white" }}>
                Submit
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Route path="/entry_detail" component={Entry} />
    </div>
  );
};

Header.propTypes = {
  backColor: PropTypes.string.isRequired
};

export default Header;
