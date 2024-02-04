# Software Problem

**Q: Why can't my compiler find the corresponding device?**
- A: You need to build a development environment and install the corresponding project library before you can develop the device.


## 1 About myStudio

**Q: What is myStudio?**

- A: It is the firmware burner. [About more](../../5-BasicApplication/5.2-ApplicationUse/5.2.2-mystudio/320pi/README.md)

**Q: Is there any difference between the firmware used by MyCobot 320 Pi-2020 and 2022 models?**

A:
- Firmware requirements for the earlier version myCobot 320 Pi are as follows:
  - ubuntu18.04
  - atommain 4.1
 - Firmware requirements for the new version myCobot 320 Pi are as follows:
    - ubuntu18.04
    -  picomain 1.3
    -  atommain 5.0

    This firmware combination is up to mystudio version v3.5.7

**Q: Why can't the device run normally after I burn the firmware to the ATOM terminal?**
- A: The firmware of the ATOM terminal needs to use our factory firmware. Other unofficial firmware cannot be changed during use. If the device accidentally burns other firmware, you can use the [myStudio](../../5-BasicApplication/5.2-ApplicationUse/5.2.2-mystudio/320pi/README.md) reburn ATOM firmware.






## 2 About Roboflow


**Q: Can robotstudio software be used for programming?**
- A: Our own industrial programming software roboflow can be used. RobotStudio is owned by ABB.


**Q: What is the reason for the Quickmove of the roboflow software beyond the limit?**

- A: It may be that a joint or multiple joints exceed the limit.


**Q: How does roboflow load the already written program?**

- A: After logging in, select program robot and click load program. Directly clicking run program cannot be used, only pro600 can.





## 3 About mycobot phone controller


**Q: What version of firmware should myCobot phone controller app be programmed with?**
- A: You need to burn the atom firmware version atommain 2.5 in myStudio.
>As of 2023/2/4, the mobile APP control function has been disabled, please pay attention to the release of mystudio firmware version when restarting.


## 4 About myblockly

**Q: What is myblockly?**
 - A:[About myblockly](../../5-BasicApplication/5.2-ApplicationUse/5.2.1-myblockly/320pi/README.md)

**Q: Why does a pop-up box always appear when myblockly is running?**

- A: Before running the myblockly program, close the serial port occupation.

**Q: myblockly always appears child process exited with code 0 when running, why?**

- A: This is not an error. Real errors need to be analyzed on a case-by-case basis. This string of characters represents the end of the program, and returns the binary number 0, representing termination.

## 5 About ROS1

**Q：When a terminal switches to `~/catkin_ws/src` and uses git to install and update `mycobot_ros`, it appears that the target path "mycobot_ros" already exists. Why?**

- A：A `mycobot_ros` package already exists in `~/catkin_ws/src`, so you need to delete it beforehand and run git again.

**Q: When rosrun is running, a terminal error is reported saying `counld not open port /dev/ttyUSB0: Permission: '/dev/ttyUSB0'`. Why?**

- A: The serial port permission is insufficient. Enter `sudo chmod 777 /dev/ttyUSB0` to grant the permission.

**Q: Why can't ros programs run in vscode?**

- A：Since the vscode terminal cannot be loaded into the ros environment, it needs to run on the system terminal.

**Q: ` Unable to register with master node [http://localhost:11311]: Unable to register with master node. master may not be running yet. Will he keep trying`?**

- A: Before running the ros program, start the ros node and enter `roscore` on the terminal.

**Q: When rosrun runs, the terminal error shows `counld not open port /dev/ttyUSB0: No such file or directory: '/dev/ttyUSB1'`. Why?**

- A: The serial port is incorrect. Check the actual serial port of the manipulator. To view the value, run `ls /dev/tty*`.

**Q: Failure in Ubuntu18.04 `catkin_make` building code, terminal prompt `Project 'cv_bridge specifies'/usr/include/opencv' as an include dir, which is not found`. Wait for an error message**

- A: The opencv path in the configuration file is inconsistent with the actual path in the system. Need to use sudo to modify the configuration file (path is`/opt/ros/melodic/share/cv_bridge/cmake/cv_bridgeConfig cmake`), the system actual opencv path in the`/usr/include/`directory.

**Q: I cloned the mycobot_ros package and ran the rosrun program directly. package 'mycobot_280' not found or can't find the file?**

A: The newly cloned mycobot_ros needs to build code to compile to the ros environment. The input terminal

```bash
cd ~/catkin_ws/
catkin_make
source devel/setup.bash
```

**Q: After compiling, why does the following error occur when a new terminal runs launch command?**

<img src =../resources/3-UserNotes/17.4.3-1.png
width ="500"  align = "center">

- A1: The system has not added ros environment variable, so every time a new terminal is started, the source is required:

```bash
cd ~/catkin_ws/
source devel/setup.bash
```

- A2: ros environment variable is added to the system. There is no need to execute source after starting a new terminal:

```bash
# The noetic is Ubuntu20.04 system
echo "source /opt/ros/noetic/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

- A3: The file name in the instruction may not be the same as the file name in the mycobot_ros package. Please carefully check whether the instruction is incorrect.





[← Previous Page](./1_driver.md) | [Next Page →](./3_hardware.md)