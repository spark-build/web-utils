/**
 * 冒泡排序
 *
 * @param {any[]} arr 需要排序的数组
 * @param {Function?} hitFn 自定义匹配处理
 */
export const bubbleSort = <T extends any[]>(
  arr: T,
  hitFn?: (current: T[0], next: T[0]) => boolean,
) => {
  for (let i = 0; i < arr.length; i += 1) {
    // 提前命中，进行跳出
    let complete = false;
    for (let j = 1; j < arr.length - i; j += 1) {
      const result = hitFn ? hitFn(arr[i], arr[j]) : arr[i] > arr[j];
      if (result) {
        // 前后交换位置
        [arr[i], arr[j]] = [arr[j], arr[i]];

        complete = true;

        break;
      }
    }

    // 提前结束
    if (complete) {
      break;
    }
  }

  return arr;
};
