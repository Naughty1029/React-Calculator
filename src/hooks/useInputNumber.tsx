//ユーザーが入力した値を管理するためのカスタムフック
import { useCallback, useEffect, useState } from 'react';

type Formulas = {
  id: number;
  title: string;
  item: Array<string>;
  calc: string;
  rate: boolean;
};

export const useInputNumberArray = (item: any) => {
  const [inputNumberArray, setInputNumberArray] = useState<Array<number | null>>([]);

  useEffect(() => {
    createInitialItemArray(item);
    // eslint-disable-next-line
  }, [item]);

  //フィールドの初期値を設定する関数
  const createInitialItemArray = useCallback((item: Formulas) => {
    const length = item['item'].length;
    const resetArray = [];
    for (let i = 0; i < length; i++) {
      resetArray.push(null);
    }
    setInputNumberArray(resetArray); //InputTextArrayをリセット
  }, []);

  return { inputNumberArray, setInputNumberArray } as const;
};
