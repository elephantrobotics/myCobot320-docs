# 8 夹爪的使用

<i>开始前准备</i>

M5Stack系列：确保机械臂已经连接上电脑（具体信息请查阅**[5.1myBlockly](https://docs.elephantrobotics.com/docs/gitbook/5-ProgramingApplication-myblockly-uiflow-mind/5.1-myblockly/)**）

其他系列：确保机器正常

夹爪包括自适应夹爪、电动夹爪以及气动夹爪。不同夹爪适配机械臂型号不同，详情请参考**[2.7 配件](https://docs.elephantrobotics.com/docs/gitbook/2-serialproduct/2.7-accessories/2.7-accessories.html)**。这里以自适应夹爪与myPalletizer 260 M5Stack机械臂为例，对使用myBlockly控制夹爪的方法进行说明。

### 本章学习内容

如何使用myBlockly控制myPalletizer 260 M5Stack机械臂上连接的自适应夹爪

#### API展示

+ 方法模块**1**：`重新初始化夹爪`

  <img src="./img/myblockly/重新初始化夹爪.jpg" style="zoom: 80%;" />

+ 目的：设置夹爪初始化位置



- 方法模块**2**：`设置夹爪状态`

  <img src="./img/myblockly/设置夹爪状态.jpg" style="zoom: 67%;" />

- 参数介绍：

  该模块有两个参数可以调整：

  * 夹爪状态参数：1表示夹爪合拢状态，0 表示夹爪打开状态
  * 速度参数：表示以多少的速度转动，取值范围 0~100

- 目的：使夹爪以指定的速度进入到指定的状态（打开或者闭合）

  

- 方法模块**3**：`设置夹爪的值`

  <img src="./img/myblockly/设置夹爪的值.jpg" style="zoom: 67%;" />

- 参数介绍：

  该模块有两个参数可以调整：

  * 夹爪值的参数：表示夹爪所要到达的位置，取值范围 0~256。
  * 速度参数：表示以多少的速度转动，取值范围 0~100。

* 目的： 使夹爪以指定的速度转动到指定的位置。



* 方法模块**4**：`夹爪是否在运动`

  <img src="./img/myblockly/夹爪是否在运动.jpg" style="zoom: 67%;" />

* 目的：判断夹爪是否正在运行

#### 简单演示

* 图形代码如下：

<img src="./img/myblockly/夹爪demo.jpg" style="zoom: 50%;" />



* 实现内容：

  把机械臂2关节以速度50运行至30度，过一秒后，

  夹爪以速度70打开，过一秒后，

  夹爪以速度70关闭，

  夹爪打开闭合的过程循环5次后，程序运行结束。
