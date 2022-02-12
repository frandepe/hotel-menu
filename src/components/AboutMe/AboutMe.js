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
          <p>
            My name is Franco De Paulo and I am a frontend developer. If you
            want to contact me, below I leave my networks! Thanks for watching
          </p>
          <p>• https://frandepaulo.netlify.app/</p>
          <p>• https://www.linkedin.com/in/franco-de-paulo-13509b186/</p>
          <p>• https://github.com/frandepe</p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default AboutMe;
