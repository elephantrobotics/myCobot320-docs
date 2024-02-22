# Environment Building

pymycobot is a Python package used for serial communication with myCobot. It supports Python2, Python3.5 and later versions.

Before using pymycobot, make sure to build a Python environment. Follow the steps below to install Python.

## 1 Download and Installation of Python


At present, Python has two versions: `2.x` and `3.x`. These two versions are incompatible with each other. This section takes the version `3.x` as an example due to its increasing popularity.

### 1.1 Installing Python

The Raspberry Pi version comes with an Ubuntu (V-20.04) system and a built-in Python development environment, so you don't need to build and manage it.

## 2 Preparations

* Firmware burning. Firmware serves as a driver for systems to control robots. 

  * **Pi \ jetsonnano version** `AtomMain` for **Atom** at the top is factory burnt.
  

* Update pymycobot

```bash
pip install pymycobot --upgrade
```


## 3 Import of pymycobot 

This part takes MyCobot 320 Pi as an example to introduce how to control a robot via python. 

* Import  pymycobot  library for MyCobot :

```python
from pymycobot.mycobot import MyCobot
```

> **Notice:**
>
> 1. If no red wavy line appears below the codes, pymycobot is successfully installed.
> 2. if a red wavy line appears, got to the address **https://github.com/elephantrobotics/pymycobot** to download pymycobot manually and put it into python library.
>
> <img src="../../resources/10-ApplicationBasePython/pymycobotdownload.jpg" alt="7.1.1-7" style="zoom: 33%;" />



## 4 **Simple Demo**

Create a new Python file, and type the following codes to set the color of RGB light panel.

>  **Notice:** The baud rates are different according to types of devices. Refer to **[calculator device manager](https://docs.elephantrobotics.com/docs/gitbook-en/4-BasicApplication/4.1-myStudio/4.1.1-myStudio_download_driverinstalled.html#4113-%E5%A6%82%E4%BD%95%E5%8C%BA%E5%88%86cp210x%E5%92%8Ccp34x%E8%8A%AF%E7%89%87)** to check the corresponding number.



* **Codes for MyCobot:**

```python
# demo.py
from pymycobot.mycobot import MyCobot
import time
#The above codes are required to be written, which means importing the project package

# MyCobot class initialization requires two parameters:
#   The first is the serial port string: '/dev/ttyAMA0'
#   The second is the baud rate: 115200
# 
# 
#    Example:
#       mycobot-Pi: mc = MyCobot('/dev/ttyAMA0', 115200)

# Initiate MyCobot
# Create object code here.
mc = MyCobot("/dev/ttyAMA0", 115200)

i = 7
#loop 7 times
while i > 0:							
    mc.set_color(0,0,255) #blue light on
    time.sleep(2)	#wait for 2 seconds				
    mc.set_color(255,0,0) #red light on
    time.sleep(2)	#wait for 2 seconds
    mc.set_color(0,255,0) #green light on
    time.sleep(2)	#wait for 2 seconds
    i -= 1
```

Run the example file:
```bash
python3 demo.py
```


The blue, red, and green lights on the top of the robot flash 7 times continuously at an interval of 2 seconds.

---

[← Previous Page](../README.md) | [Next Page →](2_API.md)