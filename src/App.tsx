/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useGame } from './hooks/useGame';
import { ShopView } from './components/ShopView';
import { BattleView } from './components/BattleView';
import { LandingView } from './components/LandingView';
import { Trophy, Skull, RefreshCw } from 'lucide-react';

export default function App() {
  const {
    gameState,
    player,
    shop,
    enemyTeam,
    buyPet,
    rerollShop,
    sellPet,
    movePet,
    startBattle,
    endBattle,
    setBattleLogs,
    setGameState,
  } = useGame();

  const handleBattleEnd = (winner: 'PLAYER' | 'ENEMY' | 'DRAW') => {
    endBattle(winner);
  };

  const handleAddLog = (log: string) => {
    setBattleLogs(prev => [...prev, log]);
  };

  const handleStartGame = () => {
    setGameState('SHOP');
  };

  if (gameState === 'LANDING') {
    return <LandingView onStartGame={handleStartGame} />;
  }

  if (gameState === 'SHOP') {
    return (
      <div className="h-screen w-screen overflow-hidden">
        <ShopView
          player={player}
          shop={shop}
          onBuy={buyPet}
          onReroll={rerollShop}
          onSell={sellPet}
          onMove={movePet}
          onStartBattle={startBattle}
        />
      </div>
    );
  }

  if (gameState === 'BATTLE') {
    return (
      <div className="h-screen w-screen overflow-hidden">
        <BattleView
          playerTeam={player.team}
          enemyTeam={enemyTeam}
          onEnd={handleBattleEnd}
          addLog={handleAddLog}
        />
      </div>
    );
  }

  if (gameState === 'WIN' || gameState === 'LOSE') {
    const isWin = gameState === 'WIN';
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-100 p-8">
        <div className={`p-12 rounded-3xl pixel-border bg-white text-center flex flex-col items-center max-w-md w-full`}>
          <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 border-4 border-black ${isWin ? 'bg-yellow-400' : 'bg-red-500'}`}>
            {isWin ? <Trophy size={48} className="text-white" /> : <Skull size={48} className="text-white" />}
          </div>
          <h1 className="text-5xl font-black uppercase mb-4 tracking-tighter">
            {isWin ? 'Victory!' : 'Game Over'}
          </h1>
          <p className="text-gray-600 mb-8 font-medium">
            {isWin 
              ? 'You conquered the arena with your animal squad!' 
              : `You lasted ${player.turn} turns before your hearts ran out.`}
          </p>
          
          <div className="grid grid-cols-2 gap-4 w-full mb-8">
            <div className="bg-blue-50 p-4 rounded-xl border-2 border-blue-200">
               <div className="text-xs font-bold text-blue-500 uppercase">Wins</div>
               <div className="text-2xl font-black">{player.wins}</div>
            </div>
            <div className="bg-orange-50 p-4 rounded-xl border-2 border-orange-200">
               <div className="text-xs font-bold text-orange-500 uppercase">Turns</div>
               <div className="text-2xl font-black">{player.turn}</div>
            </div>
          </div>

          <button 
            onClick={() => window.location.reload()}
            className="btn-game flex items-center justify-center gap-2 w-full text-xl"
          >
            <RefreshCw size={24} />
            Play Again
          </button>
        </div>
      </div>
    );
  }

  return <div>Unknown State</div>;
}

