import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function NavBar() {
   return (
      <Navbar expand="lg" className=" bg-slate-700">
         <Container>
            <Navbar.Brand className="text-white" href="/main">
               Posts app
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto flex justify-between h-full items-center  w-2/3 absolute right-0">
                  <div className="flex gap-10  h-full">
                     <Link
                        className="no-underline text-white flex justify-between h-full items-center"
                        to={"/main"}
                     >
                        Home
                     </Link>
                     <Link
                        className="no-underline text-white flex justify-between h-full items-center"
                        to={"/create"}
                     >
                        Add post
                     </Link>
                  </div>
                  <NavDropdown
                     className="text-white"
                     title="Options"
                     id="basic-nav-dropdown"
                  >
                     <Link
                        className="no-underline text-black flex justify-between h-full items-center"
                        to={"/account"}
                     >
                        Account
                     </Link>
                     <Link
                        className="no-underline text-black flex justify-between h-full items-center"
                        to={"/settings"}
                     >
                        Settings
                     </Link>
                     <NavDropdown.Divider />
                     <Link
                        className="no-underline text-black flex justify-between h-full items-center"
                        onClick={() => {
                           localStorage.removeItem("token");
                        }}
                        to={"/"}
                     >
                        Exit
                     </Link>
                  </NavDropdown>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
}

export default NavBar;
