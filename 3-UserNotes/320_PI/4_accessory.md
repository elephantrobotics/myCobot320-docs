# Accessory issue

**Q: IO connection diagram between 280pi and suction pump**
![alt text](../../../resources/3-UserNotes/4-accessory/IO接口.png)

**Q: How to deal with the inability to control the opening and closing of the 320+ adaptive gripper?**

- A: Check according to the following methods:  
Check if the robot arm can be controlled. If it cannot be controlled, please refer to the initial joint verification troubleshooting in this article.  
In the case where the robot arm can be controlled normally, manually open the gripper to the maximum angle, then power on and refer to the control source code below.  
MyBlockly controls the gripper source code:  
IO mode (Note that when switching from transparent mode to IO mode, the gripper needs to be powered off and reconnected):  

![alt text](../../../resources/3-UserNotes/4-accessory/夹爪控制myblockly.png)  

- Transparent mode：  

![alt text](../../../resources/3-UserNotes/4-accessory/夹爪控制myblockly2.png)
Python control code for the gripper:

```python
from pymycobot import MyCobot
import time

# Please change the serial port number to the actual serial port number of your computer, open the gripper to the maximum, and then run this script.
mc = MyCobot('com4',115200)

# IO mode
# Gripper fully open and fully closed control code. Note that when switching from gripper transparent mode to IO mode, you need to first turn off the machine and then restart the robot once to switch back to gripper IO mode.
mc.set_gripper_mode(1)#IO mode
for i in range(3):
    mc.set_digital_output(33,0)#IO恢复低电平
    time.sleep(1)
    mc.set_digital_output(33,1)
    time.sleep(1)
    mc.set_digital_output(23,0)#IO恢复低电平
    time.sleep(1)
    mc.set_digital_output(23,1)
    time.sleep(1)   

# Transparent mode：
# mc.set_gripper_mode(0)
# time.sleep(1)
# for i in range(3):
#     mc.set_gripper_value(26,20)
#     time.sleep(1)
#     mc.set_gripper_value(86,20)
#     time.sleep(1)
```

- Note that the gripper is set to default port mode at the factory. If you want to use transparent mode, you need to switch to transparent mode. Additionally, if you want to switch back from transparent to port mode, you need to use power_off() or unplug and reconnect the gripper's wiring to restart the gripper before the switch can be completed. Otherwise, the switch will be ineffective, and port mode control cannot be used.  

- In case of abnormal gripper behavior, zero-point calibration is required. Under normal circumstances, the gripper should be able to fully open to its maximum position. If the gripper cannot fully open, please refer to the following source code for zero-point calibration.

```python
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

- You can run it several times until you see the following message, indicating that calibration is complete.  

![alt text](../../../resources/3-UserNotes/4-accessory/several_notice.png)  

**Q: Should the protrusion indicated by the arrow on the modular suction cup be removed?**

- A:It needs to be manually removed.

**Q: Source code for adaptive gripper usage with 270:**

```python
from pymycobot import MechArm
import time

mc = MechArm('COM17',115200)
mc.set_gripper_calibration()
for count in range(3):
  time.sleep(2)
  mc.set_gripper_state(1, 50)
  time.sleep(2)
  mc.set_gripper_state(0, 50)
```

**Q: What precautions should be taken when gripping objects and moving the robotic arm?**

- A: When the load > 500g, the speed should be lower than 50%.

**Q: Is there a video tutorial for using 320 with cylinders and modular suction cups?**

- A: Refer to the link:  
    > https://drive.google.com/file/d/1Ei0JRjXn_YWDyYPPZeBVrAW_VzPUlx6e/view?usp=sharing

**Q: Is there a video tutorial for using 320 with pneumatic grippers?**

- A: Refer to the link:  
    > https://drive.google.com/file/d/1nL4mgUf0OYOyCJPf4d5GNkWmbkuWBoup/view?usp=sharing

**Q: Is there a video tutorial for using 320 with Pro adaptive grippers?**

- A: Refer to the link:  
    > https://drive.google.com/file/d/1nL4mgUf0OYOyCJPf4d5GNkWmbkuWBoup/view?usp=sharing
