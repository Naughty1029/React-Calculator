import './App.css';
import { useEffect, useState } from 'react';
import Data from './formulas.json';
import * as Calculators from './business/Calculators';

function App() {
  const [formulas,setFormulas] = useState([]);
  const [item,setItem] = useState([]);
  const [result,setResult] = useState(0);

  useEffect(()=>{
    setFormulas(Data);
    setItem(Data[0]);
  },[formulas,item])

  // const onChangeValue = (e)=>{
  //   setItem01(e.target.value)
  // }

  const handleCalculate = (item01,item02)=>{
    const func = Calculators[formulas[0]['calc']];
    const result = func(item01,item02);//ここはスプレッド構文とかで受け取れないか？
    setResult(result);
  }

  return (
    <>
    {formulas.map((formula)=>(
      <button key={formula['id']}>{formula['title']}</button>
    ))}
    <br /><br />
        <div>{item["title"]}</div>
        <div>
          {item["item"]?.map((item,index)=>(
            <div key={index}>
              {item}
              <br />
              <input type="text" />
              <br />
            </div>
          ))}
          <button onClick={()=>handleCalculate()}>計算</button>
          <p>{result}</p>
        </div>
    </>
  );
}

export default App;
