import { Image, Button, Card, Form, FormControl} from "react-bootstrap";


const AddPost = () => {
return (
     
       <Card className="mt-4"style={{ width: '40rem', borderRadius: "12px" }}>
            <div className="d-flex ml-3">
            <Image src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=" 
                  roundedCircle style={{width: "80px"}}/>  
             <Form className="mt-3">
              <FormControl
                type="text"
                placeholder="Start a post"
                className="pl-4"
                style={{ backgroundColor: "white",
                  border: "1px solid grey",
                  borderRadius: "30px",
                  height: "50px",
                  width: "520px",
                }}
              />
            </Form> 
            </div>
      <div className="d-flex justify-content-between mb-3 ml-4">
        <Button className="d-flex align-items-center font-weight-bolder" style={{color: "grey"}} variant="white">
          <i style={{ color: "#0b65c2" }} className="bi bi-image mr-2"></i> Photo
        </Button>
        <Button className="d-flex align-items-center font-weight-bolder" style={{color: "grey"}} variant="white">
          <i style={{ color: "#7fc15e" }} className="bi bi-play-btn-fill mr-2"></i>
          Video
        </Button>
        <Button className="d-flex align-items-center font-weight-bolder" style={{color: "grey"}} variant="white">
          <i style={{ color: "#e7a33e" }} className="bi bi-calendar2-date mr-2"></i>
          Event
        </Button>
        <Button className="d-flex align-items-center mr-3 font-weight-bolder" style={{color: "grey"}}  variant="white">
          <i style={{ color: "#fc9295" }} className="bi bi-newspaper mr-2"></i> Write
          Article
        </Button>
      </div>
      </Card>
   
)


}
export default AddPost