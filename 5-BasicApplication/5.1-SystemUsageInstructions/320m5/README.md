# Factory firmware introduction

The myCobot 320 M5 version comes with the built-in miniRoboflow application software, developed independently by Elephant Robotics. With simple button interactions, you can achieve functions such as drag teaching, communication forwarding, status checking, and zero-point calibration. 

The built-in software has a straightforward user interface and is easy to use. With communication forwarding capability, you can control the robot using various programming languages and development environments, making robot control easily accessible.


## miniRoboFlow

**miniRoboFlow** has four main functions: 
- [**Maincontrol**](/5-BasicApplication/5.1-SystemUsageInstructions/320m5/4.2.1-moving/4.2.1.1-micro_controller.md)
  - Robot drag teaching: The operator can drag robot joints directly to make them do ideal postures, and then save the actions in the robot through **button operation**. The cobot is a system that has this function earlier. This kind of teaching avoids various disadvantages of
  traditional teaching, so it is a prospective technology for robot applications. 
- [**Calibration**](/5-BasicApplication/5.1-SystemUsageInstructions/320m5/4.2.2-calibration/4.2.2.1-micro_controller.md)
  - Calibrating the robot arm is the precondition for precise control of the robot arm, and setting joint zero and initializing the potential of the motor are basic jobs for subsequent advanced development. 
- [**Transponder**](/5-BasicApplication/5.1-SystemUsageInstructions/320m5/4.2.3-transponder/4.2.3.1-micro_controller.md)
  - Communication timeliness is vital to the micro-controller robot arm.For such arm, we often send control instructions to **M5Stack-basic** at the bottom. Through communication forwarding, the end effector analyzes the instructions and then implements target actions. At present, **myCobot280** has three methods of communication: **serial port, Bluetooth, and WIFI**. 
- [**Information**](/5-BasicApplication/5.1-SystemUsageInstructions/320m5/4.2.4-connection/4.2.4.1-micro_controller.md)
  - Link test is a detection function that uses the motor in the robot arm and the connection state of **Atom**. The function allows the user to remove equipment faults easily. During the link test, the connection state of the equipment for the robot arm, including the **connection of the servo** and the **communication state of Atom** can be seen. In micro-controller devices, the versions of their current firmwares are shown on M5Stack-basic.


----
If you have already read all the content in this chapter, please proceed to the next chapter.<br>

[Next Chapter →](../../5.2-ApplicationUse/5.2.1-myblockly/320m5/README.md)<br>

