//ヘッダー全体を包括するコンポーネント
import { memo, VFC } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { HeadTitle } from './HeadTitle';
import { HamburgerMenu } from './HamburgerMenu';

export const Head: VFC = memo(() => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#99B3FF', color: '#FDFD5F' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: { xs: 'space-between' } }}>
          <HeadTitle />
          <HamburgerMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
});
