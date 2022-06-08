import { atom } from 'recoil';
import { ChartDataType } from '../types/Chart/ChartDataType';

export const chartDataState = atom<ChartDataType[]>({
  key: 'chartDataState',
  default: [
    {
      key: '',
      name: 0,
      num: 0,
    },
  ],
});
