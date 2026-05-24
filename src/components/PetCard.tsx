import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Pet } from '../types';
import { Swords, Heart } from 'lucide-react';

interface PetCardProps {
  pet: Pet | null;
  onClick?: () => void;
  className?: string;
  showStats?: boolean;
  isEnemy?: boolean;
}

export const PetCard: React.FC<PetCardProps> = ({ pet, onClick, className = '', showStats = true, isEnemy = false }) => {
  if (!pet) {
    return (
      <div 
        onClick={onClick}
        className={`w-24 h-32 bg-gray-200/50 rounded-xl border-4 border-dashed border-gray-400 flex items-center justify-center ${className}`}
      >
        <span className="text-gray-400 text-xs font-bold uppercase">Empty</span>
      </div>
    );
  }

  return (
    <motion.div
      layout
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      whileHover={{ y: -5 }}
      onClick={onClick}
      className={`pet-card-container ${isEnemy ? 'bg-red-50' : ''} ${className}`}
    >
      <div className="text-4xl mb-2">{pet.emoji}</div>
      <div className="text-[10px] font-bold text-center leading-tight mb-1 truncate w-full">
        {pet.name}
      </div>
      
      {showStats && (
        <div className="flex justify-between w-full mt-auto px-1">
          <div className="flex items-center text-red-600 font-bold text-sm">
            <Swords size={12} className="mr-0.5" />
            {pet.attack}
          </div>
          <div className="flex items-center text-green-600 font-bold text-sm">
            <Heart size={12} className="mr-0.5" />
            {pet.health}
          </div>
        </div>
      )}

      {/* Ability Tooltip placeholder or indicator */}
      {pet.ability && (
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 border-2 border-black rounded-full flex items-center justify-center">
          <span className="text-[8px] font-bold">!</span>
        </div>
      )}
    </motion.div>
  );
};
