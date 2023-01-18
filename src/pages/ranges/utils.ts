import { addDays, chooseRandomly, formatDate, range } from '~/utils';

export type Color = "red" | "green" | 'blue';

const baseDate = new Date('2022-01-01');

const colors: Color[] = ['red', 'green', 'blue'];

export const items: Item[] = range(40, (index) => ({
  date: formatDate(addDays(baseDate, index)),
  color: chooseRandomly(colors),
}));

export const dataSample = {
  start: '2022-01-01',
  end: '2022-01-03',
  color: 'red',
};



export interface Item {
  date: string;
  color: Color;
}

export interface Range {
  start: string;
  end: string;
  color: Color;
}


export const colorToClassName: Record<Color, string> = {
  red: 'bg-red-300 text-red-900',
  green: 'bg-green-300 text-green-900',
  blue: 'bg-blue-300 text-blue-900',
};

