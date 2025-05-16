import { Pressable, PressableProps } from 'react-native';

import { cn, WithClassName } from '@/utils/lib';

export function IRButton({ className, children, ...props }: WithClassName & PressableProps) {
  return (
    <Pressable
      className={cn(
        !!className && className,
        'flex size-14 items-center justify-center rounded-full'
      )}
      {...props}>
      {children}
    </Pressable>
  );
}
