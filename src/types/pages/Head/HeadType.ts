export type HeadType = {
  anchorElNav: null | HTMLElement;
  pages: Array<string>;
  handleCloseNavMenu: () => void;
  handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
};
