import { VFC } from 'react';
import { Head } from '../components/Head';
import { Formula } from '../components/Formula';
import { Chart } from '../components/Chart/Chart';
import { useInputNumberArray } from '../hooks';
import { Container, Box } from '@mui/material';

export const Calculator: VFC = () => {
  useInputNumberArray();
  return (
    <>
      <Head />
      <Container maxWidth="lg" sx={{ mt: 6, display: 'flex' }}>
        <Box>
          <Formula />
        </Box>
        <Box sx={{ flexGrow: 1, ml: 6, width: 0 }}>
          <Chart />
        </Box>
      </Container>
    </>
  );
};
