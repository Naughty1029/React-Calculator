//ユーザーの入力値をリセットするためのカスタムフック
import { useCallback, useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { formulaState } from '../store/formulaState';
import { inputNumberArrayState } from '../store/inputNumberArrayState';
import { FormulaType } from '../types/Formula/FormulaType';

export const useInputNumberArray = () => {
  const formula = useRecoilValue(formulaState);
  const setInputNumberArray = useSetRecoilState(inputNumberArrayState);

  useEffect(() => {
    createInitialItemArray(formula);
    // eslint-disable-next-line
  }, [formula]);

  //フィールドの初期値を設定する関数
  const createInitialItemArray = useCallback(
    (formula: FormulaType) => {
      const length = formula['item'].length;
      const resetArray = [];
      for (let i = 0; i < length; i++) {
        resetArray.push(0);
      }
      setInputNumberArray(resetArray); //InputTextArrayをリセット
    }, // eslint-disable-next-line
    [formula]
  );
};
