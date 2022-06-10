import { atom } from 'recoil';

export const inputNumberArrayState = atom<Array<number>>({
  key: 'inputNumberArrayState',
  default: [],
});
