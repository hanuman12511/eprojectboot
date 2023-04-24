import {useState}from 'react'
import { Container ,Row,Col} from 'react-bootstrap';
import { useLocation ,useNavigate} from 'react-router-dom'
import {Rating} from 'react-simple-star-rating'
export default function ProductDetails(){
    const location = useLocation()
    const[product ,setProduct] = useState(location.state.product)
    console.log(product);
    const [rating, setRating] = useState(4.5) // initial rating value

    // Catch Rating value
    const handleRating = (rate) => {
      setRating(rate)
      // Some logic
    }
    return(
        <>
        <Container>
            <Row>
                <Col>Producy</Col>
            </Row>
            <Row>
                <Col lg={8}>
                    <img src={product.image}  className='proimage'/>
                </Col>
                <Col lg={4}>
                    <div className='p-2'>
                    <p>{product.name}</p>
                    <hr/>
                    <div className=''>
                        <div className='d-flex'>
                        <Rating
                            onClick={handleRating}
                            ratingValue={rating}
                            size={20}
                            label
                            transition
                            fillColor='orange'
                            emptyColor='gray'
                            className='foo' // Will remove the inline style if applied
                        />
                       
                       <p className='mx-3'> { '  '}{rating}</p>
                       <p className='mx-2'> (34 sold)</p>
                       </div>
                       <p className='ml-2'> <b>37 People </b>are Viewing this Product Right Now</p>
                        </div>
                        <div className='d-flex'>
                        <p>MRP</p><p className='mx-5'><del>Rs.29999</del></p>
                          </div>
                          <div>
                          <p>Offer price <></>₹26,427 [Retail Discount ₹2,572]</p>  
                          </div>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}