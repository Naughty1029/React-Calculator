export type HeadType = {
  anchorElNav: null | HTMLElement;
  handleCloseNavMenu: () => void;
  handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
  handleChangeItem: (index: number) => void;
};
