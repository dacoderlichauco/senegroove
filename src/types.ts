export type Gem = {
  time: number;
  label: string;
  position: { x: number, y: number };
  missed?: boolean;
};

export type Countdown = {
  time: number;
  label: string;
};

export type Score = {
  hits: number;
  misses: number;
  earlyHits: number;
};
