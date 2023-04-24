import {useState}from 'react'
import { useLocation ,useNavigate} from 'react-router-dom'
export default function ProductDetails(){
    const location = useLocation()
    const[product ,setProduct] = useState(location.state.product)
    console.log(product);
    return(
        <>
        <h1>Productdetails</h1>
        </>
    )
}