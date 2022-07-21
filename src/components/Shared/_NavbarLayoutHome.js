import './_NavbarLayoutHome.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavbarLayoutHome() {
    return (
        <Navbar expand="xxl" bg="dark" fixed="top"  variant="dark" id="NavbarHome">
          <Container fluid>
            <Navbar.Brand href="#">Curriculum</Navbar.Brand>
            <Navbar.Toggle aria-controls={"offcanvasNavbar-expand-xll"} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-xll`}
              aria-labelledby={`offcanvasNavbarLabel-expand-xxl`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xxl`}>
                  Menú
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="navbar-nav-curriculum">
                  <Nav.Link className='item' href="#curriculum">Inicio</Nav.Link>
                  <Nav.Link className='item' href="#about-as">Sobre mi</Nav.Link>
                  <Nav.Link className='item' href="#education">Educación</Nav.Link>
                  <Nav.Link className='item' href="#skills">Habilidades</Nav.Link>
                  <Nav.Link className='item' href="#projects">Proyectos</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    );
}

export default NavbarLayoutHome;
