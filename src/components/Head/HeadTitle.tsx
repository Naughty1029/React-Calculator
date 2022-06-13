//Headerのタイトル部分を出力するコンポーネント
import { VFC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CalculateIcon from '@mui/icons-material/Calculate';

export const HeadTitle: VFC = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <CalculateIcon sx={{ display: 'flex', mr: 1 }} />
      <Typography
        noWrap
        component="a"
        href="/"
        sx={{
          fontSize: { sx: '16px', md: '20px' },
          display: 'flex',
          fontFamily: 'monospace',
          fontWeight: 400,
          letterSpacing: '.3rem',
          color: '#FDFD5F',
          textDecoration: 'none',
        }}
      >
        仕事でよく使う計算
      </Typography>
    </Box>
  );
};
