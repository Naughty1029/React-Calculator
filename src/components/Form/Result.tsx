//計算結果を表示するコンポーネント
import { VFC } from 'react';
import { Button, Typography } from '@mui/material';
import { CalcFunctions } from '../../utils/CalcFunctions';

type Formulas = {
  id: number;
  title: string;
  item: Array<string>;
  calc: string;
  rate: boolean;
};

type Props = {
  item: Formulas;
  inputNumberArray: Array<number | null>;
  result: number;
  setResult: React.Dispatch<React.SetStateAction<number>>;
};

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

export const Result: VFC<Props> = ({ item, inputNumberArray, result, setResult }) => {
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
