import { Navbar, Container, Button } from "react-bootstrap";
import logo from "./logoCooking.png";
import AboutMe from "../AboutMe/AboutMe";
import "./Navbar.scss";

const NavbarComp = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" sticky="top">
        <Container className="Navbar__container">
          <div className="Navbar3__aboutme">
            <AboutMe />
          </div>
          <Navbar.Brand href="/home">
            <img
              src={logo}
              width="100"
              height="auto"
              className="d-inline-block align-top img-logotipo"
              alt={"logo"}
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Button variant="outline-primary">Sign Out</Button>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
