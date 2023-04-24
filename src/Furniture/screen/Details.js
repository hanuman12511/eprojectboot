import {useState}from 'react'
import { Card, Col, Container, Row ,Button} from 'react-bootstrap';
import { useLocation ,useNavigate} from 'react-router-dom'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {furniure } from '../data/data';
export default function Details (){
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

    const navigate =useNavigate();
    const location = useLocation()
const[product ,setProduct] = useState(location.state.item)
console.log(product);

function detailsShow(){
    alert('Details')
    navigate('details',{state:{item:'item product'}})
  }
    return(
        <>
        <Container>
            <Row>
                <Col>
                <h3 className='m-5'>Browse by Room type</h3>
                <Row xs={3} md={3} className="g-4 mt-5 text-center">
                    {Array.from({ length: 5 }).map((_, idx) => (
                        <Col>
                        <Card onClick={detailsShow} className='cursor-pointer'>
                            <Card.Img variant="top" src={require('../image/AC-banner-HP-web.jpg')} className='p-1' />
                            <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                            Card title
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                    ))}
                    <Col>
                        <Card onClick={detailsShow} className='cursor-pointer mt-auto'>
                              <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                            Get More..
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                 </Row>
                </Col>
            </Row>

            <Row>
                <Col>
               <h3 className='m-5'>Browse by Furniture type</h3>
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
        </>
    )
}