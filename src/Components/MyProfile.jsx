import { Col, Container, Row, Card} from "react-bootstrap"
import { connect } from "react-redux";
import HeaderProfile from "./HeaderProfile"
import Experiences from "./Experiences";
import SuggestedMyProfile from "./SuggestedMyProfile";

const mapStateToProps = state => {
      return {
            loadState: state.logic.loading,
            currentUser: state.user.activeUser
      };
};
    
const MyProfile = (props) => {

return (

      <Container>
            <Row>
                  <Col md={8}>
                        <HeaderProfile user={props.currentUser}/>

                        <SuggestedMyProfile />
                        

                        <Experiences userId={props.currentUser._id} canEdit={true}/>

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
export default connect(mapStateToProps) (MyProfile)