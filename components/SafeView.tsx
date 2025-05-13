import { View, ViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function SafeView(props: ViewProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[{ paddingTop: insets.top, paddingBottom: insets.bottom }, props.style]}
      {...props}
    />
  );
}
