# react-ts-webpack5-antd-nodejs-
```
	此项目是用来学习交流技术使用的
```

# 项目介绍
	1、react使用18版本，但好像也没用到新的啥技术
	2、webpack使用了5，分离了共有部分，以及区分dev环境和prod环境，主要使用了proxy转发功能和alias别名
	3、由传统的jsx语法，改为typescript语法，开发时更加明白类型的重要性
	4、nodejs作为主导后端，用来接受页面请求，发起mysql数据库操作并返回数据
	5、mysql数据库可选主流版本，当前使用mysql5.6。安装步骤不一一介绍
	6、node结合axios，使得发起数据请求不跨域限制
	7、读存取文件fs用来记录每次递增的pageNo	

# 注意事项
	1、node版本，推荐19以上，当前node@22.2.0
	2、其他模块可直接安装

# 安装步骤
	1、npm install 或 yarn install
	2、新开终端启动node index.js，推荐pm2管理node进程
	3、npm start启动web
	4、访问地址http://localhost:3000/