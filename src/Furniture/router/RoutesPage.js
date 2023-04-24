import {Routes,Route} from 'react-router-dom'
import Home  from '../screen/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Offcanvas,Container, Row ,Col, Navbar, NavDropdown, Button,Form,Nav,Carousel} from 'react-bootstrap';
import '../style/style.css'
import Details from '../screen/Details';
import ProductDetails from '../screen/ProductDetails';
function RoutesPage() {
    return (
        <>
          <Container fluid className=''>
            <Container className=''>
                <Row>
                    <Col>
                     {['md'].map((expand) => (
                                <Navbar key={expand} bg="light" expand={expand} className="">
                                <Container fluid>
                                    <Navbar.Brand href="/">
                                    <img
                                        src={require('../image/AC-banner-HP-web.jpg')}
                                        width="30"
                                        height="30"
                                        className="d-inline-block align-top"
                                        alt="React Bootstrap logo"
                                        />
                                        Navbar Offcanvas
                                        </Navbar.Brand>
                                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                                    <Navbar.Offcanvas
                                    id={`offcanvasNavbar-expand-${expand}`}
                                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                    placement="end"
                                    >
                                    <Offcanvas.Header closeButton>
                                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                        Offcanvas
                                        </Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        <Nav className="justify-content-center flex-grow-1 pe-3">
                                        <Nav.Link href="#action1">Home</Nav.Link>
                                        <Nav.Link href="#action2">Link</Nav.Link>
                                        <NavDropdown
                                            title="Dropdown"
                                            id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action4">
                                            Another action
                                            </NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action5">
                                            Something else here
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                        </Nav>
                                        <Form className="d-flex">
                                        <Form.Control
                                            type="search"
                                            placeholder="Search"
                                            className="me-2"
                                            aria-label="Search"
                                        />
                                        <Button variant="outline-success">Search</Button>
                                        </Form>
                                    </Offcanvas.Body>
                                    </Navbar.Offcanvas>
                                </Container>
                                </Navbar>
                            ))}
                  </Col>
                </Row>
                </Container>
         </Container>
          <Routes>
            <Route  path="/*" element={<Home />}/>
            <Route  path="/details" element={<Details />}/>
            <Route  path="/productdetails" element={<ProductDetails />}/>
        </Routes>
        <Container fluid className=''>
            <Container className='bg-success'>
                <Row>
                    <Col>
                    <h1>copy</h1>
                    </Col>
                </Row>
            </Container>
        </Container>        
        </>
    );
}

export default RoutesPage;