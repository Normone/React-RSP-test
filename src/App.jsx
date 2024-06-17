import {useState} from 'react';
import { Button, Text, FightWindow } from './components';
// import viteLogo from '/vite.svg'
import './App.css'

import { Enemys, Player } from './components/entities';

const enemy =  Enemys.master;

function App() {
  const [player, setPlayer] = useState({...Player});
  console.log(player)

  return (
    <>
      <FightWindow enemy={enemy} player={player} setPlayer={setPlayer}></FightWindow>
    </>
  )
}

export default App
