import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Form,
  FormGroup,
  Input
} from "reactstrap";
import { Link, Route } from "react-router-dom";
import PropTypes from "prop-types";
import Entry from "../form/entry-detail";
import logo from '../../resources/images/sheph-w-bg.png';
import axios from "axios";
import App from "../../App";

let search = '';

const searchName = (event) => {
  event.preventDefault();
  const data = new FormData();
  data.append('search', search);

  axios.get('/server/search')
    .then((res) => {
      if (res.status == 200) {
        this.props.history.push("http://localhost:5000/search-results?search=:name");
      }
    });
}

const onChange = (event) => {
  search = event.target.value;
}

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
          <Form inline onSubmit={searchName}>
            <FormGroup>
              <Input type="search" name="search" id="searchBar" placeholder="Search a name..." onChange={onChange} />
            </FormGroup>
            <Button color="success">Submit</Button>
          </Form>
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
