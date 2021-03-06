//ハンバーガーメニューを出力するコンポーネント
import React, { VFC, useState, memo } from 'react';
import Box from '@mui/material/Box';
import { Nav } from './Nav';
import { Icon } from './Icon';

export const HamburgerMenu: VFC = memo(() => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Icon handleOpenNavMenu={handleOpenNavMenu} />
      <Nav anchorElNav={anchorElNav} handleCloseNavMenu={handleCloseNavMenu} />
    </Box>
  );
});
