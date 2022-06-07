//計算結果を表示するコンポーネント
import { VFC } from 'react';
import { Button, Typography } from '@mui/material';
import { CalcFunctions } from '../../utils/CalcFunctions';
import { useRecoilState } from 'recoil';
import { resultState } from '../../store/resultState';
import { FunctionsType } from '../../types/Functions/FunctionsType';
import { FormulaType } from '../../types/Formula/FormulaType';

type Props = {
  item: FormulaType;
  inputNumberArray: Array<number | null>;
};

export const Result: VFC<Props> = ({ item, inputNumberArray }) => {
  const [result, setResult] = useRecoilState(resultState);

  const handleCalculate = (calc: string, inputNumberArray: any): void => {
    const typeCalc: keyof FunctionsType = calc as keyof FunctionsType;
    const func = CalcFunctions[typeCalc];
    const result = func(...inputNumberArray);
    if (Number.isNaN(result)) return;
    setResult(result);
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={() => handleCalculate(item['calc'], inputNumberArray)}
        size={'large'}
        sx={{ mt: 4, mb: 4 }}
        style={{ fontSize: '20px' }}
      >
        計算する
      </Button>
      <Typography variant="h6">計算結果：{result}</Typography>
    </>
  );
};
