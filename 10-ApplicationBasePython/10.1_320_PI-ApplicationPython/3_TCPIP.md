# TCP/IP

TCP/IP, or Transmission Control Protocol/Internet Protocol, is one of the most fundemental communicative protocol on Internet, which stipulates the standard and methods of the Internet communication. Users can control robotic arms remotely through connecting with IP address instead of the USB port.

In this chapter, myCobot 280 M5 is used as an example for explanation.

**Make sure that M5Stack-basic and Atom are both burnt before using.**

## myCobot

### Connection


#### 1.4 Raspberry Pi Connections

- When using Raspberry Pi for remote connection, you need to pay attention to the following points
  1. The Raspberry Pi and the control end need to be on the same network
  2. The server file needs to be executed first in the Raspberry Pi (For specific operations, see the gif operation diagram)
  3. After the server file is executed, the prompt "Binding succeeded and waiting connect" indicates that the opening is successful, and the control terminal can refer to **2 Simple Demo**

​	![Server](../../resources/10-ApplicationBasePython/TCPIP/Server.gif)

*specific operation is:*

*clone our project library：*`git clone https://github.com/elephantrobotics/pymycobot.git`

*find the [Server.py](https://github.com/elephantrobotics/pymycobot/blob/main/demo/Server.py) file in the demo folder and execute it with python*

### Instructions for use:

Please update pymycobot to the latest version before use.

`pip install pymycobot --upgrade`


Please change the parameters passed in the last line of the [Server.py](https://github.com/elephantrobotics/pymycobot/blob/main/demo/Server.py) file, MycobotServer, based on your model.


The default model is the 320 PI.

    The default parameters are: 

        serial_num: /dev/ttyUSB

        baud: 115200

### Simple Demo

```python
from pymycobot import MyCobotSocket
# Use port 9000 by default
# Where "192.168.10.22" is the IP of the robot arm
mc = MyCobotSocket("192.168.10.22",9000)

#After the connections is normal, the robot arm can be controlled.
res = mc.get_angles()
print(res)
mc.send_angles([0,0,0,0,0,0],20)
...
```

---

[← Previous Page](2_API.md) | [Next Page →](4_drag.md)