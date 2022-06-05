//ヘッダー全体を包括するコンポーネント
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { HeadTitle } from './HeadTitle';
import { HamburgerMenu } from './HamburgerMenu';
import { VFC } from 'react';
import { HeadType } from '../../types/Head/HeadType';

export const Head: VFC<Pick<HeadType, 'handleChangeItem'>> = ({ handleChangeItem }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#99B3FF', color: '#FDFD5F' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: { xs: 'space-between' } }}>
          <HeadTitle />
          <HamburgerMenu handleChangeItem={handleChangeItem} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
