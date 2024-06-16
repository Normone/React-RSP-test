import { Card, Text, Button } from "../../";
import {useState} from 'react'
import './FightWindow.css'

export const FightWindow = ({ onClick = null, className = '', ...props }) => {

    const [results, setResults] = useState({w:0, d:0, s:0});
    const [isFight, setIsFight] = useState(false);
    const [enemyChoise, setEnemyChoise] = useState('default');
    const [playerChoise, setPlayerChoise] = useState('default');

    const options = ['r', 's', 'p'];

    function startFight() {
        setIsFight(true)
        setEnemyChoise(options[Math.floor(Math.random() * options.length)])
        
    }
    function doChoise(c) {
        
        switch (c) {
            case 'r':
                if (enemyChoise == 's') {
                    setResults({...results, w: results.w + 1})
                } else if (enemyChoise == 'r') {
                    setResults({...results, s: results.s + 1})
                } else {
                    setResults({...results, d: results.d + 1})
                }
                setIsFight(false)
                break;
            case 's':
                if (enemyChoise == 'p') {
                    setResults({...results, w: results.w + 1})
                } else if (enemyChoise == 's') {
                    setResults({...results, s: results.s + 1})
                } else {
                    setResults({...results, d: results.d + 1})
                }
                setIsFight(false)
                break;
            case 'p':
                if (enemyChoise == 'r') {
                    setResults({...results, w: results.w + 1})
                } else if (enemyChoise == 'p') {
                    setResults({...results, s: results.s + 1})
                } else {
                    setResults({...results, d: results.d + 1})
                }
                setIsFight(false)
                break;
            default:
                break;
        }
        setPlayerChoise(c)
    }

    return (
        <div className={`fightWindow ${className}`} onClick={onClick} {...props}>
            <Text className="FWStatus">{isFight ? 'Битва!' : ''}</Text>
            <div className='enemy'>
                {isFight ? <Card /> : <Card type={enemyChoise}/>}
            </div>
            <div className='player'>
                {isFight ? 
                <>
                <Card type="r" playable={doChoise} />
                <Card type="s" playable={doChoise} />
                <Card type="p" playable={doChoise} />
                </>
                : <Card type={playerChoise}/>}
                
            </div>
            <div className="result">
                <Text>Побед: {results.w}</Text>
                <Text>Поражений: {results.d}</Text>
                <Text>Ничья: {results.s}</Text>
            </div>
            <Button className="startBtn" onClick={startFight}>Начать битву!</Button>
        </div>
    );
};