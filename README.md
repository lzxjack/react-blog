> 这是个人博客系统的**博客展示页面**，**后台管理页面**仓库见<a href="https://github.com/lzxjack/react-blog-admin" target="_blank">「react-blog-admin」</a>。

Hi，这是我自己用 React 写的个人博客系统，欢迎大家`star`、`fork`，互相交流学习！💪💪

## 博客已于2022/3/29完成重构

> 终于把博客重构完上线了！😴

## 重构上线

看到这篇文章时，新版博客已经上线啦！最近三周时间，把个人博客系统的展示页面几乎重写了一遍。为什么要重构？因为之前写的代码自己看不下去了：重复逻辑多、组件没有有效复用、项目整体架构问题、数据存储问题等等。用了三周的时间，整体样式基本保持不变，把逻辑代码完完全全进行重写。

现在博客的体验（性能+操作逻辑）应该会好很多😌。

## 优化点

由于重构的博客同样也是基于`React`开发，功能、样式基本一致，这里就说说新版博客相比于旧版，有所改进的地方。

### 开发

在开发上，旧版博客使用的是`create-react-app`进行开发。

为了学习 webpack 项目的搭建、配置，并进行可行性验证，重构的博客使用自建脚手架<a href="https://github.com/lzxjack/my-react" target="_blank">my-react</a>进行开发，集成配置了常用功能。

新版博客的改进之处：

- 使用`typescript`编写代码
- 使用`commitlint`保证`git commit`提交规范
- 使用`eslint`规范代码风格
- 使用`husky`在每次提交之前，触发`commitlint`与`eslint`
- 区分开发环境、生产环境，并抽离公共配置
- CSS 预处理器使用`scss`

### 代码逻辑

几乎重构了全部的逻辑代码，改进之处：

- 抽离了 10 余个公共组件，有效复用重复逻辑
- 使用`ahooks`提供的常见功能逻辑`hook`，避免闭包问题
  - `useRequest`异步数据管理
  - `useMount`
  - `useTitle`
  - `useToggle`
  - `useLocalStorageState`
  - `useSafeState`
  - `useUpdateEffect`
  - `useEventListener`
  - `useKeyPress`
  - ...
- 根据页面自动切换网页`title`
- 使用`classnames`拼接多个类名
- 使用`dayjs`代替`Moment.js`格式化时间
- 改用`echarts`绘制文章分布饼图
- 使用`markdown-navbar`生成文章目录锚点
- 评论模块中，对用户的输入内容进行过滤
- `react-router-dom`升级 6 版本
- 基于路由进行代码分割，打包生成多个`js`文件，按需加载
- 进入博客不再一次性获取全部数据，而是每个组件单独请求
- 首页文章卡片分页、文章页分页改为**后端分页**，只请求当前页的数据
- 搜索文章功能，改为发送请求后端搜索
- 评论组件
  - `emoji`表情功能支持点击复制，**有待改进**
  - 更改预览框、回复框出现位置，减少定位图层
  - 增加评论分页器
- 优化部分组件的样式
  - 小卡片触发`hover`的样式
  - 覆盖`antd`组件样式
  - 分类页改为双列展示
- 移除`animate.css`库，取消动画
- 正文移除字体「仓耳渔阳体」，改为浏览器内置字体
- 移动端适配采用动态`rem`方案
- 用到的图片资源，改用`webp`格式

### 新功能

新增的其实就一个：

- 新增主题切换功能，一键切换**黑**/**蓝**/**灰**三种主题，保存至`localStorage`，下次打开时自动切换至已选的主题

## 待优化

- 继续优化 webpack 打包后的体积，提升首屏加载速度
- 图片懒加载
- 尝试预渲染
- 改进添加`emoji`表情功能，点击即可插入表情



> 欢迎大家给出改进意见！



***



## 旧博客

> 以下是旧博客完成时的介绍。

之前我使用`hexo`搭建过个人博客。`hexo`很强大，渲染页面速度快，支持`markdown`语法，可以一键部署，还可以扩展各种插件。

但`hexo`搭建的是静态页面，每次更新文章，都要**重新生成**静态页面，再部署页面。`hexo`也没有后台管理，想要修改发布的文章，只能修改源代码，再重新生成页面。所以很早之前就想写一个自己的博客系统，由**博客展示页面**和**后台管理页面**构成，通过后台管理页面，可以实时更新、发布文章，非常方便。但在当时还没有能力写出这样一个系统，就一直没有去做。

后来学习了`React`之后，想尝试下写自己的博客，就每天课余时间写一点，最后写出来了 😅😅😅。

由于之前有搭建过`hexo`博客，所以就按照之前自己`hexo`博客的功能来写，基本的功能有文章管理、文章搜索、分类/标签、图库、说说、留言板/评论、友链、小作品页面、建站日志时间轴、关于页面等。但是很多功能还不完善，不具有通用性，只适用于本博客，以后会慢慢改进 🧐🧐🧐！

### 用到的技术/工具

🔖 博客主要使用到的技术如下：

**前端**（博客页面+后台管理）：

-   `React`脚手架`Create-React-App`
-   状态集中管理工具`Redux`
-   前端路由`React-Router`
-   `AntD`组件库
-   <a href="https://www.jinrishici.com/" target="_blank">今日诗词</a>提供首页的诗句
-   时间格式化工具<a href="http://momentjs.cn/" target="_blank">moment</a>
-   `markdown`格式渲染工具<a href="https://github.com/markedjs/marked" target="_blank">marked</a>
-   代码高亮渲染工具<a href="https://highlightjs.org/" target="_blank">highlight.js</a>
-   其他第三方包

**后端**：

后端使用腾讯云`CloudBase`云端一体化后端云服务，包括：

-   用户管理：管理员登录、访客匿名用户登录
-   数据库：存放管理员的博客数据
-   网站托管：托管后台管理页面

**其他**：

-   评论回复的邮箱提醒`API`，使用`Node.js`编写，运行在自己的**阿里云服务器**上
-   已配置**SSL 证书**，开启**HTTPS**访问
-   博客展示页面托管于**腾讯云开发静态文件托管**
-   图床使用**阿里云OSS**
-   `Webify`：应用托管，自动部署**后台管理页面**

### 主要功能

#### 博客展示页面

-   首页预览所有文章
-   查看文章评论、发布评论、评论回复
-   搜索文章：根据关键字搜索、分类搜索、标签搜索
-   查看相册
-   查看说说
-   查看留言板留言、发布留言、留言回复
-   查看友链、访问友链
-   查看小作品
-   查看建站日志时间轴
-   查看关于本站/关于我
-   进入后台管理页面

#### 后台管理页面

**管理**是指：对数据的**增**、**删**、**改**、**查**。

-   首页预览博客基本数据（文章数、草稿数、友链数等），管理分类、标签
-   文章管理、草稿管理
-   相册管理
-   说说管理
-   查看留言、评论，删除留言、评论
-   友链管理
-   小作品管理
-   关于页面文字管理
-   建站日志管理

### 不断改进

由于时间有限、本人能力有限，博客系统还有很多不足之处，会在学习新知识的同时不断改进博客。

也请各路大佬多多指点 😆😆😆！
