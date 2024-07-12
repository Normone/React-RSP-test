import {useState} from 'react';
import { Button, FightWindow, LevelingWindow } from './components';
import { Enemys, Player, ThemeProvider } from './components/entities';
import { Wrapper, ThemeButtons } from './components/features';
import './App.css'


const enemy =  Enemys.master;

function App() {

  const [player, setPlayer] = useState({...Player});
  const [curWindow, setCurWindow] = useState('levelingWindow');
  const [showNavBar, setShowNavBar] = useState(true);
  console.log(player)

  return (
    <ThemeProvider>
      <Wrapper>
        {showNavBar &&
        <div>
          <Button onClick={() => {
            setCurWindow('levelingWindow')
          }}>LvlUp</Button>
          <Button onClick={() => {
            setCurWindow('FightWindow')
          }}>Fight</Button>
        </div>
        }
        <ThemeButtons></ThemeButtons>
        {curWindow === 'levelingWindow' &&
          <LevelingWindow player={player} setPlayer={setPlayer}></LevelingWindow>
        }
        {curWindow === 'FightWindow' &&
        <FightWindow enemy={enemy} player={player} setPlayer={setPlayer} setShowNavBar={setShowNavBar}></FightWindow>
        }
        
        
      </Wrapper>
    </ThemeProvider>
    
  )
}

export default App
