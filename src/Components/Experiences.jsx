import { Card, Row, Col, Image, Button, Modal, Form,} from "react-bootstrap"
import { useState } from "react";
import { useEffect } from "react";

const Experiences = (props) => {

      const [state, setState] = useState({
         loading: false,
         experiences: []
      })

      const [show, setShow] = useState(false);
    

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
   
   
      useEffect(() => {
         fetchExperiences(props.userId)
      }, [])
   

      useEffect(() => {
            console.log("State: ", state)
      })    
         
         
      const fetchExperiences = async (id) => {
         const options = {
            method: 'GET',
            headers: {
               Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzMxOGRiNDc2NTM5YzAwMTViNWNkNmEiLCJpYXQiOjE2NjQxOTE5MjQsImV4cCI6MTY2NTQwMTUyNH0.L96ybdKZjUiPLG95huiiaqlmfE5bLIunxqmgGUnOYBY'
   
            }
         };
   
         const baseEndpoint = `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`
         console.log("1 fetch user")
         setState({
            experiences: [],
            loading: true
         })
         const response = await fetch(baseEndpoint, options);
         if (response.ok) {
            const data = await response.json()
            setState({
               loading: false,
               experiences: data
            })
            console.log("data: ", data);
         } else {
            alert('Error fetching results')
            setState({
               loading: false,
               experiences: []
            })
         }
      }
       

return (
      <Card className="mt-2 pb-3 mb-4"style={{ width: '46rem', borderRadius: "12px", minHeight: "120px"}}>
          <Row>
                        <Col md={11} className="mr-0">
                            <div className="mt-4 ml-5 font-weight-bold" style={{fontSize: "20px"}}>Experiences</div>
                        </Col>
                        <Col md={1} className="mt-2 pl-0">
                            <Button variant="light" style={{borderRadius: "50px"}}
                            onClick={handleShow}
                            >+</Button>
                        </Col>

                        <Modal show={show} onHide={handleClose}>
                           <Modal.Header >
                           <Modal.Title>Add experinces</Modal.Title>
                           </Modal.Header>
                           <Modal.Body>
                           <Form className="w-75">
                              <Row className="ml-3" >
                              <p style={{fontSize: "14px"}}>Title</p>
                              </Row>
                              <Row className="ml-3 pt-0" style={{marginTop: "-17px"}}>
                              <Form.Control 
                                 style={{height: "30px"}}
                                 type="search"
                                 onChange=""
                                 placeholder=""
                              />
                              </Row>
                              <Row className="ml-3 mt-3" >
                              <p style={{fontSize: "14px"}}>Employment type</p>
                              </Row>
                              <Row className="ml-3 pt-0" style={{marginTop: "-17px"}}>
                              <Form.Control 
                                 style={{height: "30px"}}
                                 type="search"
                                 onChange=""
                                 placeholder=""
                              />
                              </Row>
                              <Row className="ml-3 mt-3" >
                              <p style={{fontSize: "14px"}}>Company name</p>
                              </Row>
                              <Row className="ml-3 pt-0" style={{marginTop: "-17px"}}>
                              <Form.Control 
                                 style={{height: "30px"}}
                                 type="search"
                                 onChange=""
                                 placeholder=""
                              />
                              </Row>
                              <Row className="ml-3 mt-3" >
                              <p style={{fontSize: "14px"}}>Location</p>
                              </Row>
                              <Row className="ml-3 pt-0 mb-3" style={{marginTop: "-17px"}}>
                              <Form.Control 
                                 style={{height: "30px"}}
                                 type="search"
                                 onChange=""
                                 placeholder=""
                              />
                              </Row>
                              </Form>
                            </Modal.Body>
                             <Modal.Footer>
                                  <Button variant="primary" style={{borderRadius: "30px", fontWeight: "bold", backgroundColor: "#0b65c2" }} >Save</Button>
                              </Modal.Footer>
                          
                          
                        </Modal>



          </Row>
            {props.canEdit && 
                  <div className="ml-5"> no experiences yet
                  </div>
            }
            {state.experiences.map((experience, index) => {
                  return <div key={index}>
            <Row className="mt-3">
                  <Col md={1} >
                     <Image className="ml-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP3OEVxWnMEGekDEUZA-ScFV4xT6AiDvx12JFU1fL7nA&s"
                              style={{ width: "50px"}} />
                     
                  </Col>
                  <Col md={11}>
                     <div className="ml-4">{experience.company}</div>
                  </Col>


            </Row>
            </div>
            })}
      </Card>
)

}
export default Experiences