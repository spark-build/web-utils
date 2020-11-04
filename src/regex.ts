/**
 * @ref https://github.com/alibaba/formily/blob/master/packages/shared/src/string.ts
 */

// ansiRegex
export const ansiRegex = () => {
  const pattern = [
    '[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[a-zA-Z\\d]*)*)?\\u0007)',
    '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PRZcf-ntqry=><~]))',
  ].join('|');

  return new RegExp(pattern, 'g');
};

// astralRegex
export const regex = '[\uD800-\uDBFF][\uDC00-\uDFFF]';

export const astralRegex = (opts?: { exact: boolean }) =>
  opts?.exact ? new RegExp(`^${regex}$`) : new RegExp(regex, 'g');

// stripAnsi
export const stripAnsi = <T extends any>(input: T) =>
  typeof input === 'string' ? input.replace(ansiRegex(), '') : input;
