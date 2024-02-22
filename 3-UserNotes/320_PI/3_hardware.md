# Questions about the Structure

Q1:  What are the maximum angle of Joint 1 and Joint 6 of myCobot 320 Pi?

A1:

| Joint | min<sup>o</sup>  | max<sup>o</sup>  | max speed<sup>o</sup> /s| max acceleration<sup>o</sup>/s<sup>2</sup>|
| ----- | ---- | ---- | ------------ | ------------ |
| J1    | -170 | 170  | 150          | 200          |
| J2    | -120 | 120  | 150          | 200          |
| J3    | -148 | 148  | 150          | 200          |
| J4    | -120 | 135  | 150          | 200          |
| J5    | -169 | 169  | 150          | 200          |
| J6    | -180 | 180  | 150          | 200          |



Q2: What controls the six steering engine?

A2: They are controlled by Atom at the top of the robot.



Q3: What functions Atom performs?

A3: It serves to control the robot by algorithm, such as forward, inverse kinematics and coordinate switching. Atom is temporarily not open-sourced.

# Questions about the Communication

Q1: Why the screen has no display although the robotic arm has been connected with HDMI cable? Does it need to download a port driver?

A1: Check whether the connection is correct and the power has been turned on. Try to use another interface and plunge into the interface stably. There is no need to download a port driver.

Q2: What are the versions of communication interface supported by different robotic arms?

A2: The robotic arms of micro-processor supports TCP communication, and the robotic arms of micro-controller supports USB-port communication.

Q3: How much is the frequency of the communication of robotic arm?

A3: 10-20Hz.



# Questions about Parameters

Q1: What's the unit of measurement of the speed of robotic arm?

A2: 180°/s.



# Solutions to Hardware Problems

1. How to deal with the shaking of robotic arms?

   **Step 1:** Burn the latest version of ATOM via myStudio.

   **Step 2:** Upgrade pymycobot. Click on Win+R, and type cmd to enter in the terminal. Type `pip install pymycobot --upgrade --user` and then press on Enter Key.

   **Step 3:** Go to [GitHub](https://github.com/elephantrobotics/pymycobot/tree/main/demo) to download pid_read_write.py. Reset each parameter of the steering engine according to the prompt message. And then, operate the system again.

   **Notice:  Set the parameters according to the data given in the pictures below.**



<img src =../..//resources/3-UserNotes/14-IssueFAQ/参数.png
width ="500"  align = "center">





<img src =../../resources/3-UserNotes/14-IssueFAQ/mycobot_pro320.png
width ="500"  align = "center">

# Questions about Gripper & End

Q1: Can the gripper close completely?

A1: Due to the thickness of the gripper, it cannot close completely. You resort to a shim to make it completely closed.

Q2: What is the kind of communication of adaptive gripper?

A2: It is TTL communication.

Q3: What is the communication of the end of myCobot 320 Pi？

A3: 485 communication interface.

Q4: How to fix a camera at the end of a robotic arm?

A4: A flange is required to fix a camera.

# Other Questions

Q1: Why the electric engine powers off during usage?

A1: Because the engine is too hot to be used. Please wait for a few minutes and reuse again.

Q2: Does the robotic arms support the development based on Android?

A2: We doesn't support Android development. If you want to develop it by yourself, we can provide you with port protocol.




[← Previous Page](./2_software.md) | [Next Section →](../../4-FirstInstallAndUse/4.1_320_PI_firstUse.md)

