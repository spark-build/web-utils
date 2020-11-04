/* eslint-disable max-len */
/*
+-----------------------------------------------------------------------------------------------------------------------
|
+-----------------------------------------------------------------------------------------------------------------------
| 常用验证
|
*/

export const idCard = (value: any) =>
  /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/.test(
    value,
  );

// https://github.com/VincentSit/ChinaMobilePhoneNumberRegex/blob/master/README-CN.md
export const phone = (value: any) =>
  /^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[0-35-9]\d{2}|4(?:0\d|1[0-2]|9\d))|9[0-35-9]\d{2}|6[2567]\d{2}|4[579]\d{2})\d{6}$/.test(
    value,
  );

// 验证字段必须完全由字母构成。
export const alpha = (value: any) => /^[a-zA-Z]+$/.test(value);

// 验证字段可能包含字母、数字，以及破折号 (-) 和下划线 ( _ )。
export const alphaDash = (value: any) => /^[a-zA-Z0-9_-]$/.test(value);

// 验证字段必须是完全是字母、数字。
export const alphaNum = (value: any) => /^[A-Za-z0-9]+$/.test(value);

// 微信号，6至20位，以字母开头，字母，数字，减号，下划线
export const weChatNumber = (value: any) => /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/.test(value);

// 微信 app_id
export const wxAppId = (value: any) => /^[wx][A-Za-z0-9]{3,60}$/.test(value);

// eslint-disable-next-line no-useless-escape
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

export const isUrl = (path: string): boolean => reg.test(path);
