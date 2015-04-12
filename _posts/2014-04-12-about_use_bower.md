---
layout: default
title: 关于bower的使用
category:bower
comments: true
---

其实去官网都能找到相关的说明，我们这里简单的来看一看

再你的项目下会有一个bower.json

	{
  	"name": "angluardemo",
  	"version": "0.0.0",
  	"dependencies": {
    	"requirejs":"^2.1.17",
    	"angular": "^1.3.0",
    	"bootstrap": "^3.2.0",
    	"angular-animate": "^1.3.0",
    	"angular-cookies": "^1.3.0",
    	"angular-resource": "^1.3.0",
    	"angular-route": "^1.3.0",
    	"angular-sanitize": "^1.3.0",
    	"angular-touch": "^1.3.0"
  	},
  	"devDependencies": {
    	"angular-mocks": "^1.3.0"
  	},
  	"appPath": "app",
  	"moduleName": "angluardemoApp"
	}

其实这就是一个你的包依赖的一个定义文件：

*	name – 你的应用/包的名字
*	version – 你的应用/包的版本号
*	dependencies – 你的应用需要的包。你应该像上面的例子一样指明每一个包的版本号。如果指定latest，Bower会安装最新发布额版本。
*	private – 将该属性设置为true意味着你想要这个包保持私有并且并不想在将来将它添加到registry中。
*	appPath - 你的应用所在的目录，本例子中指当前目录下的app文件夹
其他就不说了，等又用到了再研究

当你的工程下有了这个bower.json 文件之后呢

	bower install

就会在当前目录下生成一个bower_components的目录，里面就是所有你依赖的包了，就很方便的能够给你使用了。当然

	bower install <package>

直接安装某一个包也是可以的，其他诸如类似bower update,uninstall 的方法都是类似的。