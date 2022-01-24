import { Button, Offcanvas } from "react-bootstrap";
import { useState } from "react";

const AboutMe = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-primary" onClick={handleShow}>
        Developer
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            Franco De Paulo - frontend developer
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          My name is Franco De Paulo and I am a web developer. I made this
          project for the company Alkemy! ;) Thanks for watching
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default AboutMe;
