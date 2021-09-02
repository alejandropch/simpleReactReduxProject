import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import allMyReducers from './reducers'
import {increase,decrease} from './actions'
import {Provider} from 'react-redux'

//store
const store= createStore(allMyReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

store.subscribe(()=>console.log(store.getState()))

store.dispatch(increase())
store.dispatch(decrease())
store.dispatch(increase())


ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
,document.getElementById('root'));

reportWebVitals();
