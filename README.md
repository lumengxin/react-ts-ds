## 问题

1. 执行 yarn lint:fixe. 报错`error Parsing error: Must use import to load ES Module...`

原因： node 版本过高。解决：package.json 中加`"type": "module"`

依然报错：`Error [ERR_REQUIRE_ESM]: Must use import to load ES Module: D:\home\projects\react-ts-ds\.eslintrc.js`

- 去掉 package.json 加的；
- package.json 中 babel-eslint 改为@babel/eslint-parser
- .eslintrc.js 中 babel-eslint 改为@babel/eslint-parser
- .eslintrc.js 中加`requireConfigFile: false,`

## 登录注册

### 单点登录与 [JWT](https://jwt.io)

**JWT:**

- JSON Web Token
- 作用是用户*授权*，而不是用户的身份*认证*
- 用户认证指的是使用用户名、密码来验证当前用户的身份（用户登录，401 Unauthorized 未授权）
- 用户授权指的是当前用户有足够的权限访问特定的资源（403 forbidden 禁止访问）
- 替换 cookie,无状态登录（分布式部署）
- jwt 信息只需要保存在客户端
- 无状态，token 一经发布无法取消（无解）
- 明文传递，token 安全性低（https）

![jwt](./src/docs/jwt.png)

**传统 Session:**

- 用户登录后，服务器会保存登录的 session 信息
- Session ID 会通过 cookie 传递给前端
- http 请求会附带 cookie
- 有状态登录

![session](./src/docs/session.png)

### 单点登录系统（SSO）

- 企业级的付费框架 ForgeRock, 微软的 Micriosoft AM
- 开源的 OpenAM, OpenIDM, OpenDJ

![sso](./src/docs/sso.png)
