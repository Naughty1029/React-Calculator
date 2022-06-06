//計算結果を出力するためのカスタムフック
import { useCallback, useState } from 'react';
import { CalcFunctions } from '../utils/CalcFunctions';

type FunctionsType = {
  kouseihi: () => number;
  zennenhi: () => number;
  tasseiritsu: () => number;
  nobiritsu: () => number;
  jukouritsu: () => number;
  teika01: () => number;
  teika02: () => number;
  genka01: () => number;
  genka02: () => number;
  riekiritsu: () => number;
  genkaritsu: () => number;
  repeat: () => number;
};
export const useResult = () => {
  const [result, setResult] = useState<number>(0);

  const handleCalculate = useCallback((calc: string, inputNumberArray: any): void => {
    const typeCalc: keyof FunctionsType = calc as keyof FunctionsType;
    const func = CalcFunctions[typeCalc];
    const result = func(...inputNumberArray);
    if (Number.isNaN(result)) return;
    setResult(result);
  }, []);

  return { result, setResult, handleCalculate } as const;
};
