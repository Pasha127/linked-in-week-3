/* import { Container, Row, Col, Form,Button } from 'react-bootstrap' */
import { connect } from "react-redux";
/* import { Link } from 'react-router-dom'; */
import { setSearch } from '../app/redux/actions/actions';
import Loader from './Loader';


const mapStateToProps = state => {
    return {
    loadState: state.logicRoot.logic.loading
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
{console.log("loading:",props.loadState)}
{props.loadState && <Loader/>}
</>
)
}
export default connect(mapStateToProps, mapDispatchToProps)( Home)