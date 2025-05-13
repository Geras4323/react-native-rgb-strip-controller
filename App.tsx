import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Controller } from './components/Controller';
import { ScreenContent } from './components/ScreenContent';
import './global.css';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />

      <ScreenContent>
        <Controller />
      </ScreenContent>
    </SafeAreaProvider>
  );
}
