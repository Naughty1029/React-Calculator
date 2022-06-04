import { useEffect, useState } from 'react';
import { Head } from './components/Head';
import { useFormulasItem } from './hooks/useFormulasItem';
import { CalcFunctions } from './utils/CalcFunctions';

type FunctionsType = {
  kouseihi: () => number;
  zennenhi: () => number;
};

function App() {
  const { formulas, handleChangeItem, item } = useFormulasItem();
  const [inputNumberArray, setInputNumberArray] = useState<Array<number>>([]);
  const [result, setResult] = useState<number>(0);

  useEffect(() => {
    createInitialItemArray();
    // eslint-disable-next-line
  }, []);

  //フィールドの初期値を設定する関数
  const createInitialItemArray = () => {
    const length = item['item'].length;
    const resetArray = [];
    for (let i = 0; i < length; i++) {
      resetArray.push(0);
    }
    setInputNumberArray(resetArray); //InputTextArrayをリセット
    setResult(0); //計算結果をリセット
  };

  const handleInputNumber = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let inputIndex = Number(e.currentTarget.getAttribute('data-index'));
    const inputNumber = Number(e.target.value);
    setInputNumberArray(
      inputNumberArray.map((number, index) => (index === inputIndex ? inputNumber : number))
    );
  };

  const handleCalculate = (calc: string): void => {
    const typeCalc: keyof FunctionsType = calc as keyof FunctionsType;
    const func = CalcFunctions[typeCalc];
    const result = func(...inputNumberArray);
    if (result) {
      setResult(result);
    }
  };

  return (
    <>
      <Head />
      {formulas.map((formula, index) => (
        <button key={formula['id']} onClick={() => handleChangeItem(index)}>
          {formula['title']}
        </button>
      ))}
      <br />
      <div>{item['title']}</div>
      <div>
        {item['item']?.map((item, index) => (
          <div key={index}>
            {item}
            <input
              type="number"
              onChange={handleInputNumber}
              data-index={index}
              value={inputNumberArray[index] ? inputNumberArray[index] : 0}
            />
            <br />
          </div>
        ))}
        <button onClick={() => handleCalculate(item['calc'])}>計算</button>
        <p>{result}</p>
      </div>
    </>
  );
}

export default App;
