# 5 Control multiple joints

<i>Preparation before you begin</i>

- Make sure the robotic arm is connected to the computer

- Make sure the machine is normal



### 本章学习内容

如何使用myBlockly控制机械臂多个关节运动

#### API介绍

* 方法模块：`设置全角度`

  <img src="../../../resourse/5-ProgramingApplication-myblockly-uiflow-mind/image/myblockly/控制多关节1.jpg" style="zoom: 33%;" />

<img src="../../../resourse/5-ProgramingApplication-myblockly-uiflow-mind/image/myblockly/控制多关节2.jpg" style="zoom: 50%;" />

* 参数介绍：

  该模块有两个参数可以调整：

  * 关节角度参数：可以根据需要在机械臂关节运动范围内设置参数（关节运动范围详情请参考**[2.产品介绍](https://docs.elephantrobotics.com/docs/gitbook/2-serialproduct/2-buy.html)**）
  * 速度参数：可以根据需要在机械臂运动速度范围设置参数（运动最大速度请参考**[2.产品介绍](https://docs.elephantrobotics.com/docs/gitbook/2-serialproduct/2-buy.html)**）

* 目的：控制机械臂多个关节运动

#### 简单演示

* 图形代码如下：

<img src="./img/myblockly/控制多关节4.jpg" style="zoom: 50%;" />

* 实现内容：

  控制机械臂所有关节回到原点，过两秒后，

  同时控制机械臂1关节、2关节、3关节和4关节以速度50分别运行到30度、30度、-30度以及50度的位置，过两秒后，

  将机械臂所有关节以速度50回到原点，过两秒后，

  控制机械臂1关节、2关节、3关节和4关节以速度50分别运行到-30度、0度、30度以及-50度的位置，过两秒后，结束程序。
