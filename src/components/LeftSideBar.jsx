import { Container, Col, Image, Row, Card } from "react-bootstrap";
import "../css/LeftSideBar.css"

const LeftSideBar = () => {
 return (
      <Container id="headerMiniContainer">

     <Card className="mt-4"style={{ width: '15rem', borderRadius: "12px" }}>
      <Col className="d-flex flex-column justify-content-center">
        <Image 
          src="https://media.istockphoto.com/videos/defocused-seamless-loop-background-video-id1016831586?s=640x640"
          id="backgroundImage" fluid/>
        <Row className="d-flex flex-column align-items-center borderBottom ">
        <Image src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=" 
                  roundedCircle  id="userImage"/>
          <div className="mb-3 mt-n3 text-center">
            <div
              className="font-weight-bold mt-5"
              id="userName" >
              profile name and surname
            </div>
            <div className="text-muted fontSize mt-1" style={{fontSize: "14px"}}>profile</div>
          </div>
        </Row>
        <hr style={{color: "black", width: "200px"}}/>
        <Row className="borderBottom fontSize headerMiniTag">
          <div className="pl-3" style={{ fontSize: "14px" }}>
            <div className="d-flex justify-content-between">
              <div className="text-muted mr-5">Connections</div>
              <div className="font-weight-bold pl-4"
                style={{ color: "blue", marginRight: "20px"}}>500 +
              </div>
            </div>
          </div>
        <hr style={{color: "black", width: "200px"}}/>
        </Row>
        <Row className="borderBottom fontSize headerMiniTag">
          <div className=" my-2" style={{ fontSize: "14px" }}>
            <div className="text-muted items pl-3"> Access exclusive tools & insights</div>
            <div className="d-flex flex-row">
              <div>
                <i className="bi bi-square-half pl-3" style={{ color: "gold" }}></i>
              </div>
              <div className="font-weight-bold txtBlue px-2" style={{textDecoration: "underline"}}>
                Try Premium for free
              </div>
            </div>
          </div>
        </Row>
        <hr style={{color: "black", width: "200px"}}/>
        <Row className="fontSize headerMiniTag">
          <div
            className="d-flex flex-row pl-3 mb-3"
            style={{ fontSize: "15px" }}>
            <div>
              <i className="bi bi-bookmark-fill mr-2"></i>
            </div>
            <div className="font-weight-bold px-2">My items</div>
          </div>
        </Row>
      </Col>
      </Card>
    </Container>
 )
}
export default LeftSideBar