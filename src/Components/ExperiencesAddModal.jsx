import { Col, Button, Modal, Form, } from "react-bootstrap"
import { useState } from "react";


const ExperiencesAddModal = (props) => {
   const [newExperience, setNewExperiences] = useState({})
   const [loading, setLoading] = useState(true)

   const inputChange = (e) => {
      setNewExperiences({

         ...newExperience,
         [e.target.name]: e.target.value

      })
   }

   const addExperiences = async (event) => {
      event.preventDefault()
      const options = {
         method: 'POST',
         body: JSON.stringify(newExperience),
         headers: new Headers({
            "Content-type": "application/json",
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzA3ODg0NDFlYjc2ZDAwMTUxNTAxZjgiLCJpYXQiOjE2NjY2NDE3MTMsImV4cCI6MTY2Nzg1MTMxM30.vxYdNt2LLznO0U7RmaS7_xKllgxqLcMKZcHjSJAR-ok'
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
      <Modal size="lg" show={props.show} onHide={props.handleClose}>
         <Modal.Header closeButton>
            <Modal.Title>Add experinces</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <Form className="w-100"
               onSubmit={(event) => addExperiences(event)}>
               <Form.Label className="" style={{ fontSize: "13px" }}>Title*</Form.Label>
               <Form.Control
                  style={{ height: "30px", marginTop: "-8px", fontSize: "14px" }}
                  className="mb-3"
                  name="role"
                  type="text"
                  placeholder="Ex: Retail Sales Manager"
                  value={newExperience?.role}
                  onChange={(e) => { inputChange(e) }}
               />

               <Form.Label className="" style={{ fontSize: "13px" }}>Company name*</Form.Label>
               <Form.Control
                  style={{ height: "30px", marginTop: "-8px", fontSize: "14px" }}
                  className="mb-3"
                  name="company"
                  type="text"
                  placeholder="Ex: Microsoft"
                  value={newExperience?.company}
                  onChange={(e) => { inputChange(e) }}
               />
               <Form.Label className="" style={{ fontSize: "13px" }}>Location</Form.Label>
               <Form.Control
                  style={{ height: "30px", marginTop: "-8px", fontSize: "14px" }}
                  className="mb-3"
                  name="area"
                  type="text"
                  placeholder="Ex: London, United Kingdom"
                  value={newExperience?.area}
                  onChange={(e) => { inputChange(e) }}
               />
               <Form.Row>
                  <Form.Group as={Col}>
                     <Form.Label className="" style={{ fontSize: "13px" }}>Start Date</Form.Label>
                     <Form.Control
                        style={{ height: "30px", marginTop: "-8px" }}
                        className="mb-3"
                        name="startDate"
                        type="date"
                        value={newExperience?.startDate}
                        onChange={(e) => { inputChange(e) }}
                     />
                  </Form.Group>
                  <Form.Group as={Col}>
                     <Form.Label className="" style={{ fontSize: "13px" }}>End Date</Form.Label>
                     <Form.Control
                        style={{ height: "30px", marginTop: "-8px" }}
                        className="mb-3"
                        name="endDate"
                        type="date"
                        value={newExperience?.endDate ? newExperience?.endDate : ''}
                        onChange={(e) => { inputChange(e) }}
                     />
                  </Form.Group>
               </Form.Row>

               <Form.Group >
                  <Form.Label className='text-mutted' style={{ fontSize: "13px" }}>Description</Form.Label>
                  <Form.Control
                     style={{ marginTop: "-8px", fontSize: "14px" }}
                     className="mb-3"
                     name="description"
                     as="textarea" rows={3}
                     value={newExperience?.description}
                     onChange={(e) => { inputChange(e) }}
                  />
               </Form.Group>
               <Button
                  variant="primary"
                  type="submit"
                  style={{ borderRadius: "30px", fontWeight: "bold", backgroundColor: "#0b65c2" }}>
                  Add
               </Button>
            </Form>
         </Modal.Body>
         <Modal.Footer>
            <Button variant="secondary" type="submit" onClick={props.handleClose}>
               Close
            </Button>
         </Modal.Footer>
      </Modal>
   )
}


export default ExperiencesAddModal