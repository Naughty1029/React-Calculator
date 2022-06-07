import { memo, VFC } from 'react';
import { Typography } from '@mui/material';
import { InputForm } from './InputForm';
import { Result } from './Result';
import { FormulaType } from '../../types/Formula/FormulaType';

type Props = {
  item: FormulaType;
  inputNumberArray: Array<number | null>;
  setInputNumberArray: React.Dispatch<React.SetStateAction<Array<number | null>>>;
};

export const Formula: VFC<Props> = memo(({ item, inputNumberArray, setInputNumberArray }) => {
  return (
    <>
      <Typography variant="h6">{item['title']}</Typography>
      {item['item']?.map((item, index) => (
        <InputForm
          key={index}
          item={item}
          index={index}
          inputNumberArray={inputNumberArray}
          setInputNumberArray={setInputNumberArray}
        />
      ))}
      <Result item={item} inputNumberArray={inputNumberArray} />
    </>
  );
});
