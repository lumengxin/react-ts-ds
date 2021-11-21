## 问题

1. 执行 yarn lint:fixe. 报错`error Parsing error: Must use import to load ES Module...`

原因： node 版本过高。解决：package.json 中加`"type": "module"`

依然报错：`Error [ERR_REQUIRE_ESM]: Must use import to load ES Module: D:\home\projects\react-ts-ds\.eslintrc.js`

- 去掉 package.json 加的；
- package.json 中 babel-eslint 改为@babel/eslint-parser
- .eslintrc.js 中 babel-eslint 改为@babel/eslint-parser
- .eslintrc.js 中加`requireConfigFile: false,`
