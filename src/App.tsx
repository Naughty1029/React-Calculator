import { useState, VFC } from 'react';
import Data from './formulas.json';
import { Head } from './components/Head';
import { useInputNumberArray } from './hooks';
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
  const { inputNumberArray, setInputNumberArray } = useInputNumberArray(item);
  const [result, setResult] = useState<number>(0);

  //選択された計算式の個別データを取得するための関数
  const handleChangeItem = (index: number): void => {
    setItem(formulas[index]);
    setResult(0);
  };

  return (
    <>
      <Head handleChangeItem={handleChangeItem} />
      <Container maxWidth="lg" sx={{ mt: 6 }}>
        <Form
          item={item}
          inputNumberArray={inputNumberArray}
          setInputNumberArray={setInputNumberArray}
          result={result}
          setResult={setResult}
        />
      </Container>
    </>
  );
};

export default App;
