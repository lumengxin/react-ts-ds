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

## 规范化

[对现有 React 项目进行规范及优化](https://juejin.cn/post/6987685788410445855)

[如何配置 Git Commit Message](https://zhuanlan.zhihu.com/p/69635847)

[commit 规范+commitlint+CHANGELOG 自动生成一条龙服务](https://juejin.cn/post/6934292467160514567)

#### 编辑器规范

#### 代码格式规范

#### js 及 react 代码语法规范

#### commit 提交规范

1. commitizen/cz-cli： 替代你的 git commit（帮助我们生成符合规范的 commit message）

- 全局安装：npm install commitizen -g // git cz | git-cz 代替 git commit
- 项目中安装：

  > npm i commitizen -D;

  package.json 中配置 scipt 命令："commit": "git-cz"。npm run commit 代替 git commit

- 无需安装：npx cz; (npm 5.2+)

2. cz-customizable：自定义 adapter, 可自定义的 Commitizen 插件。比如：默认的提交 types 可能特别多，有些时候我们可能只需要其中的某些 type，或者自定义 type。（或者使用 cz-conventional-changelog。一个 commitizen 的 adapter（适配器），一个符合 Angular 团队规范的 preset。按照我们指定的规范帮助我们生成 commit message。）

> yarn add cz-customizable -D

配置 package.json:

```
{
    "config": {
        "commitizen": {
          "path": "node_modules/cz-customizable"
        }
    }
}
```

根目录，配置.cz-config.js

3. commit 校验

如果是使用 cz-customizable 适配器做了破坏 Angular 风格的提交说明配置，那么不能使用@commitlint/config-conventional 规则进行提交说明校验，可以使用 commitlint-config-cz 对定制化提交说明进行校验。

> yarn add -D commitlint-config-cz @commitlint/cli

配置`.commitlintrc.js` 文件：

```
module.exports = {
  extends: [
    'cz'
  ],
  // 需要和.cz-config.js中规则保持一致
  rules: {
    // ...
  }
}
```

4. 通过 git hook 在 commit-msg 阶段进行 commit message lint。

> npx husky add .husky/commit-msg 'npx --no-install commitlint --edit $1'

#### 版本管理及日志规范

自动生成 CHANGELOG，语义化我们的版本（Semantic Versioning）。

> yarn add standard-version -D

配置 package.json

```
{
  "script": {
    // .....
    "release": "standard-version"
  }
}
```

#### 其他

##### emoji 使用

github 支持[gitmoji](https://gitmoji.dev/)

1. .cz-config.js 中 value 加图标编码

   > { value: ':construction_worker: build', name: '👷build: 构建工具或外部依赖包的修改' },

2. emoji 开头的 commit 规范信息，commitlint 并没有内置合适的共享配置，这种需要自己写一个符合的配置

> yarn add -D commitlint-config-gitmoji

报错：`Failed to fetch gitmoji JSON,...`。 下载 [gitmoji.json](https://raw.githubusercontent.com/carloscuesta/gitmoji/master/src/data/gitmojis.json) 到 node_modules/commitlint-plugin-gitmoji/lib

3. 修改.commitlintrc.js

```
module.exports = {
	extends: ['gitmoji']
}
```

## Docker

- 开源的容器化虚拟技术
- 可移植，脱离硬件
- 非常轻量级
- 直接运行在宿主机内核上

### 三个核心概念

- Registry 镜像仓库：Docker Hub https://hub.docker.com
- Image 镜像：拉取镜像 docker pull node
- Container 容器：容器启动 docker run

### 容器化方案与 Docker 配置

#### 本地

1. 安装 Docker (windows +10 专业版)

- 开启虚拟化服务：win - 应用与程序（搜索 Hyper） - 启用或关闭 windows 功能 - 勾选 Hyper-V
- docker.com 官网下载指定版本
- 命令行验证：docker --version

2. 搭建容器化服务器

- docker pull centos:latest // 拉取最新 centos 镜像至本地硬盘
- docker images // 查看镜像
- docker run -p 9000:80 --name web -i -t centos /bin/bash // 开启服务
- .. // 安装 nginx

**构建定制内容 Docker 镜像（或者直接下载 Nginx Docker 镜像）**

1. 两种方式构建 Docker 镜像

- docker commit
- docker build + Dockerfile(推荐)

2. 项目根目录创建 Dockerfile 文件（构建 docker 镜像脚本）

```Dockerfile
# 第一个阶段：拉取node镜像来打包react项目
FROM node:14 as build
WORKDIR /app
COPY packega*.json ./
RUN npm install
COPY public public/
COPY src src/
RUN npm run build

# 第二个阶段：创建并运行nginx服务器，打包好的文件复制到服务器中
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

3. 构建镜像：docker build -t react-ts-ds .

4. 部署：docker run -d -p 12231:80 react-ts-ds // docker ps 查看

5. 访问：localhost:12231

#### 阿里云

- 容器镜像服务（ACR): 私人的 docker 镜像仓库
- 阿里云 ECS 服务器：linux 操作系统，安装和运行 docker 服务

1. 容器化部署方案：

- 容器服务 ACS
- kunernetes、RANCHER、HELM
- Jenkins + Spinnaker

2. 容器化部署：ECS 服务器 - 镜像仓库 - 本地构建

- 流程：阿里云 - 控制台 - 云服务器 ECS - 创建实例 - 远程连接
- 创建 docker：
