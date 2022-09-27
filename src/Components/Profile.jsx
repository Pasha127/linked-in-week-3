import { Col, Container, Row, Card} from "react-bootstrap"


const Profile = () => {

return (

      <Container>
            <Row>
                  <Col md={8}>
                        <Card className="mt-4"style={{ width: '46rem', borderRadius: "12px", height: "480px" }}>
                   
                        </Card>

                        <Card className="mt-3"style={{ width: '46rem', borderRadius: "12px", height: "350px" }}>
                        </Card>

                  </Col>

                  <Col md={4}>
                        <Card className="mt-4"style={{ width: '22rem', borderRadius: "12px", height: "120px" }}>

                        </Card>

                        <Card className="mt-3"style={{ width: '22rem', borderRadius: "12px", height: "230px" }}>
                              
                        </Card>

                        <Card className="mt-3"style={{ width: '22rem', borderRadius: "12px", height: "600px" }}>
                              
                        </Card>
                  </Col>
            </Row>
      </Container>

)
}
export default Profile 