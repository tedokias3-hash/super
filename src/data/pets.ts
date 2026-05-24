import { Pet } from '../types';

export const PET_DATA: Pet[] = [
  // Tier 1
  { id: 'ant', name: 'Ant', emoji: '🐜', attack: 2, health: 1, tier: 1, ability: 'Faint: Give +1/+1 to a random friend.' },
  { id: 'beaver', name: 'Beaver', emoji: '🦫', attack: 3, health: 2, tier: 1, ability: 'Sell: Give +1 health to 2 random friends.' },
  { id: 'cricket', name: 'Cricket', emoji: '🦗', attack: 1, health: 2, tier: 1, ability: 'Faint: Summon a 1/1 Zombie Cricket.' },
  { id: 'duck', name: 'Duck', emoji: '🦆', attack: 2, health: 3, tier: 1, ability: 'Sell: Give shop pets +1 health.' },
  { id: 'fish', name: 'Fish', emoji: '🐟', attack: 2, health: 2, tier: 1, ability: 'Level up: Give all friends +1/+1.' },
  { id: 'horse', name: 'Horse', emoji: '🐎', attack: 2, health: 1, tier: 1, ability: 'Friend summoned: Give it +1 attack until end of battle.' },
  { id: 'pig', name: 'Pig', emoji: '🐷', attack: 4, health: 1, tier: 1, ability: 'Sell: Gain +1 gold.' },
  { id: 'otter', name: 'Otter', emoji: '🦦', attack: 1, health: 2, tier: 1, ability: 'Buy: Give a random friend +1 health.' },

  // Tier 2
  { id: 'crab', name: 'Crab', emoji: '🦀', attack: 3, health: 1, tier: 2, ability: 'Buy: Copy health from most healthy friend.' },
  { id: 'dodo', name: 'Dodo', emoji: '🦤', attack: 2, health: 3, tier: 2, ability: 'Start of battle: Give 50% attack to friend ahead.' },
  { id: 'elephant', name: 'Elephant', emoji: '🐘', attack: 3, health: 5, tier: 2, ability: 'Before attack: Deal 1 damage to friend behind.' },
  { id: 'flamingo', name: 'Flamingo', emoji: '🦩', attack: 4, health: 2, tier: 2, ability: 'Faint: Give +1/+1 to two friends behind.' },
  { id: 'hedgehog', name: 'Hedgehog', emoji: '🦔', attack: 3, health: 2, tier: 2, ability: 'Faint: Deal 2 damage to all.' },
  { id: 'peacock', name: 'Peacock', emoji: '🦚', attack: 2, health: 5, tier: 2, ability: 'Hurt: Gain +2 attack.' },
  { id: 'rat', name: 'Rat', emoji: '🐀', attack: 4, health: 5, tier: 2, ability: 'Faint: Summon a 1/1 Dirty Rat for enemy.' },
  { id: 'shrimp', name: 'Shrimp', emoji: '🦐', attack: 2, health: 3, tier: 2, ability: 'Friend sold: Give a random friend +1 health.' },
  { id: 'spider', name: 'Spider', emoji: '🕷️', attack: 2, health: 2, tier: 2, ability: 'Faint: Summon a random Tier 3 pet as a 2/2.' },
  { id: 'turtle', name: 'Turtle', emoji: '🐢', attack: 1, health: 2, tier: 3, ability: 'Faint: Give Melon Armor to friend behind.' },
  { id: 'camel', name: 'Camel', emoji: '🐫', attack: 2, health: 5, tier: 3, ability: 'Hurt: Give friend behind +1/+2.' },
  { id: 'kangaroo', name: 'Kangaroo', emoji: '🦘', attack: 1, health: 2, tier: 3, ability: 'Friend ahead attacks: Gain +2/+2.' },
  { id: 'ox', name: 'Ox', emoji: '🐂', attack: 1, health: 4, tier: 3, ability: 'Friend ahead faints: Gain Melon Armor and +2 attack.' },
];
