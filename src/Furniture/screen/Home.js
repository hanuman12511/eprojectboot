
import {Container, Row ,Col, Card,Carousel as Carousel1 ,Button} from 'react-bootstrap';
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
import {furniure } from '../data/data';
import {useNavigate} from 'react-router-dom'
import { useEffect,useState } from 'react';
function  Home() {
    const navigate =useNavigate();

const [user,setUser] = useState(null)
    useEffect(()=>{

      function show(){
        setUser(localStorage.getItem('user'))
      }
    },[user])
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


      function detailsShow(){
       
        navigate('details',{state:{item:'item product'}})
      }
    return (
        <>
       <Container fluid className=''>
            <Container className=''>
                <Row className='mt-20'>
                    <Col  className='mt-60'>
                    <Carousel1>
                        <Carousel1.Item interval={1000}>
                            <img
                            className="d-block w-100"
                            src={require('../image/AC-banner-HP-web.jpg')}
                            alt="First slide"
                            />
                            <Carousel1.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel1.Caption>
                        </Carousel1.Item>
                        <Carousel1.Item interval={500}>
                            <img
                            className="d-block w-100"
                            src={require('../image/Fitness-offer-banner-for-Web--2.jpg')}
                            alt="Second slide"
                            />
                            <Carousel1.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel1.Caption>
                        </Carousel1.Item>
                        <Carousel1.Item>
                            <img
                            className="d-block w-100"
                            src={require('../image/Paytm-Payments-Bank-web-.jpg')}
                            alt="Third slide"
                            />
                            <Carousel1.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                            </Carousel1.Caption>
                        </Carousel1.Item>
                        </Carousel1>
                    </Col>
                </Row>
                <Row xs={3} md={5} className="g-4 mt-5 text-center">
                    {Array.from({ length: 5 }).map((_, idx) => (
                        <Col>
                        <Card onClick={detailsShow} className='cursor-pointer'>
                            <Card.Img variant="top" src={require('../image/AC-banner-HP-web.jpg')} className='p-3' />
                            <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                            Card title
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                    ))}
                 </Row>
                 <Row className='mt-5'>
                    <Col>
                    <h3> You'll love to take these home</h3>
                    <Carousel responsive={responsive}
                        autoPlaySpeed={500}
                        infinite={true}
                        transitionDuration={500}
                        autoPlay={true}
                        >
                        { furniure.map(function(d){
                            return(
                                
                                  <Card style={{  }} className='g-4 m-2 cursor-pointer' onClick={()=>{navigate('../productdetails',{state:{product:d}})}}>
                                  <Card.Img variant="top" src={d.image} />
                                  <Card.Body>
                                    <Card.Title>{d.name}</Card.Title>
                                    <Card.Text>
                                      
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                  </Card.Body>
                                </Card>
                                )
                                })
                        }
                           
                    </Carousel>
                  </Col>
                 </Row>
            </Container>
         </Container>
        </>
    );
}

export default Home;