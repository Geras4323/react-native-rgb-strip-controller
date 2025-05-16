export const cn = (...classes: (string | boolean)[]) => classes.filter(Boolean).join(' ');

export type WithClassName = {
  className?: string;
};
