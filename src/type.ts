/**
 * 判断是否是指定 js 数据类型
 *
 * @param {string} type 数据类型
 * @param {any} value 需要判断的值
 *
 * @returns {boolean}
 */
export const isType = <T>(type: string) => (value: any): value is T =>
  value != null && Object.prototype.toString.call(value) === `[object ${type}]`;

export const isFn = isType<(...args: any[]) => any>('Function');

export const isArr = Array.isArray || isType<unknown[]>('Array');

export const isObj = isType<object>('Object');

export const isStr = isType<string>('String');

export const isNum = isType<number>('Number');

export const isBool = isType<number>('Boolean');

// 是否中文字符
export const isCnCharacter = (str: string) => /[\u4E00-\u9FA5\uFE30-\uFFA0]/.test(str);
