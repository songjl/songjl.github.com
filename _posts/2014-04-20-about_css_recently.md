---
layout: default
title: 最近做webapp中积累的cssde 一些知识
category:webapp,css
comments: true
---

css知识实际应用积累
1.font-size 用rem(代替px,em)
为什么用rem 方便计算？
不同分辨率下只要利用media query 修改html的字体大小即可。

  html{
    font-size:62.5%;
  }
  body{
    font-size:100%;
  }

这样在body中1rem相当于10px;

2.默认使用的字体

  body{
    font-family:"Microsoft Yahei","Hiragino Sans GB" ,Arial,Lucida,Verdana,SimSun,Helvetica,sans-serif;
  }

  具体为什么就不说了，谁用谁知道

3.display:flex
 
  关于display:-webkit-flex;
  好像华为的部分机型在浏览器中不支持这个属性，需要再找机器验证一下。

4.background-size
  例如在iphone中，你需要一张400*400的图片，来实现页面中

  <img width="200px" height="200px">
   
  同时设置

  background-size:200px;

  来保证图片不失真


