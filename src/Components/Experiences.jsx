import { Card, Row, Col, Button, Modal, Form,} from "react-bootstrap"
import { useState } from "react";
import { useEffect } from "react";
import ExperiencesList from "./ExperiencesList";

const Experiences = (props) => {

      const [loading, setLoading] = useState(true)
      const [experiences, setExperiences] = useState([])
      const [newExperience, setNewExperiences] = useState({})


      const inputChange = (e) => {
         setNewExperiences({
            
                 ...newExperience,
                 [e.target.name]: e.target.value
             
         })
     }
      
      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
   
   
      useEffect(() => {
         fetchExperiences(props.userId)
      }, [])
      
      useEffect(() => {
         if(loading){fetchExperiences(props.userId)}
         
      }, [loading])

      // useEffect(() => {
      //       console.log("State: ", state)
      // })    
         
         
      const fetchExperiences = async (id) => {
         const options = {
            method: 'GET',
            headers: {
               Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzMxOGRiNDc2NTM5YzAwMTViNWNkNmEiLCJpYXQiOjE2NjQxOTE5MjQsImV4cCI6MTY2NTQwMTUyNH0.L96ybdKZjUiPLG95huiiaqlmfE5bLIunxqmgGUnOYBY'
   
            }
         };
   
         const baseEndpoint = `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`
         console.log("1 fetch user")
         const response = await fetch(baseEndpoint, options);
         if (response.ok) {
            const data = await response.json()
            setLoading(
               false
            )
            setExperiences(
               data
            )
            console.log("experiences:", data);
         } else {
            alert('Error fetching results')
            setLoading(
               false
            )
         }
      }

      const addExperiences = async (event) => {
         event.preventDefault()
         const options = {
            method: 'POST',
            body: JSON.stringify(newExperience),
            headers: new Headers({
               "Content-type": "application/json",
               Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzMxOGRiNDc2NTM5YzAwMTViNWNkNmEiLCJpYXQiOjE2NjQxOTE5MjQsImV4cCI6MTY2NTQwMTUyNH0.L96ybdKZjUiPLG95huiiaqlmfE5bLIunxqmgGUnOYBY'
            })
         };
         console.log("2 fetch exp:")
         const baseEndpoint = `https://striveschool-api.herokuapp.com/api/profile/${props.userId}/experiences`
         const response = await fetch(baseEndpoint, options);
         if (response.ok) {
            const data = await response.json()
            console.log("data exp:", data)
            setNewExperiences(
               {
                  area: "",
                  company: "",
                  role: "",
                  startDate: "",
                  endDate: "",
                  description: "",
              }
            )
              setLoading(true)
         } else {
            alert('Error fetching results add exp')
         }
      }


return (
      <Card className="mt-2 pb-3 mb-4"style={{ width: '46rem', borderRadius: "12px", minHeight: "120px"}}>
     
         <Row md={11} className="mr-0">
                            <div className="mt-4 ml-5 font-weight-bold" style={{fontSize: "20px"}}>Experiences</div>
         </Row>
         <Row>
                        <Col md={12} className="mt-2">
                            <Button variant="light" style={{borderRadius: "50px"}}
                            onClick={handleShow}
                            >+</Button>
                        </Col>

                        <Modal show={show} onHide={handleClose}>
                           <Modal.Header closeButton>
                           <Modal.Title>Add experinces</Modal.Title>
                           </Modal.Header>
                           <Modal.Body>
                           <Form className="w-75" 
                               onSubmit={(event) => addExperiences(event)}>
                              <Form.Label className="text-muted">Title</Form.Label>
                              <Form.Control 
                                 style={{height: "30px"}}
                                 name="role" 
                                 type="text"
                                 placeholder=""
                                 value={newExperience?.role} 
                                 onChange={(e) => {inputChange(e)}} 
                              />
                             
                              <Form.Label className="text-muted">Company</Form.Label>
                              <Form.Control 
                                 style={{height: "30px"}}
                                 name="company" 
                                 type="text"
                                 placeholder=""
                                 value={newExperience?.company} 
                                 onChange={(e) => { ; inputChange(e)}} 
                              />
                              <Form.Label className="text-muted">Area</Form.Label>
                              <Form.Control 
                                 style={{height: "30px"}}
                                 name="area" 
                                 type="text"
                                 placeholder=""
                                 value={newExperience?.area} 
                                 onChange={(e) => {  inputChange(e)}} 
                              />
                               <Form.Label className="text-muted">Des</Form.Label>
                              <Form.Control 
                                 style={{height: "30px"}}
                                 name="description" 
                                 type="text"
                                 placeholder=""
                                 value={newExperience?.description} 
                                 onChange={(e) => {  inputChange(e)}} 
                              />
                              <Form.Row>
                                    <Form.Group as={Col}>
                                       <Form.Label className="text-muted">Start Date</Form.Label>
                                       <Form.Control 
                                        name="startDate" 
                                        type="date" 
                                        value={newExperience?.startDate} 
                                        onChange={(e) => { inputChange(e)}} 
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                       <Form.Label className="text-muted">End Date</Form.Label>
                                       <Form.Control
                                       name="endDate" 
                                       type="date" 
                                       value={newExperience?.endDate ? newExperience?.endDate : ''} 
                                       onChange={(e) => { inputChange(e)}} 
                                       />
                                    </Form.Group>
                            </Form.Row>
                            <Button variant="primary" 
                                  type="submit" 
                                  style={{borderRadius: "30px", fontWeight: "bold", backgroundColor: "#0b65c2" }} >
                                  Add
                             </Button>
                           </Form>
                            </Modal.Body>
                             <Modal.Footer>
                                 <Button variant="secondary" type="submit" onClick={handleClose}>
                                 Close
                                 </Button>
                              </Modal.Footer>     
                        </Modal>



          </Row>
               
            {experiences&&
             experiences.map((experience, index) => {
                  return <Col key={index}>
                  <ExperiencesList experience={experience} fetchExperiences={fetchExperiences}/>
                  </Col>
            })}
      </Card>
)

}
export default Experiences