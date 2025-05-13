import { useEffect, useState } from 'react';
import { hasIrEmitter } from 'react-native-infrared-interface';

export function useIR() {
  const [hasEmitter, setHasEmitter] = useState(false);

  // useEffect(() => {
  //   async function getIREmitter() {
  //     const hasEmitter = await hasIrEmitter();
  //     console.log('run');
  //     return hasEmitter;
  //   }
  //   getIREmitter().then((res) => setHasEmitter(res));
  // }, []);

  useEffect(() => {
    console.log('run');
    async function getIREmitter() {
      try {
        console.log('run2');
        const hasEmitter = await hasIrEmitter();
        console.log('run3');
        return hasEmitter;
      } catch (err) {
        console.log(err);
      }
    }
    getIREmitter().then((res) => typeof res === 'boolean' && setHasEmitter(res));
  }, []);

  return hasEmitter;
}
