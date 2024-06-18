import { Gem } from './types';

export const loadGems = async (): Promise<Gem[]> => {
  const response = await fetch('/two_label_pattern.json'); // Since the JSON is in the public directory
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

export const getCurrentTime = (videoElement: HTMLVideoElement): number => {
  return videoElement.currentTime;
};
