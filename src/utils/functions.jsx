/**
 * 判断数组a中是否包含了数组b的全部元素
 * @param {Array} a
 * @param {Array} b
 * @return {Boolean}
 */
export const isContained = (a, b) => {
    if (!(a instanceof Array) || !(b instanceof Array)) return false;
    const len = b.length;
    if (a.length < len) return false;
    for (let i = 0; i < len; i++) {
        if (!a.includes(b[i])) return false;
    }
    return true;
};

/**
 * 生成指定范围内的随机整数，左闭右闭
 * @param {Number} Min
 * @param {Number} Max
 * @return {Number}
 */
export const getRandomNum = (Min, Max) => {
    const Range = Max - Min + 1;
    const Rand = Math.random();
    return Min + Math.floor(Rand * Range);
};
