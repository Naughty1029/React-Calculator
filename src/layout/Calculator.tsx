import { VFC } from 'react';
import { useRecoilValue } from 'recoil';
import { formulaState } from '../store/formulaState';
import { Head } from '../components/Head';
import { useInputNumberArray } from '../hooks';
import { Container } from '@mui/material';
import { Formula } from '../components/Formula';

export const Calculator: VFC = () => {
  const formula = useRecoilValue(formulaState);
  const { inputNumberArray, setInputNumberArray } = useInputNumberArray(formula);
  return (
    <>
      <Head />
      <Container maxWidth="lg" sx={{ mt: 6 }}>
        <Formula
          item={formula}
          inputNumberArray={inputNumberArray}
          setInputNumberArray={setInputNumberArray}
        />
      </Container>
    </>
  );
};
