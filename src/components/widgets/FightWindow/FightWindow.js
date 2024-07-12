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
    useEffect(() => {
        if (isFight === true) {
            setShowNavBar(false)
        } else {
            setShowNavBar(true)
        }
    }, [isFight]);

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
    function chooseBubbleLine(c) {
        const lines = enemy.lines[c];
        setResultLine(lines[Math.floor(Math.random() * lines.length)]);
        
    }
    function checkEnd() {

        if (enemyHP <= 0 && playerHP <= 0) {
            setResults({ ...results, s: results.s + 1 });
            chooseBubbleLine('standoff');
        } else if (enemyHP <= 0) {
            setResults({ ...results, w: results.w + 1 });
            chooseBubbleLine('win');
            console.log('setPlayer called');
            setPlayer({...player, money: player.money + ((Math.floor(Math.random() * (100 - 50 + 1)) + 50) * (1 + player.upgrades.lvlGoldGain))})
        } else if (playerHP <= 0) {
            setResults({ ...results, d: results.d + 1 });
            chooseBubbleLine('defeat');
        }
        if (enemyHP <= 0 || playerHP <= 0) {
            setIsFight(false);
            setShowBubble(true);
        }
    }


    function calculateDamage(playerChoise, enemyChoise) {
        if (playerChoise === 'r' && enemyChoise === 's') {
            return { playerDamage: 0, enemyDamage: 10 * (1 + (player.upgrades.lvlDMG / 10)) };
        } else if (playerChoise === 's' && enemyChoise === 'p') {
            return { playerDamage: 0, enemyDamage: 10 * (1 + (player.upgrades.lvlDMG / 10)) };
        } else if (playerChoise === 'p' && enemyChoise === 'r') {
            return { playerDamage: 0, enemyDamage: 10 * (1 + (player.upgrades.lvlDMG / 10)) };
        } else if (playerChoise === enemyChoise) {
            return { playerDamage: 10, enemyDamage: 10 * (1 + (player.upgrades.lvlDMG / 10)) };
        } else {
            return { playerDamage: 10, enemyDamage: 0 };
        }
        }


    function doEnemyChoise() {
        setEnemyChoise(options[Math.floor(Math.random() * options.length)]);
    }
    function doPlayerChoise(c) {

        const { playerDamage, enemyDamage } = calculateDamage(c, enemyChoise);
        setPlayerHP(playerHP - playerDamage);
        setEnemyHP(enemyHP - enemyDamage);
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
                chooseBubbleLine('defeat');
            }}>Сдаться.</Button>}
        </div>
    );
};