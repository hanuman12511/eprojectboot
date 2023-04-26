import {Routes,Route} from 'react-router-dom'
import Home  from '../screen/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Offcanvas,Container, Row ,Col, Navbar, NavDropdown, Button,Form,Nav,Carousel} from 'react-bootstrap';
import '../style/style.css'
import Details from '../screen/Details';
import ProductDetails from '../screen/ProductDetails';
import DemoBoot from '../screen/DemoBoot';
import { FaSearch } from "react-icons/fa";
import { Player } from '@lottiefiles/react-lottie-player';

function RoutesPage() {
    return (
        <>
          <Container fluid className='m-5'>
            <Container className='m-5'>
          
                <Row className='fixed-top bg-color-lightblue' >
                <Row className=''>
                    <Col></Col>
                    <Col className='justify-content-end m-3'>
                        <div className=' d-flex bg-color-light align-items-center '>
                            <input className='m-0 border-0  w-100 form-control rounded-0  '  placeholder="search"/> 
                            <FaSearch size={20} color='red' className='m-2'/>
                        </div>
                              </Col>
                    <Col className='d-flex align-items-center justify-content-end'>
                    <Player
        src={require('../image/142473-online-payment.json')}
        className="player"
        loop
        autoplay
        speed={1}
        background=''
        style={{ height: '50px', width: '50px' }}
      />
      <Player
        src={require('../image/110115-add-to-cart.json')}
        className="player"
        loop
        autoplay
        speed={1}
        background=''
        style={{ height: '50px', width: '50px' }}
      />
       <Player
        src={require('../image/125886-login-bounce.json')}
        className="player"
        loop
        autoplay
        speed={1}
        background=''
        style={{ height: '40px', width: '40px' }}
      />
                    </Col>
                </Row>
                    <Col className='bg-color-lightblue'>
                     {['md'].map((expand) => (
                                <Navbar key={expand}  expand={expand} className="">
                                <Container fluid>
                                    <Navbar.Brand href="/" className=''>
                                    <div>
                                    <img
                                        src={require('../image/AC-banner-HP-web.jpg')}
                                        width="30"
                                        height="30"
                                        className="d-inline-block align-top"
                                        alt="React Bootstrap logo"
                                        />
                                        Navbar Offcanvas
                                        </div>
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
                                        <Nav.Link href="/">Home</Nav.Link>
                                        <Nav.Link href="/link">Link</Nav.Link>
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
                                       {/*  <Form.Control
                                            type="search"
                                            placeholder="Search"
                                            className="me-2"
                                            aria-label="Search"
                                        /> */}
                                       {/*  <Button variant="outline-success">Account</Button> */}
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
            <Route  path="/link" element={<DemoBoot />}/>
        </Routes>
        <Container fluid className=''>
            <Container>
                
                <Row  className='bg-success subscribe m-3'>
                    <Col lg={6}>
                    <div className='p-4 text-light'>
                        <h3>Subscribe Now</h3>
                        <p>Subscribe to receive inspiration, product updates and special offers</p>
                    </div>
                    </Col>
                    <Col lg={6}>
                    <div className=' d-flex bg-color-light align-items-center '>
                            <input className='m-0 border-0  w-100 form-control rounded-0  '  placeholder="email..."/> 
                            <Button className='m-0 border-0  w-25 form-control rounded-0  '>Subscribe</Button>
                        </div>
                    </Col>
                </Row>
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