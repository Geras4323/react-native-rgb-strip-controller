import { Command } from './commands';

type Color = {
  id: Command;
  color: string;
  name?: string;
};

export const colors = [
  { id: 'RED', color: '#f00', name: 'R' },
  { id: 'GREEN', color: '#0f0', name: 'G' },
  { id: 'BLUE', color: '#00f', name: 'B' },
  { id: 'R1C1', color: '#ff3f00' },
  { id: 'R1C2', color: '#00ff3f' },
  { id: 'R1C3', color: '#3f00ff' },
  { id: 'R2C1', color: '#ff7f00' },
  { id: 'R2C2', color: '#00ff7f' },
  { id: 'R2C3', color: '#7f00ff' },
  { id: 'R3C1', color: '#ffbf00' },
  { id: 'R3C2', color: '#00ffbf' },
  { id: 'R3C3', color: '#bf00ff' },
  { id: 'R4C1', color: '#ff0' },
  { id: 'R4C2', color: '#0ff' },
  { id: 'R4C3', color: '#f0f' },
] satisfies Color[];

export const effects = ['FLASH', 'STROBE', 'FADE', 'SMOOTH'] satisfies Command[];
