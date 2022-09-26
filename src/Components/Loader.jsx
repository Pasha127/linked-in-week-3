import { Spinner } from 'react-bootstrap'

const Loader = ()=>{
    return(
      <div className='spinnerContainer'>

        <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
      </div>
      
    )
    }
    export default Loader