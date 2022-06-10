//グラフ表示判定フラグ
import { atom } from 'recoil';

export const showChartState = atom<boolean>({
  key: 'showChartState',
  default: false,
});
