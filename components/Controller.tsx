import { Text, View } from 'react-native';
import { IRButton } from './IRButton';
import FeatherIcon from '@expo/vector-icons/Feather';
import { colors } from '@/utils/colors';
// import { SunriseIcon, SunsetIcon } from 'lucide-react-native';
// import { hasIrEmitter, getCarrierFrequencies, transmit } from 'react-native-infrared-interface';
// import { useEffect, useState } from 'react';

// import { useIR } from '../hooks/useIR';

export function Controller() {
  // const hasIR = useIR();

  return (
    // <View className="mb-4 h-136 w-80 rounded-xl bg-red-200/20 px-6">
    <View className="mb-4 h-136 w-80 gap-1 rounded-xl bg-white px-4 py-20">
      <View className="flex h-16 w-full flex-row gap-1">
        <View className="flex h-full flex-grow flex-row items-center justify-center gap-3 rounded-xl bg-gray-400">
          <IRButton className="bg-white">
            <Text className="text-2xl font-bold">
              <FeatherIcon name="sunrise" size={24} className="text-black" />
            </Text>
          </IRButton>
          <IRButton className="bg-white">
            <Text className="text-2xl font-bold">
              <FeatherIcon name="sunset" size={24} className="text-black" />
            </Text>
          </IRButton>
        </View>
        <View className="flex h-full flex-grow flex-row items-center justify-center gap-3 rounded-xl bg-gray-400">
          <IRButton className="bg-black/80">
            <Text className="text-xl font-semibold text-white">OFF</Text>
          </IRButton>
          <IRButton className="bg-[#f00c]">
            <Text className="text-xl font-semibold text-white">ON</Text>
          </IRButton>
        </View>
      </View>

      <View className="flex flex-grow flex-row">
        <View className="grid w-3/4 flex-grow grid-cols-3 flex-row flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-b-xl rounded-l-xl bg-gray-400 py-1">
          {colors.map((color) => (
            <IRButton key={color.id} style={{ backgroundColor: color.color }}>
              <Text className="text-2xl font-semibold text-white">{color.name}</Text>
            </IRButton>
          ))}
        </View>

        <View className="relative flex w-1/4 flex-grow flex-col">
          <View className="flex h-16 items-center justify-center rounded-r-xl bg-gray-400">
            <IRButton className="bg-white">
              <Text className="text-2xl font-bold">W</Text>
            </IRButton>
          </View>

          <View className="absolute left-0 top-16 size-3 bg-gray-400" />

          <View className="flex flex-grow flex-col items-center justify-center gap-2 rounded-xl bg-white">
            <IRButton className="bg-gray-400">
              <Text className="text-sm font-semibold tracking-tighter">FLASH</Text>
            </IRButton>
            <IRButton className="bg-gray-400">
              <Text className="text-sm font-semibold tracking-tighter">STROBE</Text>
            </IRButton>
            <IRButton className="bg-gray-400">
              <Text className="text-sm font-semibold tracking-tighter">FADE</Text>
            </IRButton>
            <IRButton className="bg-gray-400">
              <Text className="mt-4 translate-y-0.5 text-sm font-semibold tracking-tighter">
                SMOOTH
              </Text>
            </IRButton>
          </View>
        </View>
      </View>
    </View>
  );
}

{
  /* <Text className="text-xl text-white">{hasIR ? 'yes' : 'no'}</Text> */
}
