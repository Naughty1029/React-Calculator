import { useEffect, useState } from 'react';
import Data from './formulas.json';
import { Functions } from 'business/Calculators';

type Formulas = {
    id: number;
    title: string;
    item: Array<string>;
    calc: string;
    rate: boolean;
};

type FunctionsType = {
    kouseihi: () => number;
    zennenhi: () => number;
};

function App() {
    const formulas = Data;
    const [item, setItem] = useState<Formulas>(formulas[0]);
    const [inputNumberArray, setNumberArray] = useState<Array<number>>([]);
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
        setNumberArray(resetArray); //InputTextArrayをリセット
        setResult(0); //計算結果をリセット
    };

    const handleChangeItem = (index: number): void => {
        setItem(formulas[index]);
        createInitialItemArray();
    };

    const handleInputNumber = (e: React.ChangeEvent<HTMLInputElement>): void => {
        let inputIndex = Number(e.currentTarget.getAttribute('data-index'));
        const inputNumber = Number(e.target.value);
        setNumberArray(inputNumberArray.map((number, index) => (index === inputIndex ? inputNumber : number)));
    };

    const handleCalculate = (calc: string): void => {
        const typeCalc: keyof FunctionsType = calc as keyof FunctionsType;
        const func = Functions[typeCalc];
        const result = func(...inputNumberArray);
        if (result) {
            setResult(result);
        }
    };

    return (
        <>
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
