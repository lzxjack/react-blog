> 这是个人博客系统的**博客展示页面**，**后台管理页面**仓库见<a href="https://github.com/lzxjack/react-blog-admin" target="_blank">「react-blog-admin」</a>。

# 0. 看这里 ✔️

这是我自己用 React 写的个人博客系统，起初的目的就是作为**个人使用**，所以代码有**很大的局限性**（根本原因是因为自己太菜 🤣🤣🤣）。

欢迎大家`star`、`fork`，互相交流学习！💪💪

# 1. 前言

之前我使用`hexo`搭建过个人博客。`hexo`很强大，渲染页面速度快，支持`markdown`语法，可以一键部署，还可以扩展各种插件。

但`hexo`搭建的是静态页面，每次更新文章，都要**重新生成**静态页面，再部署页面。`hexo`也没有后台管理，想要修改发布的文章，只能修改源代码，再重新生成页面。所以很早之前就想写一个自己的博客系统，由**博客展示页面**和**后台管理页面**构成，通过后台管理页面，可以实时更新、发布文章，非常方便。但在当时还没有能力写出这样一个系统，就一直没有去做。

后来学习了`React`之后，想尝试下写自己的博客，就每天课余时间写一点，最后写出来了 😅😅😅。

由于之前有搭建过`hexo`博客，所以就按照之前自己`hexo`博客的功能来写，基本的功能有文章管理、文章搜索、分类/标签、图库、说说、留言板/评论、友链、小作品页面、建站日志时间轴、关于页面等。但是很多功能还不完善，不具有通用性，只适用于本博客，以后会慢慢改进 🧐🧐🧐！

# 2. 仓库地址

## 1. 博客展示页面

演示地址：<a href="https://lzxjack.top/" target="_blank">「飞鸟小站」</a>

仓库地址：<a href="https://github.com/lzxjack/react-blog" target="_blank">「GitHub」</a>

![](https://jack-img.oss-cn-hangzhou.aliyuncs.com/img/20210907102912.png)

## 2. 后台管理页面

演示地址：<a href="https://react-blog-admin-8fo571wf24c87f9-1304393382.ap-shanghai.app.tcloudbase.com/" target="_blank">「飞鸟小站后台」</a>

> 点击`游客`按钮即可使用**游客**身份浏览！

仓库地址：<a href="https://github.com/lzxjack/react-blog-admin" target="_blank">「GitHub」</a>

![](https://jack-img.oss-cn-hangzhou.aliyuncs.com/img/20210907102952.png)

# 3. 用到的技术/工具

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

# 4. 主要功能

## 1. 博客展示页面

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

## 2. 后台管理页面

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

# 5. 不断改进

由于时间有限、本人能力有限，博客系统还有很多不足之处，会在学习新知识的同时不断改进博客。

也请各路大佬多多指点 😆😆😆！
