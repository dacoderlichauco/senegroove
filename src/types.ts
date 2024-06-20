export type Gem = {
  time: number;
  label: string;
  position: { x: number; y: number };
  missed: boolean;
  hit: boolean; // Add this line
};

export type Score = {
  hits: number;
  misses: number;
  earlyHits: number;
};
