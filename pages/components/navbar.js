import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function MainNavbar() {
    return (
        <Navbar style={stylesheet} bg="dark" variant='dark'>
        <Container>
          <Navbar.Brand href="./">Test</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#navbar">Home</Nav.Link>
              <Nav.Link href="#footer">Bottom</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        )
}

const stylesheet = {
    position: "fixed",
    top: "0",
    height: "65px",
    zIndex: "10",
    width: "100%"
}
