import {useState}from 'react'
import { Container ,Row,Col} from 'react-bootstrap';
import { useLocation ,useNavigate} from 'react-router-dom'
export default function ProductDetails(){
    const location = useLocation()
    const[product ,setProduct] = useState(location.state.product)
    console.log(product);
    return(
        <>
        <Container>
            <Row>
                <Col lg={8}>
                    <h1>col8</h1>
                </Col>
                <Col lg={4}>
                    
                <h1>col4</h1>
                </Col>
            </Row>
        </Container>
        </>
    )
}