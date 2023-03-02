import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {incCount, decCount} from './lib/counter'


function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <input type="button" value="-" onClick={(event) => {
        setCount(decCount(count));
      }}/>
      <input type="button" value="0" onClick={(event) => {
        setCount(0)
      }}/>
      <input type="button" value="+" onClick={(event) => {
        setCount(incCount(count));
      }}/>
      <span>{count}</span>
    </div>
  )
}

export default App
