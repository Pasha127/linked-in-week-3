import { Card, Container, Row, Col} from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import { InfoSquareFill } from "react-bootstrap-icons";
import { getFriendsWithThunk } from "../app/redux/actions/actions";
import { useEffect } from "react";
import { connect } from "react-redux";
import RightSideBarFriends from "./RIghtSideBarFriends";

const mapStateToProps = state => {
  return {
  loadState: state.logicRoot.logic.loading,
  currentUser: state.userRoot.user.activeUser,
  friendList: state.userRoot.user.friends
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getFriends: people => {
      dispatch(getFriendsWithThunk());
    },
  };  
};
const RightSideBar = (props) => {

  useEffect(()=>{
    props.getFriends()
},[]) 

  return (
    <>
    {console.log("so many friends!",props.friendList)}
      <Container>
        <Row>
        <Card className="mt-4"style={{ width: '19rem', borderRadius: "12px" }}>
            <div className="pt-3">
              <span className="pl-3 pb-3 text d-flex justify-content-between font-weight-bold">
                Add to your feed 
                <InfoSquareFill className="mr-3 p-1" style={{ fontSize: "22px", color: "gray" }} />
              </span>

              <div className="pl-2">
                {props.friendList.map((friend, index) => 
                <Col key={index}>
                  <RightSideBarFriends friend={friend}/>
                </Col>
                 )}
                <div className="reccomentations d-flex align-items-center mb-3 ml-2">
                  <span className="font-weight-bold " style={{color: "gray", fontSize: "14px"}}>
                    View all recommendations
                    <ArrowRight className="ml-2"
                      style={{ fontSize: "20px",}}
                    />
                  </span>
                </div>
              </div>
              
            </div>
         </Card>
        </Row>
      </Container>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(RightSideBar);