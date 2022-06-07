//ハンバーガーメニューのメニューを出力するコンポーネント
import { memo, VFC } from 'react';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { HeadType } from '../../types/Head/HeadType';
import Data from '../../formulas.json';
import { useSetRecoilState } from 'recoil';
import { resultState } from '../../store/resultState';
import { formulaState } from '../../store/formulaState';

export const Nav: VFC<Omit<HeadType, 'handleOpenNavMenu'>> = memo(
  ({ anchorElNav, handleCloseNavMenu }) => {
    const formulas = Data;
    const setResult = useSetRecoilState(resultState);
    const setFormula = useSetRecoilState(formulaState);

    //選択された計算式の個別データを取得するための関数
    const handleChangeItem = (index: number): void => {
      setFormula(formulas[index]);
      setResult(0);
    };

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
          <MenuItem key={formula['id']} onClick={() => handleChangeItem(index)}>
            <Typography textAlign="center">{formula['title']}</Typography>
          </MenuItem>
        ))}
      </Menu>
    );
  }
);
