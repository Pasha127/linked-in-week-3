import { Card, Row, Col }from "react-bootstrap"
import PeopleAlsoViewedPeople from "./PeopleAlsoViewedPeople"
import { connect } from "react-redux";
import { getFriendsWithThunk } from "../app/redux/actions/actions";
import { useEffect } from "react";

const mapStateToProps = state => {
      return {
        loadState: state.logic.loading,
        currentUser: state.user.activeUser,
        friendList: state.user.friends
      };
    };
    const mapDispatchToProps = dispatch => {
      return {
        getFriends: people => {
          dispatch(getFriendsWithThunk());
        },
      };  
    };

const PeopleAlsoViewed = (props) => {

      useEffect(()=>{
            props.getFriends()
        },[]) 
      

      return (
            <Card className="mt-2"style={{ width: '22rem', borderRadius: "12px", height: "600px" }}>
                  <Row>
                        <div className="mt-3 ml-4 pl-3 font-weight-bold" style={{fontSize: "17px"}}>People also viewed</div>     
                 </Row>  
                  <div className="pl-2 mt-3">
                  {props.friendList&&
                  props.friendList.slice(6,11).map((friend, index) => 
                  <Col key={index}>
                        <PeopleAlsoViewedPeople friend={friend}/>
                  </Col>
                  )} 
                  </div>
                  <hr className="" style={{width: "100%"}}/>
                  <Col className="text-center">
                        <div className="font-weight-bold" style={{color: "#666666"}}>Show more
                        <span className="ml-1"><i class="bi bi-chevron-compact-down"></i></span>
                        </div>
                  </Col>
                     
            </Card>
      )
}
export default  connect(mapStateToProps, mapDispatchToProps)(PeopleAlsoViewed)