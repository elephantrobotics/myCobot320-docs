# Development Environment Construction

## 1 Use Environment

myCobot 320 for M5 is developed and used on the basis of PC. As there is no built-in system inside the robotic arm, the combination of the robotic arm and the PC is required during use. Prepare a PC firstly before use.

## 2 Development Environment

In order to meet the diverse application needs of robots in different scenarios, we have adapted the robot for multiple programming languages. So far, we have adapted the following mainstream programming languages. If you find any of the following languages challenging, you can return to the **[myBlockly](../5-BasicApplication/5.2-ApplicationUse/5.2.1-myblockly/320m5/README.md)** section and use a visual programming language for development. However, we believe that you can use any of the following languages for development. Please make sure to strictly follow the instructions during the operation. Any missed steps may result in the corresponding language not running successfully. We wish you smooth and successful robot usage.

|<img src="../resources/3-UserNotes/3.1-SafetyInstructions/warning.png" alt="img-2" width="100" height=“100” /> |If you wish to use the following programming languages, please ensure that your robot has been configured under the Transponder section with the USB/Wi-Fi mode and confirm that the connection is correct.|
|------------------------|-------------------|



* [6.1 Python](../10-ApplicationBasePython/README.md)<br>
Our robots support Python and the development of the Python API library has become increasingly complete. The joint angle, coordinates, gripper and other aspects of the robot can be controlled via Python. <br>

* [6.2 Robot Operating System 1 (ROS1) ](11-ApplicationBaseROS/11.1-ROS1/11.1.1-M5.md)<br>
ROS is open-source and is a post operating system, or secondary operating system, used for robot control. With the use of ROS, the simulation control of the manipulator can be realized in the virtual environment. The robotic arm can be visualized through the rviz platform, and operate the robotic arm in a variety of ways. It can also be used to plan and execute the robotic arm's action path through to freely control the robotic arm. <br>

* [6.3 Robot Operating System 2 (ROS2)](11-ApplicationBaseROS/11.2-ROS2/11.2.1-M5.md)<br>
The predecessor of ROS2 is ROS, and ROS is the Robot Operating System (Robot Operating System). But ROS itself is not an operating system, but a software library and toolset. The emergence of Ros solved the communication problem of each component of the robot. Later, more and more robot algorithms were integrated into ROS. ROS2 inherited ROS, which is more powerful and better than ROS.

* [6.4 C Sharp (C#)](../15-ApplicationBaseCSharp/15.6C-M5.md)<br>
 C# is an object-oriented programming language derived from C and C++ released by Microsoft, an advanced programming language running on .NET Framework and .NET Core (completely open source and cross-platform) . Using the C#, you can freely develop programs (coordinate control, angle control, io control, gripper control, etc.) through the C# dynamic library provided by our company, and control some of the robots.<br>
* [6.5 C plus plus (C++)](../12-ApplicationBaseCPlus/README.md)<br>
C++ is the inheritance of C Language. It can not only carry out the procedural programming of the C Language, but also the object-based programming characterized by abstract data types, as well as inheritance and polymorphism as the Features of object-oriented programming. With C++ language, you can freely develop programms(coordinate control, angle control, io control, gripper control, etc.) through the C++ dynamic library developed by our company, and control some of the robots. <br>
* [6.6 Arduino](../16-ArduinoEnv320/README.md)<br>
Arduino is an easy-to-use, open-source electronic prototyping platform that includes hardware (various Arduino-compliant development boards) and software (Arduino IDE and related development kits). The hardware part (or development board) consists of a microcontroller (MCU), flash memory (Flash), and a set of general-purpose input/output interfaces (GPIO), etc. It can be understood as a microcomputer motherboard. The software part is mainly composed of Arduino IDE on the PC side, related board support packages (BSP) and rich third-party function libraries. Users can use Arduino IDE to easily download the BSP related to the development board and the required function library to write program.

* [6.7 Communication](./6.1-CommunicationDoc.md)<br>
If you happen to have some understanding of information theory, coding, and robot communication functionality, then you should grasp that all communication originates from data transmission. To make it more convenient for users to operate the robot, we have opened up a communication protocol based on serial communication. You can use a serial assistant or encapsulate it into any programming language you are familiar with to control the robot.

 ----
[← Basic Application](../../README.md) | [Files Download →](/8-FilesDownload/README.md)