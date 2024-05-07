import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
   return (
      <Navbar expand="lg" className=" bg-slate-500">
         <Container>
            <Navbar.Brand href="/main">Posts app</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto flex justify-between w-2/3 absolute right-0">
                  <div className="flex">
                     <Nav.Link href="/main">Home</Nav.Link>
                     <Nav.Link href="/create">Add post</Nav.Link>
                  </div>
                  <NavDropdown title="Options" id="basic-nav-dropdown">
                     <NavDropdown.Item href="/account">
                        Account
                     </NavDropdown.Item>
                     <NavDropdown.Item href="/settings">
                        Settings
                     </NavDropdown.Item>
                     <NavDropdown.Divider />
                     <NavDropdown.Item href="/">Exit</NavDropdown.Item>
                  </NavDropdown>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
}

export default NavBar;
