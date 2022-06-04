import { useState } from 'react';
import Data from '../formulas.json';

type Formulas = {
  id: number;
  title: string;
  item: Array<string>;
  calc: string;
  rate: boolean;
};
//計算式データを取得するためのカスタムフック
export const useFormulasItem = () => {
  const formulas = Data;
  const [item, setItem] = useState<Formulas>(formulas[0]);

  //選択された計算式の個別データを取得するための関数
  const handleChangeItem = (index: number): void => {
    setItem(formulas[index]);
    // createInitialItemArray();
  };
  return { formulas, handleChangeItem, item };
};
