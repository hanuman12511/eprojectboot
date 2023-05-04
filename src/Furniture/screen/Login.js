import { Container,Row,Col,Form,Button } from "react-bootstrap";
import { useState,useEffect } from "react";
import {useNavigate} from 'react-router-dom'
export default function Login(){
    const nav = useNavigate();
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const [user,setUser]= useState(null);
    useEffect(()=>{
        function show(){
            console.log("show useeffect login");
            setUser(localStorage.getItem('user'))
        }
        show()
    },[user])

    function loginuser(){

        alert("login")
        if(email==="hanu@gmail.com"){
            localStorage.setItem('user',email);
            setUser(localStorage.getItem('user'))
            window.location.reload();
            nav("/")
        
        }
        else{
           // localStorage.setItem('user','');
        
        }
    }
console.log("login");
    console.log(user);
    return(
        <>
    <Container>
<Row>
    <Col>
    <div style={{marginTop:200}}>
    <h1>Login</h1>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  value ={email} onChange={d=>setEmail(d.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" onClick={loginuser} >
        Login
      </Button>
    </Form>
        </div>

    </Col>
</Row>
    
</Container>
        </>
    )
}