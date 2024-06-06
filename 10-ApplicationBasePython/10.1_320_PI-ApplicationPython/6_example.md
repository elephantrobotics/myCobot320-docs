# 演示代码与视频

以下视频供参考。

> **注：** 各款设备的对应的波特率不尽相同，使用时请查阅资料了解其波特率，串口编号可通过 [计算器设备管理器](https://docs.elephantrobotics.com/docs/gitbook-en/4-BasicApplication/4.1-myStudio/4.1.1-myStudio_download_driverinstalled.html#4113-how-to-distinguish-between-cp210x-chip-and-cp34x-chip)或串口助手进行查看。

## 1 控制 RGB 灯板

```python
from pymycobot.mycobot import MyCobot
import time

# 以上需写在代码开头，意为导入项目包

# MyCobot 类初始化需要两个参数：串口和波特率
#   第一个是串口字符串， 如：
#       linux： "/dev/ttyUSB0"
#       windows: "COM3"
#   第二个是波特率：
#       M5版本为： 115200
#   以下为如:
#       mycobot-M5:
#           linux:
#              mc = MyCobot("/dev/ttyUSB0", 115200)
#           windows:
#              mc = MyCobot("COM3", 115200)
#       mycobot-raspi:
#           mc = MyCobot(PI_PORT, PI_BAUD)

# 初始化一个MyCobot对象
# 下面为 windows 版本创建对象代码
mc = MyCobot("COM3", 115200)

i = 7
# 循环7次
while i > 0:
    mc.set_color(0,0,255) #蓝灯亮
    time.sleep(2)    #等2秒
    mc.set_color(255,0,0) #红灯亮
    time.sleep(2)    #等2秒
    mc.set_color(0,255,0) #绿灯亮
    time.sleep(2)    #等2秒
    i -= 1

```

<video id="my-video" class="video-js" controls preload="auto" width="100%"
poster="" data-setup='{"aspectRatio":"16:9"}'>

  <source src="../../resources/10-ApplicationPython/myArm/2.1python控制RGB灯板01.mp4"></video>

## 2 控机械臂回原点

```python
from pymycobot.mycobot import MyCobot

mc = MyCobot("COM3", 115200)

# 检测机械臂是否可烧入程序
if mc.is_controller_connected() != 1:
    print("请正确连接机械臂进行程序写入")
    exit(0)

# 对机械臂进行微调，确保调整后的位置所有卡口都对齐了
# 以机械臂卡口对齐为准，这里给出的仅是个案例
mc.send_angles([0, 0, 0, 0, 0, 0], 30)

```

<video id="my-video" class="video-js" controls preload="auto" width="100%"
poster="" data-setup='{"aspectRatio":"16:9"}'>

  <source src="../../resources/10-ApplicationPython/myArm/2.2python控制机械回原点01.mp4"></video>

## 3 单关节运动

```python
from pymycobot.mycobot import MyCobot
from pymycobot.genre import Angle
import time

mc = MyCobot("COM3", 115200)

# 机械臂复原
mc.send_angles([0, 0, 0, 0, 0, 0], 40)
time.sleep(3)

# 控制关节3运动70°
mc.send_angle(Angle.J3.value, 70, 40)
time.sleep(3)

# 控制关节4运动-70°
mc.send_angle(Angle.J4.value, -70, 40)
time.sleep(3)

# 控制关节1运动90°
mc.send_angle(Angle.J1.value, 90, 40)
time.sleep(3)

# 控制关节5运动-90°
mc.send_angle(Angle.J5.value, -90, 40)
time.sleep(3)

# 控制关节5运动90°
mc.send_angle(Angle.J5.value, 90, 40)
time.sleep(3)
```

<video id="my-video" class="video-js" controls preload="auto" width="100%"
poster="" data-setup='{"aspectRatio":"16:9"}'>

  <source src="../../resources/10-ApplicationPython/myArm/2.3控制单关节运动01.mp4"></video>

## 4 多关节运动

```python
import time
from pymycobot import MyCobot

# MyCobot 类初始化需要两个参数：
#   第一个是串口字符串， 如：
#       linux： "/dev/ttyUSB0"
#       windows: "COM3"
#   第二个是波特率：
#       M5版本为： 115200
#
#   Example:
#       mycobot-M5:
#           linux:
#              mc = MyCobot("/dev/ttyUSB0", 115200)
#           windows:
#              mc = MyCobot("COM3", 115200)
#       mycobot-raspi:
#           mc = MyCobot(PI_PORT, PI_BAUD)

# 初始化一个MyCobot对象
mc = MyCobot('COM3', 115200)

# 机械臂复原归零
mc.send_angles([0,0,0,0,0,0],50)
time.sleep(2.5)
# 控制多个关节转动的不同角度
mc.send_angles([90,45,-90,90,-90,90],50)
time.sleep(2.5)

# 机械臂复原归零
mc.send_angles([0,0,0,0,0,0],50)
time.sleep(2.5)

# 控制多个关节转动的不同角度
mc.send_angles([-90,-45,90,-90,90,-90],50)
time.sleep(2.5)
```

<video id="my-video" class="video-js" controls preload="auto" width="100%"
poster="" data-setup='{"aspectRatio":"16:9"}'>

  <source src="../../resources/10-ApplicationPython/myArm/2.4控制多个关节01.mp4"></video>

## 5 坐标控制

```python
from pymycobot.mycobot import MyCobot
from pymycobot.genre import Coord
import time

# MyCobot 类初始化需要两个参数：
#   第一个是串口字符串， 如：
#       linux： "/dev/ttyUSB0"
#       windows: "COM3"
#   第二个是波特率：
#       M5版本为： 115200
#
#   Example:
#       mycobot-M5:
#           linux:
#              mc = MyCobot("/dev/ttyUSB0", 115200)
#           windows:
#              mc = MyCobot("COM3", 115200)
#       mycobot-raspi:
#           mc = MyCobot(PI_PORT, PI_BAUD)

# 初始化 MyCobot 对象
# 为 Windows 版本创建下面的对象代码
mc = MyCobot("COM3", 115200)

# 获取当前头部的坐标和姿态
coords = mc.get_coords()
print(coords)

# 发送角运动到某一姿态以进行坐标控制，速度为 50
mc.send_angles([0, 0, -90, 0, 90, 0], 50)
time.sleep(2.5)

# 智能规划路线，使头部以线性方式到达坐标[-2.3, -153.2, 523.8]，并保持[-90.0, 0.7, 179.73]的姿势，速度为 50mm/s
mc.send_coords([-2.3, -153.2, 523.8, -90.0, 0.7, 179.73], 50, 1)

# 将等待时间设置为 1.5 秒
time.sleep(1.5)

# 智能规划路线，使头部以线性方式到达坐标[0.0, -120.4, 500.3]，并保持[-70.81, -22.71, -163.49]的姿态，速度为 50mm/s
mc.send_coords([0.0, -120.4, 500.3, -70.81, -22.71, -163.49], 50, 1)

# 将等待时间设置为 1.5 秒
time.sleep(1.5)

# 只更改头部的 x 坐标，将头部的 x 坐标设为 100。让它智能规划路线，以 70 毫米/秒的速度将头部移动到更改后的位置
mc.send_coord(Coord.X.value, 100, 70)

```

## 6 控制机械臂左右摆动

```python
from pymycobot.mycobot import MyCobot
from pymycobot.genre import Angle
from pymycobot import PI_PORT, PI_BAUD  # 当使用树莓派版本的mycobot时，可以引用这两个变量进行MyCobot初始化
import time
# 初始化一个MyCobot对象
# Pi版本
# mc = MyCobot(PI_PORT, PI_BAUD)
# M5版本
mc = MyCobot("COM3", 115200)
# 获得当前位置的坐标
angle_datas = mc.get_angles()
print(angle_datas)

# 用数列传递传递坐标参数，让机械臂移动到指定位置
mc.send_angles([0, 0, 0, 0, 0, 0], 50)
print(mc.is_paused())
# 设置等待时间，确保机械臂已经到达指定位置
# while not mc.is_paused():
time.sleep(2.5)

# 让关节1移动到90这个位置
mc.send_angle(Angle.J1.value, 90, 50)

# 设置等待时间，确保机械臂已经到达指定位置
time.sleep(2)

# 设置循环次数
num = 5

# 让机械臂左右摇摆
while num > 0:
    # 让关节2移动到50这个位置
    mc.send_angle(Angle.J2.value, 50, 50)
    # 设置等待时间，确保机械臂已经到达指定位置
    time.sleep(1.5)
    # 让关节2移动到-50这个位置
    mc.send_angle(Angle.J2.value, -50, 50)
    # 设置等待时间，确保机械臂已经到达指定位置
    time.sleep(1.5)
    num -= 1
# 让机械臂缩起来。你可以手动摆动机械臂，然后使用get_angles()函数获得坐标数列，
# 通过该函数让机械臂到达你所想的位置。
mc.send_angles([88.68, -138.51, 155.65, -128.05, -9.93, -15.29], 50)

# 设置等待时间，确保机械臂已经到达指定位置
time.sleep(2.5)
# 让机械臂放松，可以手动摆动机械臂
mc.release_all_servos()
```

<video id="my-video" class="video-js" controls preload="auto" width="100%"
poster="" data-setup='{"aspectRatio":"16:9"}'>

  <source src="../../resources/10-ApplicationPython/myArm/2.5python控制机械臂左右摆动01.mp4"></video>

## 7 控制机械臂跳舞

```python
from pymycobot.mycobot import MyCobot
from pymycobot import PI_PORT, PI_BAUD  # 当使用树莓派版本的mycobot时，可以引用这两个变量进行MyCobot初始化
import time

if __name__ == '__main__':
    # MyCobot 类初始化需要两个参数：
    #   第一个是串口字符串， 如：
    #       linux： "/dev/ttyUSB0"
    #       windows: "COM3"
    #   第二个是波特率：
    #       M5版本为： 115200
    #
    #   Example:
    #       mycobot-M5:
    #           linux:
    #              mc = MyCobot("/dev/ttyUSB0", 115200)
    #           windows:
    #              mc = MyCobot("COM3", 115200)
    #       mycobot-raspi:
    #           mc = MyCobot(PI_PORT, PI_BAUD)
    #
    # 初始化一个MyCobot对象
    # 下面为树莓派版本创建对象代码
    mc = MyCobot(PI_PORT, PI_BAUD)
    # M5版本
    # mc = MyCobot("COM3",115200)

    # 设置开始开始时间
    start = time.time()
    # 让机械臂到达指定位置
    mc.send_angles([-1.49, 115, -153.45, 30, -33.42, 137.9], 80)
    # 判断其是否到达指定位置
    while not mc.is_in_position([-1.49, 115, -153.45, 30, -33.42, 137.9], 0):
        # 让机械臂恢复运动
        mc.resume()
        # 让机械臂移动0.5s
        time.sleep(0.5)
        # 暂停机械臂移动
        mc.pause()
        # 判断移动是否超时
        if time.time() - start > 3:
            break
    # 设置开始时间
    start = time.time()
    # 让运动持续30秒
    while time.time() - start < 30:
        # 让机械臂快速到达该位置
        mc.send_angles([-1.49, 115, -153.45, 30, -33.42, 137.9], 80)
        # 将灯的颜色为[0,0,50]
        mc.set_color(0, 0, 50)
        time.sleep(0.7)
        # 让机械臂快速到达该位置
        mc.send_angles([-1.49, 55, -153.45, 80, 33.42, 137.9], 80)
        # 将灯的颜色为[0,50,0]
        mc.set_color(0, 50, 0)
        time.sleep(0.7)
```

<video id="my-video" class="video-js" controls preload="auto" width="100%"
poster="" data-setup='{"aspectRatio":"16:9"}'>

  <source src="../../resources/10-ApplicationPython/myArm/2.6控制机械臂跳舞01.mp4"></video>

## 8 夹爪控制

```python
from pymycobot.mycobot import MyCobot
import time

# MyCobot 类初始化需要两个参数：
#   第一个是串口字符串， 如：
#       linux： "/dev/ttyUSB0"
#       windows: "COM3"
#   第二个是波特率：
#       M5版本为： 115200
#
#   Example:
#       mycobot-M5:
#           linux:
#              mc = MyCobot("/dev/ttyUSB0", 115200)
#           windows:
#              mc = MyCobot("COM3", 115200)
#       mycobot-raspi:
#           mc = MyCobot(PI_PORT, PI_BAUD)

# 初始化 MyCobot 对象
mc = MyCobot("COM13", 115200)
# 使其移动到零位
mc.send_angles([0, 0, 0, 0, 0, 0], 40)
time.sleep(3)
# 专业自适应夹爪在使用前需要设置为透明传输模式
mc.set_gripper_mode(0)
time.sleep(1.5)

num = 5
while num > 0:
    # 设置夹爪状态，以 70 的速度快速打开夹爪，参数 1 代表专业自适应夹爪类型
    mc.set_gripper_state(0, 70, 1)
    time.sleep(3)
    # 设置夹爪状态，以 70 的速度快速关闭夹爪，参数 1 代表专业自适应夹爪类型
    mc.set_gripper_state(1, 70, 1)
    time.sleep(3)
    num -= 1

num = 3
while num > 0:
    # 将夹爪数值设为 0，速度设为 70，参数 1 代表专业自适应夹爪类型
    mc.set_gripper_value(0, 70, 1)
    time.sleep(3)
    # 将夹爪值设为 50，速度设为 70，参数 1 代表专业自适应夹爪类型
    mc.set_gripper_value(50, 70, 1)
    time.sleep(3)
    # 将夹爪数值设为 0，速度设为 70，参数 1 代表专业自适应夹爪类型
    mc.set_gripper_value(0, 70, 1)
    time.sleep(3)
    num -= 1

# 获取夹爪的值
print("gripper value:", mc.get_gripper_value())
```

<video id="my-video" class="video-js" controls preload="auto" width="100%"
poster="" data-setup='{"aspectRatio":"16:9"}'>

  <source src="../../resources/10-ApplicationPython/myArm/2.7夹爪的安装与使用01.mp4"></video>

---

[← 上一页](5_Handle_control.md) | [下一节 →](../../11-ApplicationBaseROS/11.1-ROS1/11.1.2-PI.md)
