/**
 * 将 Object 转为 antd 的 options 数据结构
 *
 * @param values
 */
export const transformToSelectOptions = (values: AnyObject) =>
  Object.keys(values).map((value) => ({ label: values[value], value }));
