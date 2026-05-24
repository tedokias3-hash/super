import { useState, useCallback, useEffect } from 'react';
import { Pet, Player, GameState } from '../types';
import { PET_DATA } from '../data/pets';

const MAX_TEAM_SIZE = 5;
const INITIAL_GOLD = 10;
const INITIAL_HEALTH = 10;
const SHOP_SIZE = 3;

export function useGame() {
  const [gameState, setGameState] = useState<GameState>('LANDING');
  const [player, setPlayer] = useState<Player>({
    health: INITIAL_HEALTH,
    wins: 0,
    gold: INITIAL_GOLD,
    turn: 1,
    team: Array(MAX_TEAM_SIZE).fill(null),
  });
  const [shop, setShop] = useState<Pet[]>([]);
  const [enemyTeam, setEnemyTeam] = useState<Pet[]>([]);
  const [battleLogs, setBattleLogs] = useState<string[]>([]);
  const [isBattleAnimating, setIsBattleAnimating] = useState(false);

  // SHOP LOGIC
  const refreshShop = useCallback(() => {
    const tier = Math.min(Math.floor(player.turn / 2) + 1, 6);
    const available = PET_DATA.filter(p => p.tier <= tier);
    const newShop: Pet[] = [];
    for (let i = 0; i < SHOP_SIZE; i++) {
        const randomPet = { ...available[Math.floor(Math.random() * available.length)], instanceId: Math.random().toString(36).substr(2, 9) };
        // In a real app, I'd type instanceId. For now, let's just use unique references.
        newShop.push(JSON.parse(JSON.stringify(randomPet)));
    }
    setShop(newShop);
  }, [player.turn]);

  useEffect(() => {
    if (gameState === 'SHOP') {
      refreshShop();
      setPlayer(p => ({ ...p, gold: INITIAL_GOLD }));
    }
  }, [gameState, refreshShop]);

  const buyPet = (shopIndex: number) => {
    if (player.gold < 3) return;
    
    // Find empty spot
    const emptyIndex = player.team.findIndex(p => p === null);
    if (emptyIndex === -1) return;

    const pet = shop[shopIndex];
    const newTeam = [...player.team];
    newTeam[emptyIndex] = pet;

    setPlayer(p => ({ ...p, gold: p.gold - 3, team: newTeam }));
    const newShop = [...shop];
    newShop.splice(shopIndex, 1);
    setShop(newShop);
  };

  const rerollShop = () => {
    if (player.gold < 1) return;
    setPlayer(p => ({ ...p, gold: p.gold - 1 }));
    refreshShop();
  };

  const sellPet = (index: number) => {
    const pet = player.team[index];
    if (!pet) return;

    const newTeam = [...player.team];
    newTeam[index] = null;
    setPlayer(p => ({ ...p, gold: p.gold + 1, team: newTeam }));
  };

  const movePet = (from: number, to: number) => {
    const newTeam = [...player.team];
    const temp = newTeam[from];
    newTeam[from] = newTeam[to];
    newTeam[to] = temp;
    setPlayer(p => ({ ...p, team: newTeam }));
  };

  // BATTLE LOGIC
  const startBattle = () => {
    // Generate AI team based on turn
    const tier = Math.min(Math.floor(player.turn / 2) + 1, 6);
    const available = PET_DATA.filter(p => p.tier <= tier);
    const team: Pet[] = [];
    const size = Math.min(player.turn + 1, 5);
    
    for(let i=0; i<size; i++) {
        const p = available[Math.floor(Math.random() * available.length)];
        team.push({ ...p, id: p.id + '_' + Math.random() });
    }
    
    setEnemyTeam(team);
    setGameState('BATTLE');
    setBattleLogs(["Battle Start!"]);
  };

  const endBattle = (winner: 'PLAYER' | 'ENEMY' | 'DRAW') => {
    if (winner === 'PLAYER') {
      setPlayer(p => ({ ...p, wins: p.wins + 1, turn: p.turn + 1 }));
    } else if (winner === 'ENEMY') {
      const damage =  1; // fixed for now
      setPlayer(p => ({ ...p, health: p.health - damage, turn: p.turn + 1 }));
    } else {
      setPlayer(p => ({ ...p, turn: p.turn + 1 }));
    }

    if (player.health <= 0) {
        setGameState('LOSE');
    } else if (player.wins >= 10) {
        setGameState('WIN');
    } else {
        setGameState('SHOP');
    }
  };

  return {
    gameState,
    player,
    shop,
    enemyTeam,
    battleLogs,
    isBattleAnimating,
    buyPet,
    rerollShop,
    sellPet,
    movePet,
    startBattle,
    endBattle,
    setBattleLogs,
    setGameState,
  };
}
