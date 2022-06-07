import { atom } from 'recoil';
import Data from '../formulas.json';
import { FormulaType } from '../types/Formula/FormulaType';

export const formulaState = atom<FormulaType>({
  key: 'formulaState',
  default: Data[0],
});
