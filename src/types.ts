export interface Pet {
  id: string;
  name: string;
  emoji: string;
  attack: number;
  health: number;
  tier: number;
  ability?: string;
}

export type GameState = 'LANDING' | 'SHOP' | 'BATTLE' | 'LOSE' | 'WIN';

export interface Player {
  health: number;
  wins: number;
  gold: number;
  turn: number;
  team: (Pet | null)[];
}
