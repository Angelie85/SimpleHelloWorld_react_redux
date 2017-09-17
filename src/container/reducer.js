import {SHOW_HELLO_WORLD} from './action';
import {combineReducers} from 'redux';

const init_state={message:'Hello '};

const helloWorld= (state=init_state, action) =>{
  switch(action.type){
    case SHOW_HELLO_WORLD:
      return Object.assign({}, state, {message: 'HELLO WORLD'});
    default:
      return state;
  }
};

const helloWorldReducer = combineReducers({
  helloWorld
});

export default helloWorldReducer;
