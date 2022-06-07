import { atom } from 'recoil';

export const inputNumberArrayState = atom<Array<number | null>>({
  key: 'inputNumberArrayState',
  default: [],
});
