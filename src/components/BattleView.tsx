import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Pet } from '../types';
import { PetCard } from './PetCard';
import { Swords } from 'lucide-react';

interface BattleViewProps {
  playerTeam: (Pet | null)[];
  enemyTeam: Pet[];
  onEnd: (winner: 'PLAYER' | 'ENEMY' | 'DRAW') => void;
  addLog: (log: string) => void;
}

export const BattleView: React.FC<BattleViewProps> = ({ playerTeam, enemyTeam, onEnd, addLog }) => {
  const [pTeam, setPTeam] = useState<(Pet | null)[]>([]);
  const [eTeam, setETeam] = useState<Pet[]>([]);
  const [isAttacking, setIsAttacking] = useState(false);
  const [round, setRound] = useState(0);

  useEffect(() => {
    // Filter out nulls and deep copy
    const p = playerTeam.filter(Boolean).map(x => ({ ...x! }));
    const e = enemyTeam.map(x => ({ ...x }));
    setPTeam(p);
    setETeam(e);
  }, [playerTeam, enemyTeam]);

  useEffect(() => {
    if (pTeam.length === 0 || eTeam.length === 0) return;
    if (isAttacking) return;

    const timer = setTimeout(() => {
      fight();
    }, 1500);

    return () => clearTimeout(timer);
  }, [pTeam, eTeam, isAttacking]);

  const fight = () => {
    if (pTeam.length === 0 && eTeam.length === 0) {
      onEnd('DRAW');
      return;
    }
    if (pTeam.length === 0) {
      onEnd('ENEMY');
      return;
    }
    if (eTeam.length === 0) {
      onEnd('PLAYER');
      return;
    }

    setIsAttacking(true);
    const pFront = pTeam[pTeam.length - 1]!;
    const eFront = eTeam[0];

    addLog(`${pFront.name} attacks ${eFront.name}!`);

    // Actual damage logic
    const nextPTeam = [...pTeam];
    const nextETeam = [...eTeam];

    nextPTeam[nextPTeam.length - 1].health -= eFront.attack;
    nextETeam[0].health -= pFront.attack;

    // Wait for animation
    setTimeout(() => {
      const pStillAlive = nextPTeam.filter(p => (p?.health ?? 0) > 0);
      const eStillAlive = nextETeam.filter(p => p.health > 0);
      
      setPTeam(pStillAlive);
      setETeam(eStillAlive);
      setIsAttacking(false);
      setRound(r => r + 1);

      if (pStillAlive.length === 0 && eStillAlive.length === 0) {
        onEnd('DRAW');
      } else if (pStillAlive.length === 0) {
        onEnd('ENEMY');
      } else if (eStillAlive.length === 0) {
        onEnd('PLAYER');
      }
    }, 500);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-[#a8dadc]/30 p-8">
      <div className="text-3xl font-bold mb-12 text-gray-700 uppercase tracking-widest">
        Round {round}
      </div>

      <div className="flex items-center gap-16 md:gap-32 w-full justify-center">
        {/* Player Team */}
        <div className="flex gap-4 items-center">
          <AnimatePresence mode="popLayout">
            {pTeam.map((pet, i) => (
              <motion.div
                key={pet?.id}
                layout
                animate={isAttacking && i === pTeam.length - 1 ? { x: 40 } : { x: 0 }}
                transition={{ type: 'spring', damping: 10 }}
              >
                <PetCard pet={pet} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white rounded-full pixel-border flex items-center justify-center text-red-500">
                <Swords size={32} />
            </div>
        </div>

        {/* Enemy Team */}
        <div className="flex gap-4 items-center">
          <AnimatePresence mode="popLayout">
            {eTeam.map((pet, i) => (
              <motion.div
                key={pet.id}
                layout
                animate={isAttacking && i === 0 ? { x: -40 } : { x: 0 }}
                transition={{ type: 'spring', damping: 10 }}
              >
                <PetCard pet={pet} isEnemy />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-16 w-full max-w-lg bg-black/10 rounded-lg p-4 h-32 overflow-y-auto font-mono text-xs">
          <div className="uppercase font-bold mb-2 text-gray-600">Battle Feed</div>
          {/* Reverse logs to show newest at top or just show bottom */}
          <div>
              Battle in progress...
          </div>
      </div>
    </div>
  );
};
