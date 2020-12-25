import { astralRegex, stripAnsi } from './regex';
import { isArr, isObj, isStr } from './type';

/**
 * 自身属性中是否具有指定的属性（也就是是否有指定的键）
 */
export const hasOwnProperty = (obj: AnyObject, property: string) =>
  Object.prototype.hasOwnProperty.call(obj, property);

export const isNotEmptyObj = (obj: any) => isObj(obj) && !!Object.keys(obj).length;

export const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

// 判断是否为空
export const isEmpty = (value: any) => value === null || value === undefined;

export const notEmpty = (value: any | any[]) =>
  isArr(value) ? value.every((item) => !isEmpty(item)) : !isEmpty(value);

/**
 * 安全的JSON.parse
 */
export const safeJsonParse = (data: any = '') => {
  try {
    return JSON.parse(data);
  } catch (error) {
    return {};
  }
};

export const cloneDeepByJSON = (value: object) => JSON.parse(JSON.stringify(value));

// 获取数组的最后一位
export const getArrayLastItem = <T = any>(arr: Array<T>, def?: T) => arr[arr.length - 1] || def;

// 获取字符长度
export const stringLength = (input: string) => stripAnsi(input).replace(astralRegex(), ' ').length;

// 获取长度
export const getLength = (value: any) =>
  isStr(value) ? stringLength(value) : value ? value.length : 0;

/**
 * @see https://devblogs.microsoft.com/typescript/announcing-typescript-4-1-beta/#key-remapping-mapped-types
 * @see https://stackoverflow.com/questions/56415826/is-it-possible-to-precisely-type-invert-in-typescript/57726844#57726844
 *
 * @example { a: 'a1', b: 'b1' } ===> { a1: 'a', b1: 'b' }
 */
export function invertObject<T extends Record<PropertyKey, PropertyKey>>(
  obj: T,
): {
  [K in keyof T as T[K]]: K;
};

export function invertObject(obj: any) {
  return Object.keys(obj).reduce((p, k) => ({ ...p, [obj[k]]: Number(k) }), {});
}
