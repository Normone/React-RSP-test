import { Text, Button } from "../..";
import { useState, useEffect } from 'react'
import './LevelingWindow.css'


export const LevelingWindow = ({ className = '', player, setPlayer, ...props }) => {



    return (
        <div className={`levelingWindow ${className}`} {...props}>
            <Text>Улучшения:</Text>
            <div>
                <div>
                    <Text>+10% к хп ({player.upgrades.lvlHP} ур)</Text>
                    <Button onClick={() => {
                        if (player.money >= 100 * (1 + (player.upgrades.lvlHP / 10))) {

                        }
                        setPlayer({
                            ...player, 
                            upgrades: {
                                ...player.upgrades, 
                                lvlHP: player.upgrades.lvlHP + 1
                            }
                        });
                    }}
                    >Улучшить ({100 * (1 + (player.upgrades.lvlHP / 10))}з)</Button>
                </div>
                <div>
                    <Text>+10% к урону ({player.upgrades.lvlDMG} ур)</Text>
                    <Button onClick={() => {
                        if (player.money >= 100 * (1 + (player.upgrades.lvlDMG / 10))) {

                        }
                        setPlayer({
                            ...player, 
                            upgrades: {
                                ...player.upgrades, 
                                lvlDMG: player.upgrades.lvlDMG + 1
                            }
                        });
                    }}
                    >Улучшить ({100 * (1 + (player.upgrades.lvlDMG / 10))}з)</Button>
                </div>
                <div>       
                    <Text>+10% к получаемому золоту ({player.upgrades.lvlGoldGain} ур)</Text>
                    <Button onClick={() => {
                        if (player.money >= 100 * (1 + (player.upgrades.lvlGoldGain / 10))) {

                        }
                        setPlayer({
                            ...player, 
                            upgrades: {
                                ...player.upgrades, 
                                lvlGoldGain: player.upgrades.lvlGoldGain + 1
                            }
                        });
                    }}
                    >Улучшить ({100 * (1 + (player.upgrades.lvlGoldGain / 10))}з)</Button>
                </div>
            </div>
        </div>
    );
};