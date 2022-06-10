import { VFC } from 'react';
import { ShowBarChart } from './ShowBarChart';
import { useRecoilValue } from 'recoil';
import { formulaState } from '../../store/formulaState';
import { resultState } from '../../store/resultState';
import styled from '@emotion/styled';
import { ShowPieChart } from './ShowPieChart';
import { showChartState } from '../../store/showChartState';

export const Chart: VFC = () => {
  const formula = useRecoilValue(formulaState);
  const showChart = useRecoilValue(showChartState);
  const result = useRecoilValue(resultState);

  return (
    <>
      {!showChart ? (
        <SDiv>数値を入力して下さい</SDiv>
      ) : formula['chart'] === 'bar' ? (
        <ShowBarChart formula={formula} result={result} />
      ) : formula['chart'] === 'pie' ? (
        <ShowPieChart formula={formula} result={result} />
      ) : (
        <SDiv>表示するグラフはありません</SDiv>
      )}
    </>
  );
};

const SDiv = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
