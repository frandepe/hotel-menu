import { Navbar, Container, Button } from "react-bootstrap";
import logo from "./logoCooking.png";
import AboutMe from "../AboutMe/AboutMe";
import "./Navbar.scss";
import { useNavigate } from "react-router-dom";

const NavbarComp = () => {
  const navigate = useNavigate();

  const singOut = () => {
   /* localStorage.removeItem("token");
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }*/
    navigate("/login");
  };

  return (
    <div>
      <Navbar
        className="Navbar__container"
        bg="success"
        expand="lg"
        sticky="top"
      >
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

        
            <Button onClick={singOut} variant="outline-primary">
              Sign In
            </Button>
          
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
