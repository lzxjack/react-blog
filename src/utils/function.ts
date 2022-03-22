/**
 * 生成指定范围内的随机整数，左闭右闭
 * @param {Number} Min
 * @param {Number} Max
 * @return {Number}
 */
export const getRandomNum = (Min: number, Max: number) => {
  const Range = Max - Min + 1;
  const Rand = Math.random();
  return Min + Math.floor(Rand * Range);
};
