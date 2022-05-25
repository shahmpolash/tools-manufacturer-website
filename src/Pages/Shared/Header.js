import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Header = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const handleSignout = () =>{
        signOut(auth);
    }
    return (
        <div className='bg-primary'>
            <header className='container py-2'>
            <Navbar collapseOnSelect  expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">PowerTools</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/available-items">Available Items</Nav.Link>
                            <Nav.Link as={Link} to="/portfolio">My Portfolio</Nav.Link>
                            {
                                admin && <Nav.Link as={Link} to="/additem">Add Items</Nav.Link>
                            }
                            {
                                admin && <Nav.Link as={Link} to="/manageitems">Manage Items</Nav.Link>
                            }
                            
                        </Nav>
                        
                        <Nav>
                            
                            {
                                user ?

                                
                                <Nav.Link eventKey={2} as={Link} to="/dashboard">
                               <div>Dashboard</div>
                            </Nav.Link>

                                :
                                
                                <Nav.Link>
                               
                            </Nav.Link>}
                        </Nav>
                        <Nav>
                            
                            {
                                user ?

                                
                                <Nav.Link onClick={handleSignout}> 
                                <div className='font-weight-bold text-primary bg-warning p-2'>Signout</div>
                             </Nav.Link>

                                :
                                
                                <Nav.Link eventKey={2} as={Link} to="/login">
                               <div className='font-weight-bold text-primary bg-warning p-2'>Login</div>
                            </Nav.Link>}
                            {
                                user &&
                                <Nav.Link eventKey={2}>
                                <div>You: {user.email}</div>
                             </Nav.Link>
                             }
                            

                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
        </div>
    );
};

export default Header;