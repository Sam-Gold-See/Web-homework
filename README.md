# Web_homework

#### Web前端设计开发大作业

##### My Web Homework, a blog to summary of my freshman year of study

我的Web前端设计开发课程大作业，我做了一个个人博客来总结记录我的大一生活

##### To complete my assignment, I chose to create a webpage using HTML, CSS, and JavaScript. The webpage primarily documents my reflections and summaries on my first year at SCNU, along with some study notes on computer science. In addition, I've included a few small tools like a random number generator and a base converter. This is my first independent web project, although it's quite basic and I don't plan to expand it further. Nevertheless, it holds significant meaning for me.

关于这个Web课程作业，我选择了构建一个基于HTML+CSS+JavaScript的网页，同时网页中主要记载了我对于在SCNU的大一生活所经历的一些事情的感悟与总结、以及关于一些计算机的学习笔记，除此之外还添加了一点小工具例如随机数工具、进制计算器等等，是第一个独立完成的网页项目，虽然很粗糙也不打算后续拓展，但对我来说挺有意义的

---

# Introduction

## File Structure

### HTML

- `index.html`首页（背景随机轮播、联系方式、固定顶部菜单、页面分支）
- `postAlgorithm.html`帖子-算法学习感悟
- `postMathModel.html`帖子-数模学习感悟
- `postPython.html`帖子-Python学习笔记
- `postWeb.html`帖子-Web学习笔记
- `Python.html`Md-Python学习笔记
- `Web.html`Md-Web学习笔记
- `timeLine.html`时间轴（记录入学后的成就、重要时间点）
- `toolCaculator.html`工具-进制计算器（输入输出进制自拟）
- `toolRandomNumber.html`工具-随机数生成器（区间限制）

### CSS

在`styles/`下

- `html.css`首页专用样式
- `index.css`页面通用样式
- `timeLine.css`时间线页面专用样式
- `tool.css`工具页面专用样式

### JavaScript

在`scripts/`下

- `html.js`页面通用JS脚本，包括一键滑至顶部按钮、顶部菜单栏动画效果
- `index.js`主页专用JS脚本，在页面通用JS脚本基础上增加了主页背景图片随机轮播、主页背景图片随机固定
- `toolCaculator.js`工具-进制计算机专用JS脚本，实现了输入任意进制四则运算，输出制定进制数
- `toolRandomNumber.js`工具-随机数生成器专用JS脚本，实现了随机生成指定区间内的任意数

### Picture

在`images/`下

- `index/`下为首页背景图片
- `postPython/`下为帖子-Python学习笔记页面中插图
- `postWeb/`下为帖子-Web学习笔记页面中插图