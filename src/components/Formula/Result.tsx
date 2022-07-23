//計算結果を表示するコンポーネント
import { VFC } from 'react';
import { Button, Typography } from '@mui/material';
import { CalcFunctions } from '../../utils/CalcFunctions';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { resultState } from '../../store/resultState';
import { FunctionsType } from '../../types/Functions/FunctionsType';
import { inputNumberArrayState } from '../../store/inputNumberArrayState';
import { formulaState } from '../../store/formulaState';
import { showChartState } from '../../store/showChartState';

export const Result: VFC = () => {
  const [result, setResult] = useRecoilState(resultState);
  const inputNumberArray = useRecoilValue(inputNumberArrayState);
  const formula = useRecoilValue(formulaState);
  const setShowChart = useSetRecoilState(showChartState);

  const handleCalculate = (calc: string, inputNumberArray: Array<number>): void => {
    const typeCalc: keyof FunctionsType = calc as keyof FunctionsType;
    const func = CalcFunctions[typeCalc];
    let result = func(inputNumberArray);

    //計算可能な値かバリデーション
    if (Number.isNaN(result) || !isFinite(result)) {
      alert('計算できる値を入力してください');
      setResult(0);
      setShowChart(false);
      return;
    }

    //計算結果が%表示は100を乗算する
    result = formula.rate ? result * 100 : result;
    //小数点第2位以下を四捨五入
    result = Math.round(result * 10) / 10;

    //Pieチャートの場合は構成比が100％を超えないようにバリデーション
    if (formula['chart'] === 'pie' && result > 100) {
      alert('構成比が100%を超えています');
      setResult(0);
      setShowChart(false);
      return;
    }

    setResult(result);
    setShowChart(true); //グラフ表示フラグをtrueにする
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
