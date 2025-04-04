import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import netflixLogo from "../assetsimg/logo.png";

const CustomNavBar = function () {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={netflixLogo}
            alt="Netflix Logo"
            style={{ width: "100px", height: "55px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">TV Shows</Nav.Link>
            <Nav.Link href="#pricing">Movies</Nav.Link>
            <Nav.Link href="#pricing">Recently added</Nav.Link>
            <Nav.Link href="#pricing">My list</Nav.Link>
            <NavDropdown title="profili" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Cinzia</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Francesco</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Roberto</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">KIDS</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">KIDS</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              TV Shows
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavBar;
