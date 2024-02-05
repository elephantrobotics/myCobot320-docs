# Connection detection

![basic&atom](../../../resourse/4-BasicApplication/4.2/4.2.4/4.2.4-basic&atom.png)

Link test is a detection function that uses the motor in the robot arm and the connection state of **Atom**. The function allows the user to remove equipment faults easily.

During the link test, the connection state of the equipment for the robot arm, including the **connection of the servo** and the **communication state of Atom** can be seen. In **micro-controller devices**, the versions of their current firmwares are shown on M5Stack-basic.

**Different types of devices have different operating methods**. They have the approximate steps below: 
- Burn the latest version of **atomMain** for **Atom**, and the **minirobot** for **M5Stack-basic.** 
- Choose the **Information** function (It is unnecessary to burn **M5Stack-basic** for micro-CPU devices)
- press the detection key to detect the connection of the devices
- press the firmware view key to check the version of the current firmware
- press the exit button to exit this function.

In this chapter, we will learn how to use the detection function for
different types of devices.
