//ハンバーガーメニューを出力するコンポーネント
import * as React from 'react';
import Box from '@mui/material/Box';
import { Nav } from './Nav';
import { Icon } from './Icon';

const pages = ['Products', 'Pricing', 'Blog'];

export const HamburgerMenu = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <Icon handleOpenNavMenu={handleOpenNavMenu} />
      <Nav anchorElNav={anchorElNav} pages={pages} handleCloseNavMenu={handleCloseNavMenu} />
    </Box>
  );
};
