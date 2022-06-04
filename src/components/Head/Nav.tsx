//ハンバーガーメニューのメニューを出力するコンポーネント
import { VFC } from 'react';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { HeadType } from '../../types/Head/HeadType';

export const Nav: VFC<Omit<HeadType, 'handleOpenNavMenu'>> = (props) => {
  const { anchorElNav, pages, handleCloseNavMenu } = props;
  return (
    <Menu
      id="menu-appbar"
      anchorEl={anchorElNav}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      open={Boolean(anchorElNav)}
      onClose={handleCloseNavMenu}
    >
      {pages.map((page) => (
        <MenuItem key={page} onClick={handleCloseNavMenu}>
          <Typography textAlign="center">{page}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );
};
