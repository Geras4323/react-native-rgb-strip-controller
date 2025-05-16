import FeatherIcon from '@expo/vector-icons/Feather';
import { Text, View } from 'react-native';

import { IRButton } from './IRButton';

import { useIR } from '@/hooks/useIR';
import { colors, effects } from '@/utils/colors';

export function Controller() {
  const { emit } = useIR();

  return (
    <View className="mb-4 h-136 w-80 gap-1 rounded-xl bg-white px-4 py-20">
      <View className="flex h-16 w-full flex-row gap-1">
        <View className="flex h-full flex-grow flex-row items-center justify-center gap-3 rounded-xl bg-gray-400">
          <IRButton onPress={() => emit('BRIGHTNESS_UP')} className="bg-white">
            <FeatherIcon name="sunrise" size={24} color="black" />
          </IRButton>
          <IRButton onPress={() => emit('BRIGHTNESS_DOWN')} className="bg-white">
            <FeatherIcon name="sunset" size={24} color="black" />
          </IRButton>
        </View>
        <View className="flex h-full flex-grow flex-row items-center justify-center gap-3 rounded-xl bg-gray-400">
          <IRButton onPress={() => emit('OFF')} className="bg-black/80">
            <Text className="text-xl font-semibold text-white">OFF</Text>
          </IRButton>
          <IRButton onPress={() => emit('ON')} className="bg-[#f00c]">
            <Text className="text-xl font-semibold text-white">ON</Text>
          </IRButton>
        </View>
      </View>

      <View className="flex flex-grow flex-row">
        <View className="grid w-3/4 flex-grow grid-cols-3 flex-row flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-b-xl rounded-l-xl bg-gray-400 py-1">
          {colors.map((color) => (
            <IRButton
              key={color.id}
              onPress={() => emit(color.id)}
              style={{ backgroundColor: color.color }}>
              {color.name && (
                <Text className="text-2xl font-semibold text-white">{color.name}</Text>
              )}
            </IRButton>
          ))}
        </View>

        <View className="relative flex w-1/4 flex-grow flex-col">
          <View className="flex h-16 items-center justify-center rounded-r-xl bg-gray-400">
            <IRButton onPress={() => emit('WHITE')} className="bg-white">
              <Text className="text-2xl font-bold">W</Text>
            </IRButton>
          </View>

          {/* <View className="absolute left-0 top-16 size-3 bg-gray-400" /> */}
          <View className="absolute -left-1 top-0 size-3 h-20 bg-gray-400" />

          <View className="flex flex-grow flex-col items-center justify-center gap-2 rounded-xl bg-white">
            {effects.map((effect) => (
              <IRButton key={effect} onPress={() => emit(effect)} className="bg-gray-400">
                <Text className="text-sm font-semibold tracking-tighter">{effect}</Text>
              </IRButton>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}
