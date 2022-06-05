//ユーザーが入力した値を管理するためのカスタムフック
import { useState } from 'react';

type Formulas = {
  id: number;
  title: string;
  item: Array<string>;
  calc: string;
  rate: boolean;
};

export const useInputNumberArray = () => {
  const [inputNumberArray, setInputNumberArray] = useState<Array<number | null>>([]);

  //フィールドの初期値を設定する関数
  const createInitialItemArray = (item: Formulas) => {
    const length = item['item'].length;
    const resetArray = [];
    for (let i = 0; i < length; i++) {
      resetArray.push(0);
    }
    setInputNumberArray(resetArray); //InputTextArrayをリセット
  };

  //入力値を受け取る関数
  const handleInputNumber = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let inputIndex = Number(e.currentTarget.getAttribute('data-index'));
    const inputNumber = Number(e.target.value);
    setInputNumberArray(
      inputNumberArray.map((number, index) => (index === inputIndex ? inputNumber : number))
    );
  };

  return { inputNumberArray, createInitialItemArray, handleInputNumber } as const;
};
