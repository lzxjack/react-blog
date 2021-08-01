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
