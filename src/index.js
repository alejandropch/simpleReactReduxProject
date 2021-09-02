import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';


//actions
const increase=()=>{

  return {
   type:'INCREASE'
  }
}

//reducer
const counter = (state = 0,action)=>{

  switch (action.type) {
    case 'INCREASE':
      return state+1;
  
    default:
      break;
  }
}

//store
const store= createStore(counter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

store.subscribe(()=>console.log(store.getState()))

store.dispatch(increase())
store.dispatch(increase())
store.dispatch(increase())


ReactDOM.render(<App />,document.getElementById('root'));

reportWebVitals();
