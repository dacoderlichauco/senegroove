import { Gem, Countdown } from './types';

export const loadGems = async (): Promise<Gem[]> => {
  const response = await fetch('/two_label_pattern copy.json'); // Since the JSON is in the public directory
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data.map((item: any) => ({
    time: parseFloat(item.TIME),
    label: item.LABEL,
    position: { x: item.LABEL === 'f' ? 0 : 1, y: 0 },
  }));
};

export const loadCountdown = async (): Promise<Countdown[]> => {
  const response = await fetch('/countdown_pattern.json'); // Assuming a separate JSON for countdown
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data.map((item: any) => ({
    time: parseFloat(item.TIME),
    label: item.LABEL,
  }));
};

export const getCurrentTime = (videoElement: HTMLVideoElement): number => {
  return videoElement.currentTime;
};
