//ハンバーガーメニューのメニューを出力するコンポーネント
import { memo, VFC } from 'react';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { HeadType } from '../../types/Head/HeadType';
import Data from '../../formulas.json';

export const Nav: VFC<Omit<HeadType, 'handleOpenNavMenu'>> = memo(
  ({ anchorElNav, handleCloseNavMenu, handleChangeItem }) => {
    const formulas = Data;

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
        {formulas.map((formula, index) => (
          <MenuItem key={formula['id']} onClick={handleCloseNavMenu}>
            <Typography textAlign="center" onClick={() => handleChangeItem(index)}>
              {formula['title']}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    );
  }
);
