import { useEffect } from "react";
import { Container, Row, Col, Card,Image} from "react-bootstrap";
import { connect } from "react-redux";
import { addToFeed, setSearch } from '../app/redux/actions/actions';
import FooterRightSide from "./FooterRightSide";
import RightSideBar from "./RightSideBar";
import AddPost from "./AddPost";
import Loader from './Loader';
import LeftSideBar from "./LeftSideBar";
import LeftDownSideBar from "./LeftDownSideBar";
import NewsFeed from "./NewsFeed";
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from 'react-bootstrap/Spinner';
import { getPostsWithThunk } from "../app/redux/actions/actions";
import { getMorePostsWithThunk } from "../app/redux/actions/actions";
const mapStateToProps = state => {
    return {
    loadState: state.logic.loading,
    postList: state.logic.posts,
    feed: state.logic.feed
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      setQuery: query => {
        dispatch(setSearch(query));
      },
      getAllPosts: people => {
        dispatch(getPostsWithThunk());
      },
      getMorePosts: (posts,n) => {
        dispatch(getPostsWithThunk(posts,n));
      },
      addToFeed: posts => {
        dispatch(addToFeed(posts));
      }
      
    };  
  };
const Home = (props)=>{  
  let indexA = 0;
  let indexB = 1;
  useEffect(()=>{
    props.getAllPosts()
  },[]) 
/*     useEffect(()=>{
        console.log(props.loadState)
    },[props.loadState])  */

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
        dataLength={props.feed.length} 
        next={()=>{
          if(props.postlist){
           (props.addToFeed(props.postList.slice(indexA,indexB)))
           indexA =indexA+2
           indexB =indexB+2
          }
        }}
        hasMore={true}
        loader={<div className="d-flex justify-content-center overflow-hidden">
          <h4>Loading...</h4>
        </div>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Congrats! You've linked all the way in!</b>
          </p>
        }

      >
          {<div>
            {props.postList.map((post, index)=><NewsFeed key={index} createdAt={post.createdAt} username={post.username} text={post.text}  />)}
            </div>}   
      </InfiniteScroll>
     
    </Col>
    <Col md={3}>
      <RightSideBar />
      <Card className="mt-3 pl-2 pr-2" style={{ width: '18rem', borderRadius: "12px", height: "220px"}}>
             <Image src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
              fluid/>                 
      </Card>
      <FooterRightSide />
    </Col>
  </Row>
</Container>
</div>

</>
)
}
export default connect(mapStateToProps, mapDispatchToProps)( Home)