import { VFC } from 'react';
import { ShowBarChart } from './ShowBarChart';
import { useRecoilValue } from 'recoil';
import { formulaState } from '../../store/formulaState';
import { inputNumberArrayState } from '../../store/inputNumberArrayState';
import { resultState } from '../../store/resultState';
import styled from '@emotion/styled';
import { ShowPieChart } from './ShowPieChart';

export const Chart: VFC = () => {
  const formula = useRecoilValue(formulaState);
  const inputNumberArray = useRecoilValue(inputNumberArrayState);
  const result = useRecoilValue(resultState);

  return (
    <>
      {inputNumberArray.includes(null) ? (
        <SDiv>数値を入力して下さい</SDiv>
      ) : formula['chart'] === 'bar' ? (
        <ShowBarChart formula={formula} inputNumberArray={inputNumberArray} result={result} />
      ) : formula['chart'] === 'pie' ? (
        <ShowPieChart formula={formula} inputNumberArray={inputNumberArray} result={result} />
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
