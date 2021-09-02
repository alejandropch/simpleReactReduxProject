import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {increase,decrease} from './actions'

function App() {

  const counter=useSelector(state=>state.counter)
  const dispatch=useDispatch();
  return (
    <div className="App">
      <header className="App-header">
       <h1>Hi amigo</h1>
       <p>This is the counter <i>{counter}</i></p>
       <button onClick={()=>dispatch(increase())}>+</button>
       <button onClick={()=>dispatch(decrease())}>-</button>


      </header>
    </div>
  );
}

export default App;
