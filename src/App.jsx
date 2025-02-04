import {useState} from 'react';
import './App.css';

function App(){
  const [val, setVal]=useState(6);
  function rollDice(){
    const val=Math.floor ((Math.random()*6)+1);
    setVal(val);
  }
  return (
    <>
    <Dice diceVal={val} />
    <button onclick={rollDice}className='roll-btn'> Roll</button>
    </>
  )
}
export default App