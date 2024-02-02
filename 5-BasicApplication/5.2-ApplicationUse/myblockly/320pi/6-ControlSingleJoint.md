# 4 控制单关节运动

<i>开始前准备</i>

M5Stack系列：确保机械臂已经连接上电脑（具体信息请查阅**[5.1myBlockly](https://docs.elephantrobotics.com/docs/gitbook/5-ProgramingApplication-myblockly-uiflow-mind/5.1-myblockly/)**）

其他系列：确保机器正常

### 本章学习内容

如何使用myBlockly，控制机械臂单关节运动

#### API介绍

* 方法模块：`设置关节`

  <img src="../../../resourse/5-ProgramingApplication-myblockly-uiflow-mind/image/myblockly/单关节运动1.jpg" style="zoom: 33%;" />



<img src="../../../resourse/5-ProgramingApplication-myblockly-uiflow-mind/image/myblockly/单关节运动2.jpg" style="zoom: 67%;" />

* 参数介绍：

  该方法有三个参数可以调整：

  * 关节参数：参数范围为：1-6（对应机械臂的6个关节）；

  - 角度参数：参考对应机型的参数（**[2.产品介绍](https://docs.elephantrobotics.com/docs/gitbook/2-serialproduct/2-buy.html)**）
  - 速度(Speed)：控制机械臂运动的速度，参数范围为：0~100

* 目的：控制机械臂单关节运动

#### 简单演示

* 图形代码如下：

  <img src="../../../resourse/5-ProgramingApplication-myblockly-uiflow-mind/image/myblockly/单关节运动demo.jpg" style="zoom: 50%;" />

* 实现内容：

  控制机械臂1关节，以速度50运行到1关节角度20的位置，过一秒后，

  控制机械臂2关节，以速度50运行到2关节角度20的位置，过一秒后，

  控制机械臂3关节，以速度50运行到3关节角度20的位置，过一秒后，

  控制机械臂4关节，以速度50运行到4关节角度20的位置，过一秒后，

  将机械臂所有关节以速度60回到原点，结束程序。
