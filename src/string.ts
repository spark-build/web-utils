import { isEmpty } from './helpers';

export const convertToChinese = (num: number) => {
  if (isEmpty(num)) {
    return '零';
  }

  const chineseMaps = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];

  const result = [] as string[];
  const num2str = num.toString();

  for (let index = 0; index < num2str.length; index += 1) {
    const key = num2str.charAt(index);

    result.push(chineseMaps[Number(key)]);
  }

  return result.join('');
};

export const convertNumberToChinese = (money: string) => {
  const cns = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
  const cnUnits = ['', '拾', '佰', '仟', '万', '亿', '兆']; // 基本单位
  const cnDecUnits = ['角', '分', '毫', '厘']; // 小数后的单位
  const cnIntegerYuan = '元';

  if (!money) {
    return cns[0] + cnIntegerYuan;
  }

  let cnMoney = '';
  let decimalMoney = '';
  const [integer, decimal] = money.split('.');

  for (let i = 0; i < integer.length; i += 1) {
    cnMoney += cns[Number(integer[i])];
  }

  cnMoney = cnMoney
    .split('')
    .reverse()
    .map((str, index) => (str === cns[0] ? undefined : str + cnUnits[index]))
    .filter(Boolean)
    .reverse()
    .join('');

  cnMoney += cnIntegerYuan;

  // 处理小数
  if (decimal) {
    for (let i = 0; i < decimal.length; i += 1) {
      decimalMoney += cns[Number(decimal[i])];
    }

    decimalMoney = decimalMoney
      .split('')
      .map((str, index) => (str === cns[0] ? undefined : str + cnDecUnits[index]))
      .filter(Boolean)
      .join('');
  }

  cnMoney += decimalMoney || '整';

  return cnMoney;
};

/**
 * 生成随机字符串
 *
 * @param {string} len 字符长度
 * @param {string} type 生成的类型
 *
 * @returns {string}
 */
export const strRandom = (len = 16, type: 'string' | 'number' | 'all' = 'all') => {
  const number = '0123456789';
  // todo: 去掉了某些特殊的字符, 后面可以参考加上
  const letter = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let chars = '';
  switch (type) {
    case 'number':
      chars = number;
      break;
    case 'string':
      chars = letter;
      break;
    default:
      chars = letter + number;
      break;
  }

  let strValue = '';
  for (let index = 0; index < len; index += 1) {
    strValue += chars[Math.floor(Math.random() * chars.length - 1 + 1)] || '1';
  }

  return strValue;
};
