import { Card,Image, Row, Col, Button, Modal, ModalBody} from "react-bootstrap"
import { useEffect, useState } from "react";
import { upload, uploadPicWithThunk } from "../app/redux/actions/actions";
import { connect } from "react-redux";

const mapStateToProps = state => {
      return {
      uploaded: state.logic.upload,
      currentUser: state.user.activeUser,
      };
    };
    
    const mapDispatchToProps = dispatch => {
      return {
        uploadToState: file => {
          dispatch(upload(file));
        },
        uploadToSite: (file,id) =>{
          dispatch(uploadPicWithThunk(file,id))
        }
        
      };  
    };

const HeaderProfile = (props) => {      
     

      const uploadImage = ()=>{
            const formData = new FormData();
            formData.append("profile", props.uploaded)
            props.uploadToSite(formData,props.currentUser._id);
        }
     
      const [show, setShow] = useState(false);
      const [show2, setShow2] = useState(false);
      const [show3, setShow3] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      const handleClose2 = () => setShow2(false);
      const handleShow2 = () => setShow2(true);


      const handleClose3 = () => setShow3(false);
      const handleShow3 = () => setShow3(true);

       

return (
      <Card className="mt-4"style={{ width: '46rem', borderRadius: "12px", height: "540px"}}>
                  <Image 
                  src="https://media.istockphoto.com/videos/defocused-seamless-loop-background-video-id1016831586?s=640x640"
                  style={{backgroundSize: "cover", height: "200px",  borderRadius: "10px 10px 0 0"}} fluid/>
                   <Image className="ml-5"
                   src={props.user.image} roundedCircle 
                   style={{ height: "150px", width: "150px", marginTop: "-100px", border: "5px solid white"}}
                   onClick={handleShow3}
                   />


                         <Modal size="lg" show={show3} onHide={handleClose3} className="modal-image">
                              <Modal.Header closeButton  style={{backgroundColor: "#1d2226"}}>
                              <Modal.Title className="font-weight-bold" style={{fontSize: "20px", color: "white"}}>Profile photo</Modal.Title>
                              </Modal.Header>
                              <Modal.Body style={{backgroundColor: "#1d2226"}}>
                              <Row className="justify-content-md-center">
                                    
                              <Image className=""
                              src={props.user.image} roundedCircle 
                              style={{ height: "300px", width: "300px"}}/>
                          
                              </Row>
                              <Row className="mt-4 ml-2">
                               <Button
                              variant="outline-light"
                              style={{ borderRadius: "30px", fontWeight: "bold"}}>
                              <i className="bi bi-eye-fill"></i><span className="ml-2">Anyone</span>
                              </Button>
                              </Row>
                              </Modal.Body>
                              <Modal.Footer style={{backgroundColor: "#1d2226"}}>
                              <Row className="mt-2 pl-2">

                              {/* <Button variant="outline-light ml-3">
                               <i className="bi bi-pencil mr-2" ></i>
                               <span>Edit</span>
                              </Button> */}
                              <span className="ml-2">
                              <label className="text-white mt-2" htmlFor="picUploadBtn"><i className="bi bi-pencil mr-2" ></i>
                              <span id="userName">Edit</span></label>
                              <input type="file" className="d-none"  id="picUploadBtn" onChange={(e)=>{
                              props.uploadToState(e.target.files[e.target.files.length-1],);}}>
                              </input>
                              </span>

                              <Button onClick={()=>{uploadImage(); handleClose3()}} variant="outline-light ml-3">
                               <i className="bi bi-camera-fill mr-2"></i>
                               <span>Add photo</span>
                               </Button> 
                           
                               {/* <Button variant="outline-light ml-3">
                               <i className="bi bi-image-fill mr-2" ></i>
                               <span>Frames</span>
                               </Button> */}
                           
                               {/* <Button variant="outline-light" style={{marginLeft: "320px"}}>
                               <i className="bi bi-trash3-fill mr-2"></i>
                                     Delete</Button> */}
                               </Row>
                              </Modal.Footer>
                        </Modal>

                   

















                   <Row>
                         <Col md={8}>
                         <div className="ml-4 pl-3 font-weight-bold" style={{fontSize: "27px"}}>{props.user.name} {props.user.surname}
                         <span className="font-weight-light ml-2" style={{fontSize: "15px"}}>(he/him)</span>
                         </div>
                         </Col>
                         <Col md={4}>
                          <div className="mt-3">
                          <Image 
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP3OEVxWnMEGekDEUZA-ScFV4xT6AiDvx12JFU1fL7nA&s"
                              style={{ width: "30px"}} 
                              />
                             <span className="ml-2 font-weight-bold">Epicode Global</span>
                          </div>     
                         </Col>
                   </Row>
                   <Row>
                         <div className="ml-5 pl-2">{props.user.title}</div>
                   </Row>
                   <Row>
                         
                         <div className="ml-5 pl-2 font-weight-lighter" style={{fontSize: "15px"}}>{props.user.area}</div>
                         <div className="ml-2" onClick={handleShow}>
                              <span className="" style={{fontSize: "15px", textDecoration: "underline", color: "#0b65c2"}}>Contact info</span>
                        </div>
                         <Modal show={show} onHide={handleClose} className="modal-image">
                              <Modal.Header closeButton>
                              <Modal.Title style={{fontSize: "20px"}}>{props.user.name} {props.user.surname}</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                    <div className="mb-3" style={{fontSize: "20px"}}>Contact Info</div>
                              <Row className="ml-1">
                                    <i className="bi bi-linkedin" style={{fontSize: "20px"}}></i>
                                    <span className="ml-4 mt-1 font-weight-bold">Your profile</span>
                              </Row>
                                    <div className="font-weight-bold ml-5" style={{color: "#0b65c2", fontSize: "14px"}}>linkedin.com/in/{props.user._id}</div>
                              <Row className="ml-1 mt-3">
                                    <i className="bi bi-envelope" style={{fontSize: "20px"}}></i>
                                    <span className="ml-4 mt-1 font-weight-bold">Email</span>
                              </Row>
                                    <div className="font-weight-bold ml-5" style={{color: "#0b65c2", fontSize: "14px"}}>{props.user.email}</div>
                              </Modal.Body>
                              <Modal.Footer>
                              <Button variant="secondary" onClick={handleClose}>
                              Close
                              </Button>
                              </Modal.Footer>
                        </Modal>

                   </Row>
                   <Row>
                        <div className="font-weight-bold ml-5 pl-2"
                        style={{ color: "#0b65c2", marginRight: "20px"}}>500+ connections
                        </div>
                   </Row>
                   <Row>
                   <Button className="ml-5 mt-3" style={{borderRadius: "30px", fontWeight: "bold", backgroundColor: "#0b65c2" }}>
                      Open to
                   </Button>
                   <Button  onClick={handleShow2}
                   className="ml-3 mt-3"  style={{borderRadius: "30px", fontWeight: "bold", border: "1px solid #0b65c2", backgroundColor: "white", color:"#0b65c2"}}>
                        Add profile
                   </Button>

                        <Modal show={show2} onHide={handleClose2} className="modal-image">
                                    <Modal.Header closeButton>
                                    <Modal.Title style={{fontSize: "20px"}}>Add to profile</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                          <div className="mb-3" style={{fontSize: "18px"}}>Core</div>
                                          <span className="mt-1" style={{fontSize: "14px"}}>
                                                Start with the basics. Filling out these sections will help you be discovered by recruiters and people you may know
                                          </span>
                                          <span className="mt-1" style={{fontSize: "16px"}}>
                                                Add education
                                          </span>
                                    <hr className="" style={{width: "100%"}}/>
                                          <span className="mt-1" style={{fontSize: "16px"}}>
                                                Add position
                                          </span>
                                    <hr className="" style={{width: "100%"}}/>
                                          <span className="mt-1" style={{fontSize: "16px"}}>
                                                Add career break
                                          </span>
                                    <hr className="" style={{width: "100%"}}/>
                                          <span className="mt-1" style={{fontSize: "16px"}}>
                                                Add skills
                                          </span>
                                    <hr className="w-100 mx-0 p-0"/>
                      
                                    <div className="mb-3" style={{fontSize: "18px"}}>Recomemended</div>
                                 
                                    <hr className="w-100 mx-0"/>
                                    <div className="mb-3" style={{fontSize: "18px"}}>Additional</div>
                                    </Modal.Body>
                         
                        </Modal>


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
export default connect(mapStateToProps, mapDispatchToProps)(HeaderProfile)