import React from 'react';
import { Pet, Player } from '../types';
import { PetCard } from './PetCard';
import { Coins, Heart, Trophy, RefreshCw, Play } from 'lucide-react';
import { motion } from 'motion/react';

interface ShopViewProps {
  player: Player;
  shop: Pet[];
  onBuy: (index: number) => void;
  onReroll: () => void;
  onSell: (index: number) => void;
  onMove: (from: number, to: number) => void;
  onStartBattle: () => void;
}

export const ShopView: React.FC<ShopViewProps> = ({
  player,
  shop,
  onBuy,
  onReroll,
  onSell,
  onMove,
  onStartBattle,
}) => {
  return (
    <div className="flex flex-col h-full w-full bg-[#f1faee]">
      {/* Header Stat Bar */}
      <div className="bg-white border-b-4 border-black p-4 flex justify-between items-center">
        <div className="flex gap-6">
          <div className="flex items-center gap-2 bg-yellow-100 px-3 py-1 rounded-full border-2 border-yellow-400">
            <Coins className="text-yellow-600" size={20} />
            <span className="font-bold text-lg">{player.gold}</span>
          </div>
          <div className="flex items-center gap-2 bg-red-100 px-3 py-1 rounded-full border-2 border-red-400">
            <Heart className="text-red-500" size={20} />
            <span className="font-bold text-lg">{player.health}</span>
          </div>
          <div className="flex items-center gap-2 bg-blue-100 px-3 py-1 rounded-full border-2 border-blue-400">
            <Trophy className="text-blue-500" size={20} />
            <span className="font-bold text-lg">{player.wins}/10</span>
          </div>
        </div>
        
        <div className="text-xl font-bold uppercase tracking-tighter bg-black text-white px-4 py-1 rounded-md">
          Turn {player.turn}
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-8 gap-12">
        {/* Shop Section */}
        <div className="w-full max-w-4xl">
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-2xl font-black uppercase italic text-gray-700">The Shop</h2>
            <button 
              onClick={onReroll}
              disabled={player.gold < 1}
              className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg pixel-border hover:bg-blue-600 disabled:opacity-50 disabled:grayscale transition-all"
            >
              <RefreshCw size={18} />
              Roll (1)
            </button>
          </div>
          
          <div className="bg-gray-800/10 p-8 rounded-3xl border-4 border-dashed border-gray-300 flex gap-6 justify-center min-h-[160px]">
            {shop.map((pet, i) => (
              <div key={pet.id} className="flex flex-col items-center gap-2">
                <PetCard pet={pet} onClick={() => onBuy(i)} />
                <div className="bg-yellow-400 text-black px-3 py-0.5 rounded-full border-2 border-black font-bold text-xs">
                  3💰
                </div>
              </div>
            ))}
            {shop.length === 0 && (
                <div className="flex items-center justify-center text-gray-400 font-bold uppercase py-12">
                    Empty Shop. Roll for more!
                </div>
            )}
          </div>
        </div>

        {/* Player Team Section */}
        <div className="w-full max-w-4xl">
          <h2 className="text-2xl font-black uppercase italic text-gray-700 mb-4">Your Team</h2>
          <div className="bg-white p-8 rounded-3xl pixel-border flex gap-6 justify-center shadow-inner relative">
            {player.team.map((pet, i) => (
               <div key={i} className="group relative">
                  <PetCard 
                    pet={pet} 
                    onClick={() => pet && onSell(i)} 
                    className={pet ? "hover:border-red-500" : ""}
                  />
                  {pet && (
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full border border-black font-bold whitespace-nowrap">
                        Click to Sell (+1💰)
                    </div>
                  )}
               </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-8 flex justify-center bg-white border-t-4 border-black">
        <button 
          onClick={onStartBattle}
          className="btn-game flex items-center gap-4 text-2xl uppercase italic tracking-widest px-12 py-4 bg-[#e63946] hover:bg-[#ff4d6d]"
        >
          <Play fill="white" size={24} />
          Start Battle
        </button>
      </div>
    </div>
  );
};
