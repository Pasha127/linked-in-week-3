import { ListGroup, Col} from 'react-bootstrap'

const ExperiencesList = (props) => {

      return (
            <>
            <ListGroup id='ExperienceList'>
                <ListGroup.Item className='d-flex'>
                    <Col>
                        <h5 className='m-0'>{props.experience.company}</h5>
                        <ListGroup>
                            <ListGroup.Item id='experienceItem' className='px-0'>
                                <div className='d-flex justify-content-between'>
                                    <div className='d-block'>
                                        <h6 className='m-0'>{props.experience.role}</h6>
                                        <h6 className='m-0'>{props.experience.startDate}</h6>
                                        <h6 className='m-0'>{props.experience.endDate}</h6>
                                        <h6 className='m-0'>{props.experience.Area}</h6>    
                                    </div>
                                </div>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </ListGroup.Item>
                </ListGroup>
                </>
      )
}

export default ExperiencesList