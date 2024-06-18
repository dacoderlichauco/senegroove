export type Gem = {
    time: number;
    label: 'f' | 'j';
    position: { x: number; y: number };
  };
  
  export type Score = {
    hits: number;
    misses: number;
    earlyHits: number;
  };
  