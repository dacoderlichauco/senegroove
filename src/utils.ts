import { Gem} from './types';

export const loadGems = async (): Promise<Gem[]> => {
  try {
    const response = await fetch('/two_label_pattern.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const jsonData = await response.json();

    const gems: Gem[] = jsonData.map((item: { TIME: string; LABEL: string }) => ({
      time: parseFloat(item.TIME),
      label: item.LABEL,
      position: { x: 0, y: 0 }, // Initial position at the top of the screen
      missed: false,
      hit: false,
    }));

    return gems;
  } catch (error) {
    console.error('Error loading gems:', error);
    return [];
  }
};