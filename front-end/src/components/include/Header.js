import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/global.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

//Here i am using react-bootstrap,Importing the files  that are needed for this component to work properly

const Header = ()=>{
    return(
        <>  
            <Navbar expand="lg" className="bg-body-tertiary" style={{backgroundColor:'var(--lite_gray)'}}>
            <Container fluid>
                <Navbar.Brand href="#" className="logo_bar">
                    <span className="p-2 temp_header" >E-Shop</span>

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="ms-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Store</Nav.Link>
                    <Nav.Link href="#pricing">Mobile</Nav.Link>
                </Nav>
           
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}

export default Header;