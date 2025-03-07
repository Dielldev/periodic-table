export interface Element {
  symbol: string;
  name: string;
  atomicNumber: number;
  row: number;
  column: number;
  category: ElementCategory;
}

export enum ElementCategory {
  AlkaliMetal = 'alkali-metal',
  AlkalineEarthMetal = 'alkaline-earth-metal',
  TransitionMetal = 'transition-metal',
  PostTransitionMetal = 'post-transition-metal',
  Metalloid = 'metalloid',
  Nonmetal = 'nonmetal',
  Halogen = 'halogen',
  NobleGas = 'noble-gas',
  Lanthanide = 'lanthanide',
  Actinide = 'actinide',
  Unknown = 'unknown'
}

export interface GameState {
  currentElement: Element | null;
  attempts: number;
  maxAttempts: number;
  gameOver: boolean;
  guessedCorrectly: boolean;
  guessedPositions: Array<{row: number, column: number}>;
  score: number;
  difficulty: 'easy' | 'medium' | 'hard';
}