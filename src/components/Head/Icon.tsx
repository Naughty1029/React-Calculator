//ハンバーガーメニューのアイコンを出力するコンポーネント
import { VFC } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { HeadType } from '../../types/Head/HeadType';

export const Icon: VFC<Pick<HeadType, 'handleOpenNavMenu'>> = (props) => {
  const { handleOpenNavMenu } = props;
  return (
    <IconButton
      size="large"
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      onClick={handleOpenNavMenu}
      color="inherit"
    >
      <MenuIcon />
    </IconButton>
  );
};
