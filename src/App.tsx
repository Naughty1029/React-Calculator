import { useEffect, useState, VFC } from 'react';
import Data from './formulas.json';
import { Head } from './components/Head';
import { useInputNumberArray, useResult } from './hooks';
import { Form } from './components/Form';
import { Container } from '@mui/material';

type Formulas = {
  id: number;
  title: string;
  item: Array<string>;
  calc: string;
  rate: boolean;
};

const App: VFC = () => {
  const formulas = Data;
  const [item, setItem] = useState<Formulas>(formulas[0]);
  const { inputNumberArray, setInputNumberArray, createInitialItemArray } = useInputNumberArray();
  const { result, setResult, handleCalculate } = useResult();

  useEffect(() => {
    createInitialItemArray(item);
    // eslint-disable-next-line
  }, []);

  //選択された計算式の個別データを取得するための関数
  const handleChangeItem = (index: number): void => {
    setItem(formulas[index]);
    createInitialItemArray(item);
    setResult(0);
  };

  return (
    <>
      <Head handleChangeItem={handleChangeItem} />
      <Container maxWidth="lg" sx={{ mt: 6 }}>
        <Form
          item={item}
          inputNumberArray={inputNumberArray}
          result={result}
          setInputNumberArray={setInputNumberArray}
          handleCalculate={handleCalculate}
        />
      </Container>
    </>
  );
};

export default App;
