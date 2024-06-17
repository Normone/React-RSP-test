import { Button, Text, FightWindow } from './components';
// import viteLogo from '/vite.svg'
import './App.css'

import { Enemys } from './components/entities/enemys';

const enemy =  Enemys.master;

function App() {

  return (
    <>
      <FightWindow enemy={enemy}></FightWindow>
    </>
  )
}

export default App
