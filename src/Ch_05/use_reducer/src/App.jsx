import {useReducer, useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


function App() {
  const [count, countDispatch] = useReducer(countReducer, 0);
  const [number, setNumber] = useState(1);

  function countReducer(oldCount, action) {
    if (action.type === 'UP') {
      return oldCount + action.number;
    } else if (action.type === 'DOWN') {
      return oldCount - action.number;
    } else if (action.type === 'RESET') {
      return 0;
    }
  }

  function changeNumber(event) {
    setNumber(Number(event.target.value));
  }

  function down() {
    countDispatch({type: 'DOWN', number: number})
  }

  function up() {
    countDispatch({type: 'UP', number: number})
  }

  function reset() {
    countDispatch({type: 'RESET', number: number})
  }

  return (
    <div>
      <input type="button" value="-" onClick={down}/>
      <input type="button" value="0" onClick={reset}/>
      <input type="button" value="+" onClick={up}/>
      <input type="text" value={number} onChange={changeNumber}/>
      <span>{count}</span>
    </div>
  )
}

export default App
