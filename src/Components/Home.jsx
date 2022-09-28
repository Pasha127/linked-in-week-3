import { useEffect } from "react";
import { Container, Row, Col} from "react-bootstrap";
import { connect } from "react-redux";
import { setSearch } from '../app/redux/actions/actions';
import FooterRightSide from "./FooterRightSide";
import RightSideBar from "./RightSideBar";
import AddPost from "./AddPost";
import Loader from './Loader';
import LeftSideBar from "./LeftSideBar";
import LeftDownSideBar from "./LeftDownSideBar";
import NewsFeed from "./NewsFeed";
import InfiniteScroll from 'react-infinite-scroller';
import Spinner from 'react-bootstrap/Spinner';
import { getPostsWithThunk } from "../app/redux/actions/actions";
const mapStateToProps = state => {
    return {
    loadState: state.logic.loading,
    postList: state.logic.posts
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      setQuery: query => {
        dispatch(setSearch(query));
      },
      getPosts: people => {
        dispatch(getPostsWithThunk());
      }
      
    };  
  };
const Home = (props)=>{
  useEffect(()=>{
    props.getPosts()
  },[]) 
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
     <InfiniteScroll
    pageStart={0}
    threshold={2}
    loadMore={<></>}
    hasMore={true || false}
    loader={<div className="loader" key={0}>Loading ...</div>}
>
    {props.postList.map((post)=><NewsFeed key={post._id} createdAt={post.createdAt} username={post.username} text={post.text}  />)} 
</InfiniteScroll>
     
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