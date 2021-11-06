# react-ts-ds
react ts电商项目
## 积累
`npm trends`

### 单向数据流

- 数据与界面绑定
- 单向渲染
- 就好像一个函数，同样的输入，同样的输出

### 虚拟dom

类似Docker或VMware的Snapshot快照技术

### 组件化

- 保持交互一致化
- 保持视觉风格的统一
- 便于程序员相互之间的协作

## 初始化

> npx create-react-app react-ts-ds --template typescript

### 同步到github

新建一个github仓库，react-ts-ds

```
git add .; git commit -m '项目初始化'; // 本地提交
git remote add origin git@github.com:lumengxin/react-ts-ds.git // 关联远程仓库
git pull origin main --allow-unrelated-histories; // 拉取远程（有冲突解决，重新add提交）
```

## 项目

### 样式文件

css module(模组化)
- 每个jsx或者tsx文件就被视为一个独立存在的原件
- 原件所包含的所有内容也同样应该都是独立存在的
- import './index.css' -> import style from './index.css'

命名规范：*.module.css

ts的定义声明
- *.d.ts(名字任意，自动识别)
- 只包含类型声明，不包含逻辑
- 不会被编译、也不会别webpack打包

`css in js(jss)`

使用插件
> npm install typescript-plugin-css-modules --save-dev; (开发依赖，不参与项目打包。包括@types/..也可以)

配置：
- tsconfig.json:
```
"plugins": [
  {
    "name": "typescript-plugin-css-modules"
  }
]
```
- 新建.vscode/settings.json(处理tsconfig, 配置后弹框选择允许)。对css会有提示。


## 问题

1. ssh: connect to host github.com port 22: Connection timed out...

以为ssh过期，重新添加
cd ~/.ssh;
cat id_rsa.pub;
...无效

解决：
- 测试可用性 > ssh -T -p 443 git@ssh.github.com;
- 编辑~/.ssh/config 文件文件，添加：
```
Host github.com
Hostname ssh.github.com
Port 443
```

