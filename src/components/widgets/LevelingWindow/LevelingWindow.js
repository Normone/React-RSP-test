import { Text, Button } from "../..";
import { useState, useEffect } from 'react'
import './LevelingWindow.css'

const UPGRADE_BUTTON_TEXT = 'Улучшить';
const GOLD_SYMBOL = 'з';
const LEVEL_SYMBOL = 'ур';

const calculateUpgradeCost = (level) => {
    return Math.floor(100 * (1 + (level / 10)));      
};




export const LevelingWindow = ({ player, setPlayer, className = '', ...props }) => {

    const hpCost = calculateUpgradeCost(player.upgrades.lvlHP);
    const dmgCost = calculateUpgradeCost(player.upgrades.lvlDMG);
    const goldGainCost = calculateUpgradeCost(player.upgrades.lvlGoldGain)

    const handleUpgrade = (upgradeType) => {
        setPlayer((prevPlayer) => {
            if (prevPlayer.money >= calculateUpgradeCost(prevPlayer.upgrades[upgradeType])) {
                return {
                    ...prevPlayer,
                    upgrades: {
                    ...prevPlayer.upgrades,
                    [upgradeType]: prevPlayer.upgrades[upgradeType] + 1
                    },
                    money: prevPlayer.money - calculateUpgradeCost(prevPlayer.upgrades[upgradeType])
                };
            }
            return prevPlayer;
        });
    };

    

    return (
        <div className={`levelingWindow ${className}`} {...props}>
            <Text>Улучшения:</Text>
            <div>
                <div>
                    <Text>+10% к хп ({player.upgrades.lvlHP} {LEVEL_SYMBOL})</Text>
                    <Button 
                    onClick={() => {handleUpgrade('lvlHP')}}
                    disabled={player.money < hpCost}
                    >{UPGRADE_BUTTON_TEXT} ({hpCost}{GOLD_SYMBOL})</Button>
                </div>
                <div>
                    <Text>+10% к урону ({player.upgrades.lvlDMG} {LEVEL_SYMBOL})</Text>
                    <Button
                    onClick={() => handleUpgrade('lvlDMG')}
                    disabled={player.money < dmgCost}
                    >{UPGRADE_BUTTON_TEXT} ({dmgCost}{GOLD_SYMBOL})</Button>
                </div>
                <div>       
                    <Text>+10% к получаемому золоту ({player.upgrades.lvlGoldGain} {LEVEL_SYMBOL})</Text>
                    <Button
                    onClick={() => handleUpgrade('lvlGoldGain')}
                    disabled={player.money < goldGainCost}
                    >{UPGRADE_BUTTON_TEXT} ({goldGainCost}{GOLD_SYMBOL})</Button>
                </div>
            </div>
        </div>
    );
};