# 控制多关节运动

<i>开始前准备</i>

- 确保机械臂已经连接上电脑

- 确保机器正常

- 确保机器已接通电源

## 本章学习内容

如何使用 myBlockly 控制机械臂多个关节运动

### API 介绍

- 方法模块：`设置全角度`

<img src="img/myblockly/控制多关节1.jpg" style="zoom: 33%;" />

<img src="img/myblockly/控制多关节2.jpg" style="zoom: 50%;" />

- 参数介绍：

  该模块有两个参数可以调整：

  - 关节角度参数：可以根据需要在机械臂关节运动范围内设置参数（关节运动范围详情请参考**[2.产品介绍](https://docs.elephantrobotics.com/docs/gitbook/2-serialproduct/2-buy.html)**）
  - 速度参数：可以根据需要在机械臂运动速度范围设置参数（运动最大速度请参考**[2.产品介绍](https://docs.elephantrobotics.com/docs/gitbook/2-serialproduct/2-buy.html)**）

- 目的：控制机械臂多个关节运动

### 简单演示

- 图形代码如下：

<img src="./img/myblockly/控制多关节4.jpg" style="zoom: 50%;" />

- 实现内容：

  控制机械臂所有关节回到原点，过两秒后，

  同时控制机械臂 1 关节、2 关节、3 关节和 4 关节以速度 50 分别运行到 30 度、30 度、-30 度以及 50 度的位置，过两秒后，

  将机械臂所有关节以速度 50 回到原点，过两秒后，

  控制机械臂 1 关节、2 关节、3 关节和 4 关节以速度 50 分别运行到-30 度、0 度、30 度以及-50 度的位置，过两秒后，结束程序。

---

[← 上一页](../320pi/6-ControlSingleJoint.md) | [下一页 →](../320pi/8-GripperUse.md)
