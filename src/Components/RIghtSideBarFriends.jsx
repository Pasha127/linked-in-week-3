import { Button, Image } from "react-bootstrap"
import { Plus } from "react-bootstrap-icons"

const RightSideBarFriends = (props) => {

return (
               
                  <div className="d-flex">
                  <Image src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=" 
                  style={{width: "100px"}}
                  roundedCircle />
                    <div className="profile-details ml-2 mt-2">
                      <div className="text-left font-weight-bold">{props.friend.name}</div>
                      <div className="profile-title" style={{fontSize: "12px"}}>Epicode Student</div>
                      <div className="profile-message">
                        <Button
                          className="rounded-pill btn-sm d-flex align-items-center mt-1"
                          variant="outline-dark" style={{width: "100px"}}>
                          <Plus className="ml-2"style={{ fontSize: "20px"}}/>
                          Follow
                        </Button>
                      </div>
                    </div>
                  </div>
                

)

}
export default RightSideBarFriends