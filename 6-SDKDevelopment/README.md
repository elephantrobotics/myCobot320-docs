# SDK 开发指南

## 1 使用环境

myCobot 320 for PI 机械臂有内置系统，将机械臂与显示屏相连接即可使用。

## 2 开发环境

为了满足机器人在不同场景下的多样化应用需求，我们对机器人进行了多种编程语言的适配。到目前为止，我们已经适配了以下主流编程语言。如果您觉得以下语言具有挑战性，可以返回[myBlockly](../5-BasicApplication/5.2-ApplicationUse/myblockly/320pi/README.md)部分，使用可视化编程语言进行开发。不过，我们认为您可以使用以下任何一种语言进行开发。请务必严格按照说明进行操作。任何遗漏的步骤都可能导致相应语言无法成功运行。祝您顺利使用机器人。

| <img src="../resources/3-UserNotes/3.1-SafetyInstructions/warning.png" alt="img-2" width="100" height=“100” /> | **如果您希望使用以下编程语言， 请确保您的机器人已在应答器部分配置了 USB/Wi-Fi 模式，并确认连接正确。** |
| :------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------- |

- [6.1 Python](../10-ApplicationBasePython/README.md)<br>
  我们的机器人支持 Python，Python API 库的开发也日趋完善。机器人的关节角度、坐标、抓手和其他方面都可以通过 Python 进行控制。<br

- [6.2 Robot Operating System 1 (ROS1) ](/11-ApplicationBaseROS/11.1-ROS1/11.1.2-PI.md)<br>
  ROS 是开源的，是用于机器人控制的后操作系统，或称二次操作系统。利用 ROS，可以在虚拟环境中实现对机械手的模拟控制。通过 rviz 平台可以对机械臂进行可视化，并以多种方式操作机械臂。它还可以通过自由控制机械臂来规划和执行机械臂的动作路径。<br

- [6.3 Robot Operating System 2 (ROS2)](/11-ApplicationBaseROS/11.2-ROS2/11.2.2-PI.md)<br>
  ROS2 的前身是 ROS，ROS 即机器人操作系统（Robot Operating System）。但 ROS 本身并不是操作系统，而是一个软件库和工具集。Ros 的出现解决了机器人各个组件的通信问题。后来，越来越多的机器人算法被集成到 ROS 中。ROS2 继承了 ROS，比 ROS 更强大、更优秀。

- [6.4 Communication](./6.1-CommunicationDoc.md)<br>
  如果您对信息论、编码和机器人通信功能有一定的了解，那么您就应该明白，所有的通信都源于数据传输。为了方便用户操作机器人，我们开放了基于串口通信的通信协议。您可以使用串口助手或将其封装到您熟悉的任何编程语言中来控制机器人。

---

[← 上一章](../5-BasicApplication/README_PI.md) | [下一章 →](../7-ExamplesRobotsUsing/README.md)
