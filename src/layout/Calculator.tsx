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
      <Container maxWidth="lg" sx={{ mt: 6, mb: 6, display: { xs: 'block', md: 'flex' } }}>
        <Box>
          <Formula />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            ml: { xs: 0, md: 6 },
            mt: { xs: 4, md: 0 },
            width: { xs: '100%', md: 0 },
          }}
        >
          <Chart />
        </Box>
      </Container>
    </>
  );
};
