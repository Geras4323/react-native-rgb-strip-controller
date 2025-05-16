import { useEffect, useState } from 'react';
import { hasIrEmitter, transmit } from 'react-native-infrared-interface';

import { Command, commands } from '@/utils/commands';

export function useIR() {
  const [hasEmitter, setHasEmitter] = useState(false);

  useEffect(() => {
    async function getIREmitter() {
      try {
        return await hasIrEmitter();
      } catch (err) {
        console.log(err);
        return false;
      }
    }
    getIREmitter().then((res) => setHasEmitter(res));
  }, []);

  function emit(command: Command) {
    console.log(command);
    transmit(38000, commands[command].join(' '));
  }

  return { hasEmitter, emit };
}
