import { useEffect, useState, VFC } from 'react';
import Data from './formulas.json';
import { Head } from './components/Head';
import { useInputNumberArray, useResult } from './hooks';

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
  const { inputNumberArray, createInitialItemArray, handleInputNumber } = useInputNumberArray();
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
      <Head />
      {formulas.map((formula, index) => (
        <button key={formula['id']} onClick={() => handleChangeItem(index)}>
          {formula['title']}
        </button>
      ))}
      <div>{item['title']}</div>
      <div>
        {item['item']?.map((item, index) => (
          <div key={index}>
            {item}
            <input
              type="text"
              onChange={handleInputNumber}
              data-index={index}
              value={inputNumberArray[index] ? inputNumberArray[index]! : 0}
            />
            <br />
          </div>
        ))}
        <button onClick={() => handleCalculate(item['calc'], inputNumberArray)}>計算</button>
        <p>{result}</p>
      </div>
    </>
  );
};

export default App;
