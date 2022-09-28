import { Image, Button, Card, Form, FormControl} from "react-bootstrap";


const NewsFeed = () => {
return (
     
       <Card className="mt-3"style={{ width: '33rem', borderRadius: "12px" }}>
            <div className="d-flex ml-3">
            <Image src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=" 
                  roundedCircle style={{width: "80px"}}/>  
             <div className="postHeader">
                <h6 className="mb-0 ">This is the Title</h6>
                <p className="text-secondary">Guy Smith</p>
              </div>            
            </div>
      <div className="mb-2">
        <Image src="http://placekitten.com/528/400"/>
      </div>
      <div className="interactionsContainer mb-2">
          <div> <i className="bi bi-hand-thumbs-up ml-4"></i></div>
      </div >
      <div className="d-flex justify-content-around mb-1 ml-4 border-top interactionButtons">
        <Button className="d-flex align-items-center font-weight-bolder" style={{color: "grey"}} variant="white">
        <i className="bi bi-hand-thumbs-up  mr-1"></i>Like
        </Button>
        
        <Button className="d-flex align-items-center mr-3 font-weight-bolder" style={{color: "grey"}}  variant="white">
        <i className="bi bi-chat-text mr-1"></i> Comment
        </Button>
      </div>
      </Card>
   
)


}
export default NewsFeed