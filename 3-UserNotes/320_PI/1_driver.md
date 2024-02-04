# Drive Related



## 1 About python




**Q: send_coords([x,y,z,rx,ry,rz], speed, 1) What do the parameters in this API mean? What do rx, ry, and rz correspond to Euler angles? What is the rotation order of Euler angles? And what is the value range of each parameter?**

- A: The parameters in the previous array are the coordinates of the end of the myCobot320, speed is the speed, and the last parameter is the motion mode. rx, ry, and rz should correspond to rpy, that is, corresponding to roll, pitch, and yaw respectively. The order of Euler angles is zyx, and zyx is its own coordinate. The value range of x, y, z is -350~350,-350~350,-41~523.9 (the value range is undefined, if the range is exceeded, the inverse kinematics no solution prompt will be returned), and the value range of rx, ry, and rz is -180~180.

**Q: Are sample tutorials for the python API provided?**

- A: Yes, there is test code in the test folder of github, which can be executed with the terminal. https://github.com/elephantrobotics/pymycobot/tree/main/demo/myCobot_320_demo

**Q: Are the python apis the same for different versions of robotic arms?**

- A: The API is the same.







## 2 About ROS



**Q: How do a microcontroller-based myCobot and a microprocessor-based myCobot run ROS?**

- A: The use of ROS for a microcontroller-based myCobot is currently on Ubuntu, and you can also develop your own ROS. A microprocessor-based myCobot have its own ROS environment and can be used directly.


**Q: Can a microprocessor-based myCobot connect to a PC to use ROS and moveit?**

- A: The current open source data is not controlled by direct communication. It can be implemented by modifying the existing node files through ros + socket.

**Q: Can you provide files and programming examples of the rviz model?**

- A: It is available on our github.
https://github.com/elephantrobotics/mycobot_ros




**Q: Why is the error permission denied: '/dev/ttyUSB0' reported when using ROS to start the rviz model file?**

- A: It is because the serial port permission is not given. You should type sudo chmod 777 port name in the terminal.
  for example:
  ```
  sudo chmod 777 /dev/ttyUSB0
  ```


**Q: Why is the error _init_() takes exactly 2 arguments (3 given) reported when running the slider control and model follow commands of ROS?**

- A: The pymycobot library is not installed and started.

**Q: Q: When using ROS, why is the myCobot angle inconsistent with the model angle after opening the rviz model?**

- A: It is very likely that the zero position of the myCobot is not calibrated, and the zero position of the myCobot needs to be calibrated.




[← Previous Page](./0_how_to_ask.md) | [Next Page →](./2_software.md)