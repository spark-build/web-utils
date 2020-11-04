// 将 CamelCase 字符串转换为破折号: CamelCase => camel-case
const lowerToCase = (s: string) => s.replace(/([A-Z])/g, (c: string) => `-${c.toLowerCase()}`);

/**
 * 将传入的 Object css 规则解析为字符类型
 *
 * @export ruleset: { selector: '.aaaa', rules: { borderColor: '#fff', color: '#333' }  }
 *         转化结果: { .aaaa { border-color: #fff; color: #333 } }
 *
 * @param {object} ruleset Object css 规则
 * @param {string} componentClassName 需要添加的 css 样式前缀，避免样式污染
 *
 * @returns {string}
 */
const parseCssRules = (
  ruleset: { selector: string; rules: AnyObject<string> },
  componentClassName: string = '',
): string => {
  // 组件 css 样式
  let css: string = '\n';

  // 遍历 css 规则对象
  for (const selector in ruleset) {
    // 如果存在
    if (selector) {
      // 选择器名称：p、#id、.class 等
      css += `${componentClassName} ${selector} {\n`;

      // 获取选择器的规则设置
      const rules: any = ruleset[selector.toString()];
      if (typeof rules === 'object') {
        // 遍历规则设置
        for (const rule in rules) {
          // 如果存在
          if (rules[rule]) {
            // 将规则添加到样式表中: color: #fff; display: flex;
            css += `  ${lowerToCase(rule)}: ${rules[rule]};\n`;
          }
        }
      }

      css += '}\n';
    }
  }

  return css;
};

/**
 * 将传入的样式数据注入 head 中
 *
 * @param {object} ruleset Object css 规则
 * @param {object} options 额外配置，比如样式前缀等
 * @param {boolean} isNeedParseCssRule 是否需要内部对传入的 css 规则进行解析
 *
 * @returns {void}
 */
export function styleInject(
  ruleset: { selector: string; rules: object } | any,
  options: any = {},
  isNeedParseCssRule = true,
) {
  const head = document.head || document.getElementsByTagName('head')[0];

  // 创建样式表 DOM 元素
  const sheet: any = document.createElement('style');
  sheet.type = 'text/css';

  const {
    id = 'default-style', // 注入到 head 的 style id，用于快速查找
    componentClassName = '', // 选择器前缀，避免样式污染
  } = options;

  // 判断是否已经存在文档中
  const styleDom = document.getElementById(id);
  if (styleDom) {
    // 如果存在，那么就删除
    head.removeChild(styleDom);
  }

  // 设置 id
  sheet.id = id;

  // 插入 head 尾部
  head.appendChild(sheet);

  // 判断是否需要内部解析传入的 css 规则
  if (isNeedParseCssRule) {
    // eslint-disable-next-line no-param-reassign
    ruleset = parseCssRules(ruleset, componentClassName);
  }

  // 将样式写入 style 中 [ 兼容 ie ]
  if (sheet.styleSheet) {
    sheet.styleSheet.cssText = ruleset;
  } else {
    sheet.appendChild(document.createTextNode(ruleset));
  }
}
