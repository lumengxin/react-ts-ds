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

### 媒体资源

脚手架初始化已经处理了。

### state和props

- props是组件对外的接口，state是组件对内的接口
- props用于组件间的数据传递，state用于组件内部数据传递
- state是私有的，通过setState()修改。constructor是唯一可以初始化state的地方
- state是异步的，不要依赖当前的state计算下个state
- props是只读属性的，函数式编程

### react event

可以通过e.nativeEvent访问原生html事件。

### 异步，动态显示

- ajax
- callback回调函数
- 程序栈stack,先进先出
- promise

### setState

异步更新，同步执行

setState() 本身并非异步，处理机制给人一种异步的假象。state处理一般发生在生命周期变化的时候。

### 生命周期

- Mounting: 创建虚拟DOM, 渲染UI
- Updating: 更新虚拟DOM, 重新渲染UI
- Unmounting: 删除虚拟DOM, 移除UI

### hooks

- 消息处理的一种方式，用来监视指定程序
- 函数组件中需要处理副作用，可以用钩子把外部代码‘勾’进来
- 常用钩子：useState, useEffect, useContext, useReducer
- 使用use前缀名



### React17x

- 事件委托机制改变
- 向原生浏览器靠拢
- 删除事件池
- useEffect清理操作改为异步操作
- jsx不可以返回undefinded
- 删除部分私有api


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

