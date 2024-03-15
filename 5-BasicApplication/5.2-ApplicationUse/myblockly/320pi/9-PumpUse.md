# 吸泵使用

<i>开始前准备</i>

- 确保机械臂已经连接上电脑

- 确保机器正常

- 确保机器已接通电源

吸泵的介绍和安装请参考[配件](https://docs.elephantrobotics.com/docs/gitbook/2-serialproduct/2.7-accessories/2.7.4-pump.html)。  
吸泵的适配的机械臂型号包括 myCobot 280、myPalletizer 260 以及 mechArm 270。这里以 myPalletizer 260 M5Stack 机械臂为例进行说明。

## 本章学习内容

如何使用 myBlockly 控制 myCobot 260 M5Stack 机械臂上连接的吸泵

### API 展示

- 方法模块**1**：`设置底部引脚号状态`

  <img src="./img/myblockly/底部引脚输出.jpg" style="zoom: 67%;" />

- 参数介绍：

  该模块有两个参数可以调整：

  - 底部引脚号参数：设备底部的具体引脚号（仅取数字部分）
  - 运行状态参数：0 表示设置为运行状态，1 表示停止状态

- 目的：设置底部引脚号的工作状态

- 方法模块**2**：`获取底部引脚号`

  <img src="./img/myblockly/底部引脚输入.jpg" style="zoom: 67%;" />

- 参数介绍：

  - 底部引脚号参数：设备底部的具体引脚号（仅取数字部分）

- 目的： 获取底部引脚号的工作状态

### 简单演示

- 图形代码如下：

  <img src="./img/myblockly/吸泵demo.jpg" style="zoom: 50%;" />

- 实现内容：

  吸泵发出震动，开始工作。吸泵吸起物体，过两秒后放下，再过两秒后，重复前面动作，直至程序运行结束。

---

[← 上一节](../320pi/8-GripperUse.md) | [下一节 →](../320pi/10-Q&A.md)
