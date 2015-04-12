---
layout: default
title: 关于npm的升级
category:nodejs
comments: true
---
关于npm的升级

最近在研究angularjs，于是乎从最基本的yo构建结构的脚手架来出发
首先，安装yeoman，代码很简单

    npm install -g yo

fuck 然后提示我一npm版本太低，居然要2.0以上，百度之，升级了半天。擦你妹啊
	
	npm -v

依然提示我是1.4，于是乎只好到github上下载npm最新的2.8.0的zip包
解压到本地npmjs文件夹，然后
	
	D:\npmjs>node cli.js install -gf

等着一对代码刷刷刷，然后
	
	npm -v

噢啦，继续
	
	npm install -g yo

嗯 完美，继续，安装generator-angular
	
	npm install -g generator-angular

国内网络你懂的，等着喝杯咖啡去，然后完毕
新建一个你的项目目录
	
	yo angular

根据你项目要求，继续回车吧
尼玛然后报了个错
	
	Error:Cannot find module 'decompress-tar'

无视之直接利用配置好的gruntflie,详细的看看gruntfile.js都写，在这就不重复说了
	
	grunt serve

擦 缺啥补啥，npm把缺少的都安装上，记得通过

	bower install

把依赖的都补上，最后

	grunt serve --force

噢啦 yo配置好的静态服务启动了，可以愉快的进行调试开发了

今天先到这，后续再补充吧！！！