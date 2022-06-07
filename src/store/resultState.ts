import { atom } from 'recoil';

export const resultState = atom<number>({
  key: 'resultState',
  default: 0,
});
