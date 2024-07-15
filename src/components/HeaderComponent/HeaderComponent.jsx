import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function HeaderComponent() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/" className="mr-4 alignment">SEC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto text-white">
            <Nav.Link href="/" variant="">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/dept">Departments</Nav.Link>
            <Nav.Link href="/events">Events</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/dept">Department</NavLink>
        <NavLink to="/events">Events</NavLink>
      </div> */}
    </>
  );
}