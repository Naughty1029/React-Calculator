//ユーザーが入力した値を管理するためのカスタムフック
import { useCallback, useState } from 'react';

type Formulas = {
  id: number;
  title: string;
  item: Array<string>;
  calc: string;
  rate: boolean;
};

export const useInputNumberArray = () => {
  const [inputNumberArray, setInputNumberArray] = useState<Array<number>>([]);

  //フィールドの初期値を設定する関数
  const createInitialItemArray = useCallback((item: Formulas) => {
    const length = item['item'].length;
    const resetArray = [];
    for (let i = 0; i < length; i++) {
      resetArray.push(0);
    }
    setInputNumberArray(resetArray); //InputTextArrayをリセット
  }, []);

  return { inputNumberArray, setInputNumberArray, createInitialItemArray } as const;
};
