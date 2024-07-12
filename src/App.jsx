import {useState, useEffect} from 'react';
import { Button, Text, FightWindow, LevelingWindow } from './components';
import { Enemys, Player, ThemeProvider } from './components/entities';
import { Wrapper, ThemeButtons } from './components/features';
import './App.css'


const enemy =  Enemys.master;

function App() {

  const save = () => {
    localStorage.setItem('player', JSON.stringify(player));
  }
  
  
  const [player, setPlayer] = useState(()=> {
    if (localStorage.getItem('player') !== null) {
      return JSON.parse(localStorage.getItem('player'));
    } else {
      return {...Player}
    }
  });

  useEffect(() => {
    save();
  }, [player]);
  
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
          <LevelingWindow save={save} player={player} setPlayer={setPlayer}></LevelingWindow>
        }
        {curWindow === 'FightWindow' &&
        <FightWindow save={save} enemy={enemy} player={player} setPlayer={setPlayer} setShowNavBar={setShowNavBar}></FightWindow>
        }
        <Text>Золото: {player.money}</Text>
        {/* <Button onClick={()=>{setPlayer({...player, money: 500})}}>
          Голова, дай деняк
        </Button> */}
      </Wrapper>
    </ThemeProvider>
    
  )
}

export default App
