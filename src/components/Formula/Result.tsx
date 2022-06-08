//計算結果を表示するコンポーネント
import { VFC } from 'react';
import { Button, Typography } from '@mui/material';
import { CalcFunctions } from '../../utils/CalcFunctions';
import { useRecoilState, useRecoilValue } from 'recoil';
import { resultState } from '../../store/resultState';
import { FunctionsType } from '../../types/Functions/FunctionsType';
import { inputNumberArrayState } from '../../store/inputNumberArrayState';
import { formulaState } from '../../store/formulaState';

export const Result: VFC = () => {
  const [result, setResult] = useRecoilState(resultState);
  const inputNumberArray = useRecoilValue(inputNumberArrayState);
  const formula = useRecoilValue(formulaState);

  const handleCalculate = (calc: string, inputNumberArray: any): void => {
    const typeCalc: keyof FunctionsType = calc as keyof FunctionsType;
    const func = CalcFunctions[typeCalc];
    let result = func(...inputNumberArray);
    if (Number.isNaN(result)) return;
    //計算結果が%表示は100を乗算する
    result = formula.rate ? result * 100 : result;
    //小数点第2位以下を四捨五入
    result = Math.round(result * 10) / 10;
    setResult(result);
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={() => handleCalculate(formula['calc'], inputNumberArray)}
        size={'large'}
        sx={{ mt: 4, mb: 4 }}
        style={{ fontSize: '20px' }}
      >
        計算する
      </Button>
      <Typography variant="h6">
        計算結果：{result}
        {formula.rate && '%'}
      </Typography>
    </>
  );
};
