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
```


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

