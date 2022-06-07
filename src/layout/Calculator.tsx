import { VFC } from 'react';
import { Head } from '../components/Head';
import { Container } from '@mui/material';
import { Formula } from '../components/Formula';
import { useInputNumberArray } from '../hooks';

export const Calculator: VFC = () => {
  useInputNumberArray();
  return (
    <>
      <Head />
      <Container maxWidth="lg" sx={{ mt: 6 }}>
        <Formula />
      </Container>
    </>
  );
};
