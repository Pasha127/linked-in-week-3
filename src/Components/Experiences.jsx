import { Card } from "react-bootstrap"
import { useState } from "react";
import { useEffect } from "react";

const Experiences = (props) => {
      const [state, setState] = useState({
         loading: false,
         experiences: []
      })
   
   
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
      <Card className="mt-4"style={{ width: '46rem', borderRadius: "12px", height: "540px"}}>
            {props.canEdit && 
                  <div>EDIT</div>
            }
            {state.experiences.map((experience, index) => {
                  return <div key={index}>{experience.description}</div>
            })}
      </Card>
)

}
export default Experiences