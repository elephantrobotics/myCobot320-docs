# 驱动相关

## 1 关于 python

**Q：send_coords([x,y,z,rx,ry,rz], speed, 1)这个 API 中的各个参数是什么意思，rx、ry、rz 是对应的是欧拉角的什么？欧拉角的旋转顺序是？以及各个参数的取值范围是多少？**

- A：前面数组里的参数是机械臂的末端坐标，speed 是速度，最后一个参数是运动模式。rx、ry、rz 对应的应是 rpy，也就是分别对应 roll，pitch，yaw。欧拉角顺序是 zyx，zyx 是自身坐标。X、Y、Z 取值范围是-300~300.00（取值范围未定义，超出范围会返回 inverse kinematics no solution 提示），rx、ry、rz 取值范围是-180~180。

**Q: python API 的示例教程是否提供？**

- A：目前有 demo，在 github 的 Test 文件夹下有测试代码，用终端执行即可。 "https://github.com/elephantrobotics/pymycobot/tree/main/demo/myCobot_320_demo"

**Q: 不同版本的机械臂使用的 python API 是否相同？**

- A: API 是一样的。

## 2 关于 ROS

**Q: 基于微控制器的 myCobot 和基于微处理器的 myCobot 如何运行 ROS？**

- A: 基于微控制器的机械臂我们目前是在 Ubuntu 上，需要下载虚拟机搭建虚拟环境，在虚拟环境里安装 Ubuntu 系统来运行 ROS，您也可以自己开发自己的 ROS。基于微处理器的机械臂是自带 ROS 环境的，可以直接使用。

**基于微处理器的机械臂是否可以连接 pc 来使用 ros 和 moveit 呢？**

- A: 目前的开源资料是没有直接通讯控制的，可以通过 ros + socket，修改现有的节点文件，进行实现。

**Q: 是否可以提供 rviz 模型的文件和编程案例？**

- A: 我们的 github 上是有提供的。
  "https://github.com/elephantrobotics/mycobot_ros"

**Q: 使用 ROS 启动 rviz 模型文件时，为什么会报错报错 permission denied：'/dev/ttyUSB0'？**

- A: 是因为没有给串口权限。应该在终端里输入 sudo chmod 777 端口名称。
  例如:
  ```
  sudo chmod 777 /dev/ttyUSB0
  ```

**Q: 运行 ros 的滑块控制和模型跟随命令时，报错 init（） takes exactly 2 arguments（3 given）是为什么？**

- A: 没有安装和启动 pymycobot 库。

**Q: 在使用 ROS 时，打开 rviz 模型后机械臂角度和模型角度不一致是为什么？**

- A: 很可能是机械臂的零位没有校准，需要校准机械臂的零位。

---

[← 上一页](./3.2_320_M5_userNotes.md) | [下一页 →](./2_software.md)
