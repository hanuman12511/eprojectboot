import { Col, Container, Row } from "react-bootstrap";

export default function DemoBoot(){
    return(

        <>
        <h1>Demoboot</h1>
        <Container>
            <Row>
                <Col sm={8} md={8} lg={8} className=" bg-primary">
                    <h5>col-1</h5>
                </Col>
                <Col sm={4} md={4}lg={4} className=" bg-danger">
                    <h5>col-2</h5>
                </Col>
                <Col sm={4} md={4}lg={4} className="">
                    <h1>col-2</h1>
                </Col>
            </Row>
        </Container>
        </>
    )
}