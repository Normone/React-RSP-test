import { Card, ProgressBar, TextBubble, Text, Button } from "../../";
import {useState, useEffect} from 'react'
import './FightWindow.css'


export const FightWindow = ({ onClick = null, className = '', enemy, player, setPlayer, setShowNavBar, ...props }) => {

    const [results, setResults] = useState({w:0, d:0, s:0});
    const [isFight, setIsFight] = useState(false);
    const [isEndRound, setIsEndRound] = useState(false);
    const [enemyHP, setEnemyHP] = useState(enemy.hp);
    const [playerHP, setPlayerHP] = useState(player.hp * (1 + (player.upgrades.lvlHP / 10)));
    const [enemyChoise, setEnemyChoise] = useState('default');
    const [playerChoise, setPlayerChoise] = useState('default');
    const [showBubble, setShowBubble] = useState(false);
    const [resultLine, setResultLine] = useState('');

    const options = ['r', 's', 'p'];

    useEffect(() => {
        checkEnd();
    }, [enemyHP, playerHP]);
    useEffect(()=> {
        if (isFight === true) {
            setShowNavBar(false)
        } else {
            setShowNavBar(true)
        }
    }, [isFight])

    function startFight() {
        setEnemyHP(enemy.hp);
        setPlayerHP(player.hp * (1 + (player.upgrades.lvlHP / 10)));
        setShowBubble(false);
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
    function choosingBubbleLine(c) {
        let lines = enemy.lines;
        switch (c) {
            case 'win':
                setResultLine(lines.win[Math.floor(Math.random() * lines.win.length)]);
                break;
            case 'defeat':
                setResultLine(lines.defeat[Math.floor(Math.random() * lines.defeat.length)]);
                break;
            case 'standoff':
                setResultLine(lines.standoff[Math.floor(Math.random() * lines.standoff.length)]);
                break;
            default:
                break;
        }
    }
    function checkEnd() {
        if (enemyHP <= 0 && playerHP <= 0) {
            setResults({...results, s: results.s + 1});
            setIsFight(false);
            setShowBubble(true);
            choosingBubbleLine('standoff');
        } else if (enemyHP <= 0) {
            setResults({...results, w: results.w + 1});
            setIsFight(false);
            setShowBubble(true);
            choosingBubbleLine('win');
        } else if (playerHP <= 0) {
            setResults({...results, d: results.d + 1});
            setIsFight(false);
            setShowBubble(true);
            choosingBubbleLine('defeat');
        }
    }
    function doEnemyChoise() {
        setEnemyChoise(options[Math.floor(Math.random() * options.length)]);
    }
    function doPlayerChoise(c) {

        switch (c) {
            case 'r':
                if (enemyChoise == 's') {
                    setEnemyHP(enemyHP - 10 * (1 + (player.upgrades.lvlDMG / 10)));
                } else if (enemyChoise == 'r') {
                    setEnemyHP(enemyHP - 10 * (1 + (player.upgrades.lvlDMG / 10)));
                    setPlayerHP(playerHP - 10);
                } else {
                    setPlayerHP(playerHP - 10);
                }
                break;
            case 's':
                if (enemyChoise == 'p') {
                    setEnemyHP(enemyHP - 10 * (1 + (player.upgrades.lvlDMG / 10)));
                } else if (enemyChoise == 's') {
                    setEnemyHP(enemyHP - 10 * (1 + (player.upgrades.lvlDMG / 10)));
                    setPlayerHP(playerHP - 10);
                } else {
                    setPlayerHP(playerHP - 10);
                }
                break;
            case 'p':
                if (enemyChoise == 'r') {
                    setEnemyHP(enemyHP - 10 * (1 + (player.upgrades.lvlDMG / 10)));
                } else if (enemyChoise == 'p') {
                    setEnemyHP(enemyHP - 10 * (1 + (player.upgrades.lvlDMG / 10)));
                    setPlayerHP(playerHP - 10);
                } else {
                    setPlayerHP(playerHP - 10);
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
                <div>
                    <ProgressBar color="red" maxVal={enemy.hp} curVal={enemyHP}>hp</ProgressBar>
                    {showBubble && <TextBubble>{resultLine}</TextBubble> }
                </div>
                
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
                <ProgressBar color="green" maxVal={player.hp * (1 + (player.upgrades.lvlHP / 10))} curVal={playerHP}>hp</ProgressBar>
            </div>
            <div className="result">
                <Text>Побед: {results.w}</Text>
                <Text>Поражений: {results.d}</Text>
                <Text>Ничья: {results.s}</Text>
            </div>
            <Button className="startBtn" onClick={startFight}>Начать битву!</Button>
            {isFight &&
            <Button className="startBtn" onClick={()=> {
                setResults({...results, d: results.d + 1});
                setIsFight(false);
                setShowBubble(true);
                choosingBubbleLine('defeat');
            }}>Сдаться.</Button>}
        </div>
    );
};