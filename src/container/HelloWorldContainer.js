import {showhelloWorld} from './action';
import { connect } from 'react-redux';
import HelloWorld from '../component/HelloWorld';

function mapStateToProps(state){
  return{
    message: state.helloWorld.message
  }
};

function mapDispatchToProps (dispatch){
  return{
    onHelloBtnClick: ()=>{
      dispatch(showhelloWorld())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);


