# Basic Application

| <img src="../resources/3-UserNotes/3.1-SafetyInstructions/danger.png" alt="img-1" width="600" height=“auto” /> | This chapter primarily provides explanations for the basic functionality usage of the product and the use of basic software. This chapter is essential and should be read carefully. Please ensure a correct understanding of the described operations before proceeding with actual robot applications. |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

For the myCobot series of products, we have introduced software specifically designed for robot applications and maintenance, which is available for our users. Among them, miniRoboflow, myBlockly, and myStudio are essential tools for users working with the robot. This chapter will provide detailed descriptions of the usage of these three software applications.

## Function Description

<img src="../resources/4-FirstInstallAndUse/320withPC.jpg" alt="img-1" width="600" height=“auto” />

The myCobot 320 robot consists of three controller parts: Basic (a small screen with buttons at the base), Pico (a chip inside the flat Type-C interface on the base), and Atom (the LED light board at the robot's end-effector).

The Basic controller is responsible for handling external interactions, converting data into information that the robot can recognize. So you can use USB Line Connect computer By Basic Type-C Port. (On the left side of the screen.)

The Pico controller manages robot motion algorithms, joint control, and bottom IO control. (No connection is required for normal use.)

The Atom controller is in charge of processing data information from the tool interface and IO control. Together, these three components collaborate to ensure the proper functioning of the robot. (No connection is required for normal use.)

## Software Description:

- [miniRoboflow](./5.1-SystemUsageInstructions/320m5/README.md)<br>
  miniRoboflow is a robot control software developed by Elephant Robotics specifically for embedded devices.<br>
  This software is developed to simplify user interaction with the robot and runs on the Basic controller located at the bottom. Users can update the corresponding software version through the USB interface.(On the left side of the screen.)  
  This software provides features such as **path dragging teaching**, joint zero point calibration, **upper computer information processing**, and robot status querying. It is a compact yet feature-rich robot control software. <br>

- [myBlockly](./5.2-ApplicationUse/5.2.1-myblockly/320m5/README.md)<br>
  myBlockly is a completely visual modular programming software that is a graphical programming language.<br>
  myBlockly has a clean interface and comprehensive programming features. Its visual programming approach is suitable for users who are new to robot products.<br>

- [myStudio](./5.2-ApplicationUse/5.2.2-mystudio/320m5/README.md)<br>
  myStudio is a one-stop platform for using robots such as myRobot/myCobot.<br>
  It is convenient for users to select different firmware and download it according to their own usage scenarios, while learning relevant teaching materials and browsing tutorial videos online.<br>

For detailed information about the software, please refer to the description within this chapter.<br>

---

[← Previous Chapter](../4-FirstInstallAndUse/4.2-M5/4.2_320_M5_firstUse.md) | [Next Chapter →](../6-SDKDevelopment/README.md)
