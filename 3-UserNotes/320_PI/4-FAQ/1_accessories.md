# 配件相关问题

**Q：模块化吸盘上箭头指向的这个凸起是否需要割掉**

![](../../../resources/3-UserNotes/14-IssueFAQ/pi/m5_acce_1.png)

- A: 需要手动去掉的

**Q：mycobot pro自适应夹爪的引脚线序与连接方式是怎样的？**

mycobot自适应夹爪的引脚介绍参考下图：

![](../../../resources/3-UserNotes/14-IssueFAQ/pi/acce_3.png)

夹爪连接方式：

![](../../../resources/3-UserNotes/14-IssueFAQ/pi/acce_4.png)

**Q：320+自适应夹爪无法控制开合怎么处理？**

A：根据以下方法进行检查：
1. 检查机械臂能否控制，如无法控制请参考本文档“首次使用关节验证”排查
2. 使用mystudio烧录PICO1.3,Atom5.0版本固件（注意版本一致），如无法正常烧录固件，请查询本文档**Q：minirobot、Atom、PICO固件下载异常排查方法是什么？**
3. 使用下面的指令将pymycobot更新到3.9.7版本：

```bash
pip install pymycobot==3.9.7
```

4. 在机械臂能正常控制的情况下，让夹爪手动张开到最大角度，然后再接线上电，并参考下面的控制源码:

- **myblockly控制夹爪源码：**
  - IO模式（注意从透传模式切换回IO模式时，夹爪需要断电重新连接）：
    - ![](../../../resources/3-UserNotes/14-IssueFAQ/pi/pi_acce_5.png)
  - 透传模式
    - ![](../../../resources/3-UserNotes/14-IssueFAQ/pi/pi_acce_6.png)


- **pyhton控制夹爪源码：**

```python
# coding=utf-8
from pymycobot import MyCobot320
import time

# 需要将串口号更改为电脑实际的串口号，将夹爪张开到最大，再运行此脚本
mc = MyCobot320('/dev/ttyAMA0',115200)

#初始化夹爪
# mc.set_init_gripper("CAG-1")

# #IO模式
# # # #夹爪全开全闭合控制代码，注意在夹爪透传切换IO模式时需要先关闭机器再重启机器人一次，才能切换回夹爪IO模式
mc.set_gripper_mode(1)#IO模式
for i in range(3):
    mc.set_digital_output(33,0)#IO恢复低电平
    time.sleep(1)
    mc.set_digital_output(33,1)
    time.sleep(1)
    mc.set_digital_output(23,0)#闭合夹爪
    time.sleep(1)
    mc.set_digital_output(23,1)#IO恢复低电平
    time.sleep(1)   

# #透传模式
# mc.set_gripper_mode(0)
# time.sleep(2)#必须有延时
# for i in range(3):
#     mc.set_gripper_value(26,20)
#     time.sleep(1)
#     mc.set_gripper_value(86,20)
#     time.sleep(1)
    

```

5. 注意夹爪出厂默认设置端口模式，如使用透传需要切换成透传模式，另外如果想从透传切换回端口模式需使用power_off()或者拔插夹爪接线，让夹爪重启后才能完成切换，否则切换无效，无法使用端口模式控制。
6. 夹爪异常情况下，需要进行零位校准，在正常情况下，夹爪能够完全打开到最大位置，如果夹爪正常使用请忽略下面的内容，如果夹爪无法完全打开，请参考下面的源码进行零位校准：

```python
# coding=utf-8
from pymycobot import MyCobot
import time

# You need to change the serial port number to the actual serial port number of the computer, 
# open the gripper to the maximum, and then run this script.
mc = MyCobot('COM4',115200)
time.sleep(1)
mc.release_all_servos()
print("Please open the gripper manually to the maximum angle position within 5 seconds.")
time.sleep(5)
mc.power_on()
# #Tranmission mode
mc.set_gripper_mode(0)
time.sleep(1)
mc.set_gripper_calibration()
print("gripper calibrated successfully！")
```

可多运行几次，直到当你看到下面的信息时，即校准完成。

![](../../../resources/3-UserNotes/14-IssueFAQ/pi/pi_acce_7.png)

**Q：320pro自适应夹爪使用get_gripper_value()读取的数值未能正确读取0-100，有时是255这些正常吗？pro自适应有读取角度的接口吗？**

A：正常的，目前320pro自适应夹爪没有读取角度的接口，而get_gripper_value()是mycobot280的自适应夹爪专用的角度读取接口。


**Q：关于夹持物体与机械臂运动之间有什么需要注意的吗？**

当负载 > 500g时，速度需要低于 50%。

**Q：请问有320与气缸和模块化吸盘的使用视频吗？**

参考链接：https://drive.google.com/file/d/1Ei0JRjXn_YWDyYPPZeBVrAW_VzPUlx6e/view?usp=sharing 

**Q：请问有320与气动夹爪的使用视频吗？**

参考链接：https://drive.google.com/file/d/1nL4mgUf0OYOyCJPf4d5GNkWmbkuWBoup/view?usp=sharing 

**Q：请问有320与pro自适应夹爪的使用视频吗？**

参考链接：https://drive.google.com/file/d/1nL4mgUf0OYOyCJPf4d5GNkWmbkuWBoup/view?usp=sharing 


