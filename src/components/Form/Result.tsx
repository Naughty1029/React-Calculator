//計算結果を表示するコンポーネント
import { VFC } from 'react';
import { Button, Typography } from '@mui/material';

type Formulas = {
  id: number;
  title: string;
  item: Array<string>;
  calc: string;
  rate: boolean;
};

type Props = {
  item: Formulas;
  inputNumberArray: Array<number>;
  result: number;
  handleCalculate: (calc: string, inputNumberArray: any) => void;
};

export const Result: VFC<Props> = ({ item, inputNumberArray, handleCalculate, result }) => {
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
