# 控制 RGB 灯板

<i>开始前准备</i>

- 确保机械臂已经连接上电脑

- 确保机器正常

- 确保机器已接通电源

## 本章学习内容

如何使用 myBlockly 控制 RGB 灯板

### API 介绍

- 方法模块：`颜色设置`

<img src="img/myblockly/RGB1.jpg" style="zoom:33%;" />

<img src="img/myblockly/RGB2.jpg" style="zoom: 50%;" />

- 参数介绍：

  - 需要设置的参数为 R（`x`）、G（`x`）、 B（`x `），不同的数值代表不同的颜色。

  - 参数范围（具体可以查阅 RGB 参数表）：

    R：0~255

    G：0~255

    B：0~255

- 目的：控制 RGB 灯板颜色。

### 简单演示

- 图形代码如下：

<img src="img/myblockly/RGBdemo.jpg" style="zoom: 50%;" />

- 实现的内容：

  控制机械臂 RGB 灯板颜色由“蓝-红-绿”顺序变化，整个过程循环七次。

---

[← 上一节](../320pi/3-interface_description.md) | [下一节 →](../320pi/5-ControlRoboticArmBackZero.md)
