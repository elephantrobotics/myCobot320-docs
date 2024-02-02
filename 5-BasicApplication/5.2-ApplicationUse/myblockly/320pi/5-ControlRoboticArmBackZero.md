# 3 控制机械臂回到原点

<i>开始前准备</i>

M5Stack系列：确保机械臂已经连接上电脑（具体信息请查阅**[5.1myBlockly](https://docs.elephantrobotics.com/docs/gitbook/5-ProgramingApplication-myblockly-uiflow-mind/5.1-myblockly/)**）

其他系列：确保机器正常

### 本章学习内容

如何使用myBlockly控制机械臂回到原点

#### API介绍

* 方法模块：`设置角度`

  <img src="../../../resourse/5-ProgramingApplication-myblockly-uiflow-mind/image/myblockly/回到原点1.jpg" style="zoom:33%;" />

<img src="../../../resourse/5-ProgramingApplication-myblockly-uiflow-mind/image/myblockly/回到原点2.jpg" style="zoom: 50%;" />

* 参数介绍：

  该模块有两个参数可以调整：

  * 关节角度参数：若使机械臂回到原点，则所有关节角度参数需设置为0
  * 速度参数：请参考**[2.产品介绍](https://docs.elephantrobotics.com/docs/gitbook/2-serialproduct/2-buy.html)**的机器人参数介绍部分

* 目的：控制机械臂，将机械臂的所有轴的角度回到原点（角度为0）

#### myCobot

##### 简单演示

<img src="../../../resourse/5-ProgramingApplication-myblockly-uiflow-mind/image/myblockly/回到原点demo1.jpg" style="zoom: 50%;" />





* 实现的内容：控制机械臂运动回到原点，让机械臂所有的轴的角度都为0
