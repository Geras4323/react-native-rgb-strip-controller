type Color = {
  id: number;
  color: string;
  name?: string;
};

export const colors = [
  { id: 11, color: '#f00', name: 'R' },
  { id: 12, color: '#0f0', name: 'G' },
  { id: 13, color: '#00f', name: 'B' },
  { id: 21, color: '#ff3f00' },
  { id: 22, color: '#00ff3f' },
  { id: 23, color: '#3f00ff' },
  { id: 31, color: '#ff7f00' },
  { id: 32, color: '#00ff7f' },
  { id: 33, color: '#7f00ff' },
  { id: 41, color: '#ffbf00' },
  { id: 42, color: '#00ffbf' },
  { id: 43, color: '#bf00ff' },
  { id: 51, color: '#ff0' },
  { id: 52, color: '#0ff' },
  { id: 53, color: '#f0f' },
] satisfies Color[];
