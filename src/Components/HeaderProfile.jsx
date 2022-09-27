import { Card,Image, Row, Col, Button} from "react-bootstrap"
import { handleFetchWithThunk } from "../app/redux/actions/actions";
import { useEffect } from "react";
import { connect } from "react-redux";


const mapStateToProps = state => {
      return {
      loadState: state.logic.loading,
      currentUser: state.user.activeUser
      };
    };
    
    const mapDispatchToProps = dispatch => {
      return {
        getFetch: person => {
          dispatch(handleFetchWithThunk(person));
        },
      };  
    };

const HeaderProfile = (props) => {
     
      useEffect(()=>{
            props.getFetch("me")
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[]) 

return (
      <Card className="mt-4"style={{ width: '46rem', borderRadius: "12px", height: "530px"}}>
                  <Image 
                  src="https://media.istockphoto.com/videos/defocused-seamless-loop-background-video-id1016831586?s=640x640"
                  style={{backgroundSize: "cover", height: "200px",  borderRadius: "10px 10px 0 0"}} fluid/>
                   <Image className="ml-5"
                   src={props.currentUser.image} roundedCircle 
                   style={{ height: "150px", width: "150px", marginTop: "-100px", border: "5px solid white"}}
                   />
                   <Row>
                         <Col md={8}>
                         <div className="ml-4 pl-3 font-weight-bold" style={{fontSize: "27px"}}>{props.currentUser.name} {props.currentUser.surname}
                         <span className="font-weight-light ml-2" style={{fontSize: "15px"}}>(he/him)</span>
                         </div>
                         </Col>
                         <Col md={4}>
                          <div className="mt-3">current company</div>     
                         </Col>
                   </Row>
                   <Row>
                         <div className="ml-5 pl-2">{props.currentUser.title}</div>
                   </Row>
                   <Row>
                         
                         <div className="ml-5 pl-2 font-weight-lighter" style={{fontSize: "15px"}}>{props.currentUser.area}</div>
                         <div className=" pl-2 font-weight-lighter" style={{fontSize: "15px"}}>Contact info</div>
                         {/* PUT MODAL BTN */}
                   </Row>
                   <Row>
                        <div className="font-weight-bold ml-5 pl-2"
                        style={{ color: "#0b65c2", marginRight: "20px"}}>500+ connections
                        </div>
                   </Row>
                   <Row>
                   <Button variant="primary" className="ml-5 mt-3" style={{borderRadius: "30px", fontWeight: "bold"}}>
                      Open to
                   </Button>
                   <Button variant="outline-primary" className="ml-3 mt-3"  style={{borderRadius: "30px", fontWeight: "bold"}}>
                        Add profile
                   </Button>
                   <Button variant="outline-secondary" className="ml-3 mt-3" style={{borderRadius: "30px", fontWeight: "bold"}}>
                        More
                   </Button>
                   </Row>
                   <Row>
                        <Col md={6}>
                        
                        <Card className="mt-3 ml-4"style={{ width: '20rem', borderRadius: "12px" }}>
                  
                        <span className="ml-3 mt-2 font-weight-bold" style={{fontSize: "13px"}}>Show recruiters you're open to work </span>
                        
                        <span className="ml-3" style={{fontSize: "12px"}}>Frontend Developer roles</span>
                        
                        <span className="ml-3 mb-2 font-weight-bold" style={{fontSize: "13px", color: "#0b65c2"}}>Get started</span>
                        
                        </Card>
                        </Col>
                        <Col md={6}>
                        <Card className="mt-3 "style={{ width: '20rem', borderRadius: "12px" }}>
                  
                        <span className="ml-3 mt-2 font-weight-bold" style={{fontSize: "13px"}}>Show recruiters you're open to work </span>
                        
                        <span className="ml-3" style={{fontSize: "12px"}}>Frontend Developer roles</span>
                        
                        <span className="ml-3 mb-2 font-weight-bold" style={{fontSize: "13px", color: "#0b65c2"}}>Get started</span>
                        
                        </Card>
                        </Col>
                  </Row>

      </Card>
)

}
export default connect(mapStateToProps, mapDispatchToProps) (HeaderProfile)