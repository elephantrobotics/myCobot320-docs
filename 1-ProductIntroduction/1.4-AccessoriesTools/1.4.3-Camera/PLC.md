# Mycobot320 and PLC IO interactive control case

## 1 Functional effect description
After the robot receives the IO signal from the PLC, it will perform an action of returning each joint to zero position

## 2 Principle description
The output end of the robot will first output a signal. After the PLC collects the input signal, the PLC output end will output a signal, so that the 24v relay coil is energized, the normally open contact is connected, and the low-level signal is transmitted to the input end of the robot. After the robot collects the input signal, it will perform an action of returning each joint to zero position

## 3 Hardware link
**Overall connection diagram**
![](./resource/PLC2.png)

**Wiring of the input of the robot and the output of the PLC**

The PLC is Siemens 1200, the output type of the PLC is PNP, and the input type of the robot is NPN, so an external intermediate relay is required to convert the signal.

First connect 24V to the PLC output
![](./resource/1.jpg)

Then connect the relay coil to the common terminal and Q0.0 of the PLC
![](./resource/3.jpg)
![](./resource/4.jpg)

Then connect the normally open contact wire of the relay to the terminal
![](./resource/5.jpg)

Then connect the terminal to IN1 of the robot
![](./resource/66.jpg)

**The output of the robot arm is connected to the PLC Input wiring**

PLC is Siemens 1200, the input type of PLC supports PNP or NPN, the output type of the robot is PNP, so the input of PLC adopts PNP type connection

First connect 24V to the input terminal of PLC
![](./resource/7.jpg)

Then connect the GND and OUT1 of the robot to the common terminal and I0.0 of PLC
![](./resource/8.jpg)

Then insert the terminal into the output of the robot
![](./resource/10.jpg)

## 4 Software Programming

**Robotic Arm Program**

```python
from pymycobot import MyCobot
import time
mc=MyCobot("COM8")
mc.set_basic_output(1,0)
while 1:
if mc.get_basic_input(1)==0:
mc.send_angles([0,0,0,0,0,0],50)
break
else:
pass
mc.set_basic_output(1,1)
```
**PLC Program**
![](./resource/plc1.png)

## 5 Effect Display

![](./resource/video.gif)