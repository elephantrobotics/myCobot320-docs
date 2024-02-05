# Factory firmware introduction


- **myCobot 320-M5**


## 1 Factory firmware for micro-controller devices - miniRoboFlow

**miniRoboFlow** has four main functions: 
- [**Maincontrol**](https://docs.elephantrobotics.com/docs/myarm-pi-300-en/4-BasicApplication/4.2-firmwares_intro/4.2.1-moving/)
  - Robot drag teaching: The operator can drag robot joints directly to make them do ideal postures, and then save the actions in the robot through **button operation**. The cobot is a system that has this function earlier. This kind of teaching avoids various disadvantages of
  traditional teaching, so it is a prospective technology for robot applications. 
- [**Calibration**](https://docs.elephantrobotics.com/docs/myarm-pi-300-en/4-BasicApplication/4.2-firmwares_intro/4.2.2-calibration/)
  - Calibrating the robot arm is the precondition for precise control of the robot arm, and setting joint zero and initializing the potential of the motor are basic jobs for subsequent advanced development. 
- [**Transponder**](https://docs.elephantrobotics.com/docs/myarm-pi-300-en/4-BasicApplication/4.2-firmwares_intro/4.2.3-transponder/)
  - Communication timeliness is vital to the micro-controller robot arm.For such arm, we often send control instructions to **M5Stack-basic** at the bottom. Through communication forwarding, the end effector analyzes the instructions and then implements target actions. At present, **myCobot280** has three methods of communication: **serial port, Bluetooth, and WIFI**. 
- [**Information**](https://docs.elephantrobotics.com/docs/myarm-pi-300-en/4-BasicApplication/4.2-firmwares_intro/4.2.4-connection/)
  - Link test is a detection function that uses the motor in the robot arm and the connection state of **Atom**. The function allows the user to remove equipment faults easily. During the link test, the connection state of the equipment for the robot arm, including the **connection of the servo** and the **communication state of Atom** can be seen. In
  micro-controller devices, the versions of their current firmwares are shown on M5Stack-basic.

