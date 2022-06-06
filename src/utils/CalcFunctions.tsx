//計算式を定義するためのファイル
export const CalcFunctions = {
  kouseihi: (...nums: number[]): number => {
    const calc = nums[0] / nums[1];
    return calc;
  },
  zennenhi: (...nums: number[]): number => {
    const calc = nums[0] / nums[1];
    return calc;
  },
  tasseiritsu: (...nums: number[]): number => {
    const calc = nums[0] / nums[1];
    return calc;
  },
  nobiritsu: (...nums: number[]): number => {
    const calc = (nums[0] - nums[1]) / nums[1];
    return calc;
  },
  jukouritsu: (...nums: number[]): number => {
    const calc = nums[0] / nums[1];
    return calc;
  },
  teika01: (...nums: number[]): number => {
    const calc = nums[0] + nums[1];
    return calc;
  },
  teika02: (...nums: number[]): number => {
    const calc = nums[0] + nums[0] * (nums[1] / 100);
    return calc;
  },
  genka01: (...nums: number[]): number => {
    const calc = nums[0] - nums[1];
    return calc;
  },
  genka02: (...nums: number[]): number => {
    const calc = nums[0] * (nums[1] / 100);
    return calc;
  },
  riekiritsu: (...nums: number[]): number => {
    const calc = nums[0] / nums[1];
    return calc;
  },
  genkaritsu: (...nums: number[]): number => {
    const calc = nums[0] / nums[1];
    return calc;
  },
  repeat: (...nums: number[]): number => {
    const calc = nums[0] / nums[1];
    return calc;
  },
};
