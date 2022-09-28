import { Card, Row, Modal, Button} from "react-bootstrap"
import { useState } from "react";

const SuggestedMyProfile = () => {

      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      return (
            <Card className="mt-4"style={{ width: '46rem', borderRadius: "12px", height: "330px" }}>
                  <Row>
                        <div className="mt-4 ml-5 font-weight-bold" style={{fontSize: "20px"}}>Suggested for you</div>
                 </Row>      
                  <Row>
                       <i className="bi bi-eye-fill ml-5"></i>
                        <div className="ml-2 font-weight-light" style={{fontSize: "15px"}}>Private to you</div>
                  </Row>
                  <Row>
                        <div className="mt-3 ml-5 font-weight-bold" style={{fontSize: "16px"}}>Intermediate</div>
                        {/* line here */}
                 </Row>  
                 <Row>
                        <div className="mt-3 ml-5" style={{fontSize: "15px"}}>Complete 1 step to archive
                        <span className="ml-1" onClick={handleShow} style={{textDecoration: "underline", color: "#0b65c2"}}>All-star</span>
                        </div>
                        <Modal show={show} onHide={handleClose} className="modal-image">
                              <Modal.Header closeButton>
                              <Modal.Title>Contact Info</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                              <i className="bi bi-envelope"></i><span className="ml-2 font-weight-bold">Email</span>
                              <div className="font-weight-bold ml-4" style={{color: "#0b65c2"}}></div>
                              </Modal.Body>
                              <Modal.Footer>
                              <Button variant="secondary" onClick={handleClose}>
                              Close
                              </Button>
                              </Modal.Footer>
                        </Modal> 
                 </Row>  
                 <Row>
                  <Card className="mt-3 ml-5"style={{ width: '42rem', borderRadius: "8px", height: "140px" }}>
                        <Row>
                              <i className="bi bi-briefcase-fill ml-4" style={{fontSize: "40px"}}></i>
                              <span className="mt-3 ml-2 font-weight-bold">Where do you currently work?</span>
                              <i className="bi bi-x-lg"></i>
                        </Row> 
                        <Row>
                              <span className="ml-4" style={{fontSize: "15px"}}>Members who include at least one position receive up to 3.5 times as many profile views.</span>
                        </Row>
                        <Row>
                              <Button variant="outline-secondary" className="ml-4 mt-2" style={{borderRadius: "30px", fontWeight: "bold"}}>
                              Add position
                              </Button>
                        </Row>
                  </Card>
                 </Row>
            </Card>
      )
}
export default SuggestedMyProfile