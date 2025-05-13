import { PropsWithChildren } from 'react';
import { Pressable, StyleProp, ViewStyle } from 'react-native';

import { cn } from '@/utils/lib';
import { WithClassName } from '@/utils/types';

export function IRButton({
  className,
  children,
  style,
}: WithClassName & PropsWithChildren & { style?: StyleProp<ViewStyle> }) {
  return (
    <Pressable
      style={style}
      className={cn(
        !!className && className,
        'flex size-14 items-center justify-center rounded-full'
      )}>
      {children}
    </Pressable>
  );
}
