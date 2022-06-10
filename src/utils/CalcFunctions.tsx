//計算式を定義するためのファイル
export const CalcFunctions = {
  kouseihi: (...nums: Array<number>): number => {
    const calc = nums[1] / nums[0];
    return calc;
  },
  zennenhi: (...nums: Array<number>): number => {
    const calc = nums[1] / nums[0];
    return calc;
  },
  tasseiritsu: (...nums: Array<number>): number => {
    const calc = nums[1] / nums[0];
    return calc;
  },
  nobiritsu: (...nums: Array<number>): number => {
    const calc = (nums[1] - nums[0]) / nums[0];
    return calc;
  },
  jukouritsu: (...nums: Array<number>): number => {
    const calc = nums[1] / nums[0];
    return calc;
  },
  teika01: (...nums: Array<number>): number => {
    const calc = nums[0] + nums[1];
    return calc;
  },
  teika02: (...nums: Array<number>): number => {
    const calc = nums[0] + nums[0] * (nums[1] / 100);
    return calc;
  },
  genka01: (...nums: Array<number>): number => {
    const calc = nums[0] - nums[1];
    return calc;
  },
  genka02: (...nums: Array<number>): number => {
    const calc = nums[0] * (nums[1] / 100);
    return calc;
  },
  riekiritsu: (...nums: Array<number>): number => {
    const calc = nums[1] / nums[0];
    return calc;
  },
  genkaritsu: (...nums: Array<number>): number => {
    const calc = nums[1] / nums[0];
    return calc;
  },
  repeat: (...nums: Array<number>): number => {
    const calc = nums[1] / nums[0];
    return calc;
  },
};
