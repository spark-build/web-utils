/**
 * 将 Object 转为 antd 的 options 数据结构
 *
 * @param values
 */
export const transformToSelectOptions = (
  values: AnyObject,
  transfer = Number as typeof Number | typeof String | typeof Boolean,
) => Object.keys(values).map((value) => ({ label: values[value], value: transfer(value) }));
