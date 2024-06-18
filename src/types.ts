export type Gem = {
  time: number;
  label: 'f' | 'j';
  position: { x: number; y: number };
  missed?: boolean; // Add this property to track if the gem was missed
};

export type Score = {
  hits: number;
  misses: number;
  earlyHits: number;
};
