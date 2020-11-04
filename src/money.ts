/* eslint-disable no-param-reassign */
/**
 * 电商价格计算
 *
 * @description 当前需求：当余数超过了 [分] 之后，那么就需要向上给最后的 [分] +1
 *
 * @param {number} num
 * @returns {number}
 */
export const ECommerceCommodityPriceCalculation = (num: StringNumberUnion) => {
  /**
   * @description 当前需求：当余数超过了 [分] 之后，那么就需要向上给最后的 [分] +1
   */
  const numStr = `${num}`;
  // 判断是否有余数
  if (numStr.includes('.')) {
    const numStrArr = numStr.split('.');

    // 判断余数是否超过了 [分]
    if (numStrArr[1].length > 2) {
      // 如果超过了，那么就向上给最后的 [分] +1
      numStrArr[1] = numStrArr[1].slice(0, 2);
      numStrArr[1] = (parseInt(numStrArr[1], 10) + 1).toString();

      // 这里需要处理一下当 [角] 为 0 的情况，因为它会被 parseInt 转化的时候给去掉了，这里需要给它补上
      if (numStrArr[1].length === 1) {
        numStrArr[1] = `0${numStrArr[1]}`;
      }

      num = parseFloat(numStrArr.join('.'));
    }
  }

  return num;
};

/**
 * 获取小数点的位数
 */
export const getDecimalPointLength = (value: StringNumberUnion) => {
  const valueStr = `${value}`;

  if (!valueStr || !valueStr.includes('.')) {
    return 0;
  }

  const [, len] = valueStr.split('.');

  return len.length;
};

// 移动小数点位置
export const movingDecimalPosition = (value: StringNumberUnion, length: number) => {
  // eslint-disable-next-line no-param-reassign
  value = `${value}`;
  if (!value || !value.includes('.')) {
    return Number.isNaN(value) ? Number(value) : 0;
  }

  const valueSplit = value.split('.');
  if (!valueSplit[1]) {
    return value;
  }

  const laseString = valueSplit[1].substr(0, length);

  const joinValue =
    valueSplit[0] === '0'
      ? [laseString, valueSplit[1].substr(length, length)]
      : [valueSplit[0], laseString];

  return joinValue[1]
    ? parseFloat(joinValue.join('.'))
    : Number.isNaN(Number(joinValue[0]))
    ? Number(joinValue[0])
    : 0;
};

/**
 * 原样地截取小数点的指定位数, 不会像 toFixed、floor 会向上、向下得取整
 *
 * @example 12.23456 => subDecimal(12.23456, 2) => 12.23
 *
 * @param {any} value
 * @param { fractionDigits?: number, forceFormat?: boolean }
 */
export const subDecimal = (
  value: StringNumberUnion,
  options?: { fractionDigits?: number; forceFormat: boolean },
) => {
  const innerValue = String(value);

  const { fractionDigits = 2, forceFormat = true } = options || {};

  if (!value || !innerValue.includes('.')) {
    return Number.isNaN(Number(value)) ? Number(value) : 0;
  }

  const valueSplit = innerValue.split('.');

  // 如果不是强制转化, 那么如果在输入 2. 这种情况下，不做强制转换，而是原样返回
  // 这样的场景存在于输入框
  if (!forceFormat && !valueSplit[1]) {
    return value;
  }

  valueSplit[1] = valueSplit[1].substr(0, fractionDigits);

  return parseFloat(valueSplit.join('.'));
};
