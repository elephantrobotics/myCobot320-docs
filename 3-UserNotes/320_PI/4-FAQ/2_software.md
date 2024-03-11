# 软件问题

**Q: 为什么我的编译器找不到对应的设备？**

- A: 需要先搭建开发环境并安装对应的项目库才可以开发设备。

## 1 关于 myStudio

**Q: myStudio 是什么？**

- A: 是我们公司自研软件。它是一款给我们公司推出的现有机械臂进行固件烧录或修改的工具。 [更多](../../5-BasicApplication/5.2-ApplicationUse/5.2.2-mystudio/320m5/README.md)

**Q: MyCobot 320 PI-2020 款和 2022 款使用的固件有什么区别吗？**

A:

- 早期版本 myCobot 320 PI 的固件要求如下:
  - ubuntu18.04
  - atommain4.1
- 新版 myCobot 320 PI 的固件要求如下:
  - ubuntu18.04
  - picomain1.0
  - atommain5.0

该固件组合的最高版本为 mystudio v3.5.7

**Q: 为什么将固件烧录到 ATOM 终端后，设备不能正常运行？**

- A: ATOM 终端的固件必须使用我们的出厂固件。其他非官方固件在使用过程中无法更改。如果设备意外烧录了其他固件，可以使用 [myStudio](../../5-BasicApplication/5.2-ApplicationUse/5.2.2-mystudio/320m5/README.md) 重新烧录 ATOM 固件。

**Q: 固件中的拖动示教是否可以记录夹爪动作？**

- A: 暂时无法实现使用拖动示教记录夹爪动作，因为夹爪属于编号 7 关节，我们的拖动示教只能做到对编号 1-6 关节的运动记录与播放。

**Q: 烧录了 minirobot 固件之后仍然无法拖动示教是为什么？**

- A: 首先检查一下是否 M5Stack-basic 固件与 atom 固件都烧录了，烧录的固件是否对应所要实现的需求以及烧录的是否是最新版本的固件。
  这里推荐将 minirobot 固件烧录至 v2.1 版本，顶部 atommain 固件烧录至 v4.1 版本及以上（需要支持 mystudio 版本在 v4.3.1 及以上）。

**Q: 如果 myStudio 无法识别 myCobot 的串口，该怎么办？**

- A: 如果您的电脑设备没有提示已连接 myCobot，请先安装串口驱动程序。  
   另外需要注意的是，树莓派、Arduino 和 Jetson nano 系列机械臂是**无法使用数据线连接到笔记本电脑**的，需要在内置的系统中使用 mystudio 进行固件烧录。

**Q: 拖动示教录制轨迹，能否存到卡里？**

- A: 目前无法存到内存卡中。并且拖动示教只能一次存一条路径，下一次录制会覆盖之前的动作。

## 2 关于 RoboFlow

**Q: 请问 robotStudio 软件编程能使用吗？**

- A: 我们自己的工业编程软件 roboFlow 可以使用，robotStudio 是 ABB 公司的，无法和我们互通。

**Q: roboFlow 软件快速移动超过限位的原因是？**

- A: 可能是某个关节或多个关节超过限位。

**Q: roboflow 如何加载已经写好的程序？**

- A: 登录后，选择程序机器人，然后点击加载程序。不能直接点击运行程序，只能点击 pro600。

## 3 关于 myCobot phone controller

**Q:myCobot phone controller app 应烧录什么版本的固件？**

- A: 需要在 mystudio 里烧录 atom 固件 atommain2.5 版本。
  > 截至 2023/2/4，手机 APP 控制功能已禁用，重启时间请注意 mystudio 固件版本的信息发布。

## 4 关于 myblockly

**Q: 什么是 myblockly？**

- A:[关于 myblockly](../../5-BasicApplication/5.2-ApplicationUse/5.2.1-myblockly/320m5/README.md)

**Q: 为什么运行 myblockly 时总是出现弹出框？**

- A: 运行 myblockly 程序前，请关闭串行端口占用。

**Q: myblockly 运行时，会出现 child process exited with code 0，为什么？?**

- A: 这不是错误。真正的错误需要逐个分析。这串字符代表程序结束，并返回二进制数 0，表示终止。

## 5 关于 ROS1

**Q：当终端切换到 `~/catkin_ws/src` 并使用 git 安装和更新 `mycobot_ros` 时，目标路径 "mycobot_ros "似乎已经存在。为什么会这样？**

- A：在 `~/catkin_ws/src` 中已经存在一个 `mycobot_ros` 软件包，因此需要先删除它，然后重新运行 git。

**Q: 运行 rosrun 时，终端报错，提示 `counld not open port /dev/ttyUSB0: Permission: '/dev/ttyUSB0'`。为什么会这样？**

- A: 串行端口权限不足。输入 `sudo chmod 777 /dev/ttyUSB0` 授予权限。

**Q: 为什么 ros 程序不能在 vscode 运行？**

- A：由于 vscode 终端无法加载到 ros 环境中，因此需要在系统终端上运行。

**Q: rosrun 运行时，终端提示`Unable to register with master node [http://localhost:11311]: master may not be running yet. Will keep trying的原因是`？**

- A: 运行 ros 程序前，需开启 ros 节点，终端输入 roscore

**Q: rosrun 运行时，终端报错显示`counld not open port /dev/ttyUSB0：No such file or directory: '/dev/ttyUSB1'`，是为什么？**

- A: 串口有误。需确认当前机械臂的实际串口。可通过 `ls /dev/tty*`查看。

**Q: 在 Ubuntu18.04 中进行 catkin_make 构建代码失败,终端提示 `Project 'cv_bridge' specifies '/usr/include/opencv' as an include dir, which is not found.`等报错信息**

- A: 配置文件中的 opencv 路径与系统实际路径不相符。需使用 sudo 修改配置文件（路径为`/opt/ros/melodic/share/cv_bridge/cmake/cv_bridgeConfig.cmake`），系统实际 opencv 路径位于`/usr/include/`路径下。

**Q: 刚克隆下来的 mycobot_ros 程序包，然后直接运行 rosrun 程序，出现 `package 'mycobot_280' not found `的错误或者找不到该文件之类的错误？**

A: 刚克隆下来的 mycobot_ros 需要构建代码进行 ros 环境编译。终端输入

```bash
cd ~/catkin_ws/
catkin_make
source devel/setup.bash
```

**Q: 编译完成后，新开终端运行 launch 指令时，为什么会出现下面的错误？**

<img src = ../../../resources/3-UserNotes/17.4.3-1.png
width ="500"  align = "center">

- A1: 系统没有添加 ros 环境变量，所以每次开启新终端都要 source：

```bash
cd ~/catkin_ws/
source devel/setup.bash
```

- A2: 系统添加 ros 环境变量，每次开启新终端后无需执行 source：

```bash
# The noetic is Ubuntu20.04 system
echo "source /opt/ros/noetic/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

- A3: 可能是指令中的文件名与实际中 mycobot_ros 包里面的文件名不一致，请仔细检查指令是否有误。

---

[← 上一页](./1_driver.md) | [下一页 →](./3_hardware.md)
