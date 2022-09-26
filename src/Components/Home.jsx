/* import { Container, Row, Col, Form,Button } from 'react-bootstrap' */
import { connect } from "react-redux";
/* import { Link } from 'react-router-dom'; */
import { setSearch } from '../app/redux/actions/actions';
import Loader from './Loader';


const mapStateToProps = state => {
    return {
    loading: state.logic.loading
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      setQuery: query => {
        dispatch(setSearch(query));
      },

      
    };  
  };
const Home = (props)=>{
return(
<>
{props.loading && <Loader/>}
</>
)
}
export default connect(mapDispatchToProps,mapStateToProps)( Home)