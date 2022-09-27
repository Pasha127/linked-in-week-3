/* import { Container, Row, Col, Form,Button } from 'react-bootstrap' */
import { useEffect } from "react";
import { Container, Row, Col} from "react-bootstrap";
import { connect } from "react-redux";
/* import { Link } from 'react-router-dom'; */
import { setSearch } from '../app/redux/actions/actions';
import FooterRightSide from "./FooterRightSide";
import RightSideBar from "./RightSideBar";
import AddPost from "./AddPost";
import Loader from './Loader';
import LeftSideBar from "./LeftSideBar";
import LeftDownSideBar from "./LeftDownSideBar";
import NewsFeed from "./NewsFeed";

const mapStateToProps = state => {
    return {
    loadState: state.logic.loading
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      setQuery: query => {
        dispatch(setSearch(query));
      },

      
    };  
  };
const Home = (props)=>{
    useEffect(()=>{
        console.log(props.loadState)
    },[props.loadState]) 

return(
<>
{console.log("loading:",props.loadState)}
<div className="container">
{props.loadState && <Loader/>}
<Container>
  <Row>
    <Col xs={12} md={4} lg={3}>
      <LeftSideBar/>
      <LeftDownSideBar/>
    </Col>
    <Col xs={12} md={6} lg={6} style={{ height: "100%" }}>
     <div className="border-bottom pb-3">
     <AddPost />
     </div>
     <NewsFeed/>
    </Col>
    <Col md={3}>
      <RightSideBar />
      <FooterRightSide />
    </Col>
  </Row>
</Container>
</div>

</>
)
}
export default connect(mapStateToProps, mapDispatchToProps)( Home)