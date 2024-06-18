import { Card, ProgressBar, Text, Button } from "../../";
import {useState, useEffect} from 'react'
import './FightWindow.css'


export const FightWindow = ({ onClick = null, className = '', enemy, player, setPlayer, ...props }) => {

    const [results, setResults] = useState({w:0, d:0, s:0});
    const [isFight, setIsFight] = useState(false);
    const [isEndRound, setIsEndRound] = useState(false);
    const [enemyHP, setEnemyHP] = useState(enemy.hp);
    const [playerHP, setPlayerHP] = useState(player.hp);
    const [enemyChoise, setEnemyChoise] = useState('default');
    const [playerChoise, setPlayerChoise] = useState('default');

    const options = ['r', 's', 'p'];

    useEffect(() => {
        checkEnd();
    }, [enemyHP, playerHP]);

    function startFight() {
        setEnemyHP(enemy.hp);
        setPlayerHP(player.hp);
        setIsFight(true);
        doEnemyChoise();
        
    }
    function showRoundResult(pc) {
        setPlayerChoise(pc);
        setIsEndRound(true);
        setTimeout(()=>{
            setIsEndRound(false);
            doEnemyChoise();
        }, 1500)
        
    }
    function checkEnd() {
        if (enemyHP <= 0 && playerHP <= 0) {
            setResults({...results, s: results.s + 1});
            setIsFight(false);
        } else if (enemyHP <= 0) {
            setResults({...results, w: results.w + 1});
            setIsFight(false);
        } else if (playerHP <= 0) {
            setResults({...results, d: results.d + 1});
            setIsFight(false);
        }
    }
    function doEnemyChoise() {
        setEnemyChoise(options[Math.floor(Math.random() * options.length)]);
    }
    function doPlayerChoise(c) {

        switch (c) {
            case 'r':
                if (enemyChoise == 's') {
                    setEnemyHP(enemyHP-10);
                } else if (enemyChoise == 'r') {
                    setEnemyHP(enemyHP-10);
                    setPlayerHP(playerHP-10);
                } else {
                    setPlayerHP(playerHP-10);
                }
                break;
            case 's':
                if (enemyChoise == 'p') {
                    setEnemyHP(enemyHP-10);
                } else if (enemyChoise == 's') {
                    setEnemyHP(enemyHP-10);
                    setPlayerHP(playerHP-10);
                } else {
                    setPlayerHP(playerHP-10);
                }
                break;
            case 'p':
                if (enemyChoise == 'r') {
                    setEnemyHP(enemyHP-10);
                } else if (enemyChoise == 'p') {
                    setEnemyHP(enemyHP-10);
                    setPlayerHP(playerHP-10);
                } else {
                    setPlayerHP(playerHP-10);
                }
                break;
            default:
                break;
        }
        showRoundResult(c);
    }

    return (
        <div className={`fightWindow ${className}`} onClick={onClick} {...props}>
            <Text className="FWStatus">{isFight ? 'Битва!' : ''}</Text>
            <div className='enemy'>
                <ProgressBar color="red" maxVal={enemy.hp} curVal={enemyHP}>hp</ProgressBar>
                <div className="enemyCards">
                    {isFight && !isEndRound ? <Card /> : <Card type={enemyChoise}/>}
                </div>
            </div>
            <div className='player'>
                <div className="playerCards">
                    {isFight && !isEndRound ? 
                    <>
                    <Card type="r" playable={doPlayerChoise} />
                    <Card type="s" playable={doPlayerChoise} />
                    <Card type="p" playable={doPlayerChoise} />
                    </>
                    : <Card type={playerChoise}/>}
                </div>
                <ProgressBar color="green" maxVal={player.hp} curVal={playerHP}>hp</ProgressBar>
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