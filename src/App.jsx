import { useEffect, useState } from 'react';
import Data from './formulas.json';
import * as Calculators from './business/Calculators';

function App() {
  const formulas = Data;
  const [item,setItem] = useState(formulas[0]);
  const [inputTextArray,setInputTextArray] = useState([]);
  const [result,setResult] = useState(0);

  useEffect(()=>{
    createInitialItemArray();
  },[])

  //テキストフィールドの初期値を設定する関数
  const createInitialItemArray = ()=>{
    const length = item["item"].length;
    const Array = [];
    for (let i = 0; i < length; i++) {
      Array.push(0);
    }
    setInputTextArray(Array);
    setResult(0);
  }

  const handleChangeItem = (index)=>{
    setItem(formulas[index]);
    createInitialItemArray();
  }

  const handleInputText = (e)=>{
    const textIndex = parseInt(e.currentTarget.getAttribute('data-index'), 10);
    const inputText = e.target.value;
    setInputTextArray(
      inputTextArray.map((text,index) => index === textIndex ? inputText : text)
    );
  }

  const handleCalculate = (calc)=>{
    const func = Calculators[calc];
    const result = func(...inputTextArray);
    if(result){
      setResult(result);
    }
  }

  return (
    <>
      {formulas.map((formula,index)=>(
        <button key={formula['id']} onClick={()=>handleChangeItem(index)}>{formula['title']}</button>
      ))}
      <br />
      <div>{item["title"]}</div>
      <div>
        {item["item"]?.map((item,index)=>(
          <div key={index}>
            {item}
            <input 
            type="text" 
            onChange={handleInputText} 
            data-index={index} 
            value={inputTextArray[index]?inputTextArray[index]:''} />
            <br />
          </div>
        ))}
        <button onClick={()=>handleCalculate(item["calc"])}>計算</button>
        <p>{result}</p>
      </div>
    </>
  );
}

export default App;
