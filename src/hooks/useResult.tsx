//計算結果を出力するためのカスタムフック
import { useState } from 'react';
import { CalcFunctions } from '../utils/CalcFunctions';

type FunctionsType = {
  kouseihi: () => number;
  zennenhi: () => number;
};
export const useResult = () => {
  const [result, setResult] = useState<number>(0);

  const handleCalculate = (calc: string, inputNumberArray: any): void => {
    const typeCalc: keyof FunctionsType = calc as keyof FunctionsType;
    const func = CalcFunctions[typeCalc];
    const result = func(...inputNumberArray);
    if (result) {
      setResult(result);
    }
  };
  return { result, setResult, handleCalculate } as const;
};
