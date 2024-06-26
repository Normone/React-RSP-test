import {useState} from 'react';
import { FightWindow } from './components';
import { Enemys, Player, ThemeProvider } from './components/entities';
import { Wrapper, ThemeButtons } from './components/features';
import './App.css'


const enemy =  Enemys.master;

function App() {

  const [player, setPlayer] = useState({...Player});
  console.log(player)

  return (
    <ThemeProvider>
      <Wrapper>
        <ThemeButtons></ThemeButtons>
        <FightWindow enemy={enemy} player={player} setPlayer={setPlayer}></FightWindow>
      </Wrapper>
    </ThemeProvider>
    
  )
}

export default App
