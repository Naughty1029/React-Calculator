import { memo, VFC } from 'react';
import { Typography } from '@mui/material';
import { InputForm } from './InputForm';
import { Result } from './Result';
import { useRecoilValue } from 'recoil';
import { formulaState } from '../../store/formulaState';

export const Formula: VFC = memo(() => {
  const formula = useRecoilValue(formulaState);
  return (
    <>
      <Typography variant="h6">{formula['title']}</Typography>
      {formula['item']?.map((item, index) => (
        <InputForm key={index} item={item} index={index} />
      ))}
      <Result />
    </>
  );
});
