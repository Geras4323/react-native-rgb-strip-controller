import FeatherIcon from '@expo/vector-icons/Feather';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import { SafeView } from './SafeView';

import { useIR } from '@/hooks/useIR';
import { cn } from '@/utils/lib';

type ScreenContentProps = {
  children?: React.ReactNode;
};

export const ScreenContent = ({ children }: ScreenContentProps) => {
  const { hasEmitter } = useIR();

  const [isBadgeShown, setIsBadgeShown] = useState(true);

  useEffect(() => {
    if (hasEmitter) {
      setTimeout(() => setIsBadgeShown(false), 3000);
    }
  }, [hasEmitter]);

  return (
    <SafeView className="relative flex-1 items-center justify-end bg-black">
      {/* <Pressable
        onPress={() => setIsBadgeShown((prev) => !prev)}
        className="absolute left-2 top-16 rounded-md bg-white/80 px-2.5 py-1">
        <Text>Switch badge</Text>
      </Pressable> */}

      {hasEmitter ? (
        <View
          className={cn(
            !isBadgeShown && 'hidden',
            'absolute right-2 top-16 flex flex-row items-center gap-2 rounded-lg border border-[#30f3a2] px-2.5 py-1'
          )}>
          <FeatherIcon name="check-circle" size={16} color="#30f3a2" className="mt-px" />
          <Text className="text-[#30f3a2]">Device has IR blaster</Text>
        </View>
      ) : (
        <View className="absolute right-2 top-16 flex flex-row items-center gap-2 rounded-lg border border-[#f00] px-2.5 py-1">
          <FeatherIcon name="alert-circle" size={16} color="#f00" className="mt-px" />
          <Text className="text-[#f00]">No IR blaster found</Text>
        </View>
      )}

      {children}
    </SafeView>
  );
};
