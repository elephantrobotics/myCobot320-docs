# Videos and Codes for Display

Videos given below are for reference.

>  **Notice:** The baud rates are different depending on the type of device. Before using them, refer to the information related thereto. The serial port number can be viewed through [calculator device manager](https://docs.elephantrobotics.com/docs/gitbook-en/4-BasicApplication/4.1-myStudio/4.1.1-myStudio_download_driverinstalled.html#4113-how-to-distinguish-between-cp210x-chip-and-cp34x-chip) or a serial helper.

## 1 Controlling RGB Light Panel

```python
from pymycobot.mycobot import MyCobot

import time

# The above needs to be written at the beginning of the code, which means importing the project package

# MyCobot class initialization requires two parameters:
#   The first is the serial port string:"/dev/ttyAMA0"
#   The second is the baud rate: 115200
#
#    Example:
#           mc = MyCobot("/dev/ttyAMA0", 115200)
#
# Initialize a MyCobot object
mc = MyCobot("/dev/ttyAMA0", 115200)

i = 7
# loop 7 times
while i > 0:
    mc.set_color(0, 0, 255)  # blue light on
    time.sleep(2)  # wait for 2 seconds				
    mc.set_color(255, 0, 0)  # red light on
    time.sleep(2)  # wait for 2 seconds
    mc.set_color(0, 255, 0)  # green light on
    time.sleep(2)  # wait for 2 seconds
    i -= 1
```

<video id="my-video" class="video-js" controls preload="auto" width="100%"
poster="" data-setup='{"aspectRatio":"16:9"}'>
  <source src="../../resources/10-ApplicationBasePython/myArm/2.1python控制RGB灯板01.mp4" type='video/mp4' >
</video>



## 2 Controlling Arms to Move Them to Starting Point

```python
from pymycobot.mycobot import MyCobot

#The above needs to be written at the beginning of the code, which means importing the project package

# MyCobot class initialization requires two parameters:
#   The first is the serial port string:"/dev/ttyAMA0"
#   The second is the baud rate: 115200
#
#    Example:
#           mc = MyCobot("/dev/ttyAMA0", 115200)
#
# Initialize a MyCobot object
mc = MyCobot("/dev/ttyAMA0", 115200)

# Check whether the program can be burned into the robot arm
if mc.is_controller_connected() != 1:
    print("Please connect the robot arm correctly for program writing")
    exit(0)

# Fine-tune the robotic arm to ensure that all the bayonets are aligned in the adjusted position
# Subject to the alignment of the mechanical arm bayonet, this is only a case
mc.send_angles([0, 0, 0, 0, 0, 0], 30)
```

<video id="my-video" class="video-js" controls preload="auto" width="100%"
poster="" data-setup='{"aspectRatio":"16:9"}'>
  <source src="../../resources/10-ApplicationBasePython/myArm/2.2python控制机械回原点01.mp4"></video>


## 3  Single-Joint Motion

```python
from pymycobot.mycobot import MyCobot
from pymycobot.genre import Angle
import time

# MyCobot class initialization requires two parameters:
#   The first is the serial port string:"/dev/ttyAMA0"
#   The second is the baud rate: 115200
#
#    Example:
#           mc = MyCobot("/dev/ttyAMA0", 115200)
#
# Initialize a MyCobot object
mc = MyCobot("/dev/ttyAMA0", 115200)

# Robotic arm recovery
mc.send_angles([0, 0, 0, 0, 0, 0], 40)
time.sleep(3)

# Control joint 3 to move 70°
mc.send_angle(Angle.J3.value, 70, 40)
time.sleep(3)

# Control joint 4 movement -70°
mc.send_angle(Angle.J4.value, -70, 40)
time.sleep(3)

# Control joint 1 to move 90°
mc.send_angle(Angle.J1.value, 90, 40)
time.sleep(3)

# Control joint 5 movement -90°
mc.send_angle(Angle.J5.value, -90, 40)
time.sleep(3)

# Control joint 5 to move 90°
mc.send_angle(Angle.J5.value, 90, 40)
time.sleep(3)
```

<video id="my-video" class="video-js" controls preload="auto" width="100%"
poster="" data-setup='{"aspectRatio":"16:9"}'>
  <source src="../../resources/10-ApplicationBasePython/myArm/2.3控制单关节运动01.mp4"></video>



## 4 Multi-Joint Motion

```python
import time
from pymycobot import MyCobot

# MyCobot class initialization requires two parameters:
#   The first is the serial port string:"/dev/ttyAMA0"
#   The second is the baud rate: 115200
#
#    Example:
#           mc = MyCobot("/dev/ttyAMA0", 115200)
#
# Initialize a MyCobot object
mc = MyCobot("/dev/ttyAMA0", 115200)

# Robotic arm recovery
mc.send_angles([0, 0, 0, 0, 0, 0], 50)
time.sleep(2.5)

# Control different angles of rotation of multiple joints
mc.send_angles([90, 45, -90, 90, -90, 90], 50)
time.sleep(2.5)

# Return the robotic arm to zero
mc.send_angles([0, 0, 0, 0, 0, 0], 50)
time.sleep(2.5)

# Control different angles of rotation of multiple joints
mc.send_angles([-90, -45, 90, -90, 90, -90], 50)
time.sleep(2.5)
```

<video id="my-video" class="video-js" controls preload="auto" width="100%"
poster="" data-setup='{"aspectRatio":"16:9"}'>
  <source src="../../resources/10-ApplicationBasePython/myArm/2.4控制多个关节01.mp4"></video>


## 5 Coordinate control

```python
from pymycobot.mycobot import MyCobot
from pymycobot.genre import Coord
import time

# MyCobot class initialization requires two parameters:
#   The first is the serial port string:"/dev/ttyAMA0"
#   The second is the baud rate: 115200
#
#    Example:
#           mc = MyCobot("/dev/ttyAMA0", 115200)
#
# Initialize a MyCobot object
mc = MyCobot("/dev/ttyAMA0", 115200)

# Get the coordinates and posture of the current head
coords = mc.get_coords()
print(coords)

# Send angular motion to a certain attitude for coordinate control, with a speed of 50
mc.send_angles([0, 0, -90, 0, 90, 0], 50)
time.sleep(2.5)

# Intelligent planning of the route, allowing the head to reach the coordinates of [173.9, -11.0, 169.1] in a linear manner, and maintain the posture of [-176.69, -0.69, -89.27], with a speed of 80mm/s
mc.send_coords([173.9, -11.0, 169.1, -176.69, -0.69, -89.27], 80, 1)

# Set the waiting time to 1.5 seconds
time.sleep(1.5)

# Intelligent planning of the route, allowing the head to reach the coordinates of [213.8, -87.4, 236.1] in a linear manner, and maintain the posture of [177.8, -0.27, -90.07], with a speed of 80mm/s
mc.send_coords([213.8, -87.4, 236.1, 177.8, -0.27, -90.07], 80, 1)

# Set the waiting time to 1.5 seconds
time.sleep(1.5)

# Only change the x-coordinate of the head, setting the x-coordinate of the head to 100. Let it intelligently plan the route to move the head to the changed position at a speed of 70mm/s
mc.send_coord(Coord.X.value, 100, 70)

```

## 6 Controlling Gripper

```python
from pymycobot.mycobot import MyCobot
import time

# MyCobot class initialization requires two parameters:
#   The first is the serial port string:"/dev/ttyAMA0"
#   The second is the baud rate: 115200
#
#    Example:
#           mc = MyCobot("/dev/ttyAMA0", 115200)
#
# Initialize a MyCobot object
mc = MyCobot("/dev/ttyAMA0", 115200)
# make it move to zero position
mc.send_angles([0, 0, 0, 0, 0, 0], 40)
time.sleep(3)
# Pro adaptive gripper needs to be set to transparent transmission mode before use
mc.set_gripper_mode(0)
time.sleep(1.5)

num = 5
while num > 0:
    # Set the state of the gripper to quickly open the gripper at a speed of 70, Parameter 1 represents pro adaptive gripper type
    mc.set_gripper_state(0, 70, 1)
    time.sleep(3)
    # Set the state of the gripper to quickly close the gripper at a speed of 70, Parameter 1 represents pro adaptive gripper type
    mc.set_gripper_state(1, 70, 1)
    time.sleep(3)
    num -= 1

num = 3
while num > 0:
    # Set the gripper value to 0 and the speed to 70, Parameter 1 represents pro adaptive gripper type
    mc.set_gripper_value(0, 70, 1)
    time.sleep(3)
    # Set the gripper value to 50 and the speed to 70, Parameter 1 represents pro adaptive gripper type
    mc.set_gripper_value(50, 70, 1)
    time.sleep(3)
    # Set the gripper value to 0 and the speed to 70, Parameter 1 represents pro adaptive gripper type
    mc.set_gripper_value(0, 70, 1)
    time.sleep(3)
    num -= 1

# Get the value of the gripper
print("gripper value:", mc.get_gripper_value())
```

<video id="my-video" class="video-js" controls preload="auto" width="100%"
poster="" data-setup='{"aspectRatio":"16:9"}'>
  <source src="../../resources/10-ApplicationBasePython/myArm/2.7夹爪的安装与使用01.mp4"></video>

---

[← Previous Page](5_Handle_control.md) | [Next Section →](../../11-ApplicationBaseROS/11.1-ROS1/11.1.2-PI.md)