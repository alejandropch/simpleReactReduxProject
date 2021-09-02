import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import allMyReducers from './reducers'

//actions
const increase=()=>{

  return {
   type:'INCREASE'
  }
}

//reducer

//store
const store= createStore(allMyReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

store.subscribe(()=>console.log(store.getState()))

store.dispatch(increase())
store.dispatch(increase())
store.dispatch(increase())


ReactDOM.render(<App />,document.getElementById('root'));

reportWebVitals();
