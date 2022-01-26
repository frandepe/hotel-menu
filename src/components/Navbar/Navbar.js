import { Navbar, Container, Button } from "react-bootstrap";
import logo from "./logoCooking.png";
import AboutMe from "../AboutMe/AboutMe";
import "./Navbar.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const NavbarComp = () => {
  const navigate = useNavigate();
  const [log, setLog] = useState("Sing Out");

  const singOut = () => {
    localStorage.removeItem("token");
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  };

  return (
    <div>
      <Navbar className="Navbar__container" bg="light" expand="lg" sticky="top">
        <Container>
          <div className="Navbar3__aboutme">
            <AboutMe />
          </div>
          <Navbar.Brand>
            <img
              src={logo}
              width="100"
              height="auto"
              className="d-inline-block align-top img-logotipo"
              alt={"logo"}
            />
          </Navbar.Brand>

          {window.localStorage.getItem("token") && (
            <Button onClick={singOut} variant="outline-primary">
              Sign In
            </Button>
          )}
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
