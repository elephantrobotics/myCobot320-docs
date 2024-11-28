# myCobot Pro force-controlled gripper

## 1 Product image
<img src="./img/image.png" width="50%" >

## 2 Specifications

| **Name** | **myCobot Pro force-controlled gripper** |
| :----------- | :-------------------------------------- |
| Material | PC, PBT |
| Dimensions | 156X106X61mm |
| Process technology | Injection molding |
| Gripping range | 0-100 mm (default fingertip) |
| Repeatability | 0.5 mm |
| Service life | 300,000 openings and closings |
| Drive mode | Electric drive |
| Transmission mode | Gear + connecting rod |
| Dimensions | 158x105x55mm |
| Weight | 340 g |
| Rated load | 500g |
| Operating voltage | 24V |
| Fixing method | Screw fixing |
| Environmental requirements | Normal temperature and pressure |
| Control interface | RS485/IO control/button control |
| Applicable equipment | ER myCobot 320 series, ER Mercury series, ER myCobot Pro 600, ERmyCobot Pro 630, other general robots |

## 3 Working principle
Driven by the motor, the finger surface of the manipulator makes linear reciprocating motion to achieve opening or closing. By setting the clamping torque, the impact of the workpiece is minimized, the positioning point is controllable, and the clamping is controllable.

## 4 Usage scenario
Experimental operation: In scientific research experiments, complete the grasping and moving of test tubes, utensils, etc. to ensure the safety and accuracy of the experiment.
Educational demonstration: As a teaching tool, it helps students understand the principle of robot grasping and cultivate practical ability.
Material handling: In simulated production lines or warehouses, materials of various specifications are handled to improve work efficiency.

## 5 Installation method

Use screws and washers to install the gripper connector to the end flange of the robot arm

<img src="./img/1.png" width="50%" >

Then use screws to install the gripper on the connector

<img src="./img/2.png" width="50%" >

<img src="./img/3.png" width="50%" >

Finally, use M8 aviation line to connect the gripper and the robot arm

<img src="./img/4.jpg" width="50%" >

## 6 Python control method

The robot arm needs to burn the pico firmware that supports the force-controlled gripper, and install the pymycobot driver library that supports the force-controlled gripper, but since both are still in internal testing and have not been officially released, if necessary, please contact after-sales staff to obtain

### 6.1 Python control API description

**Note**: The time interval between calling each instruction of the gripper must be greater than 1.5 seconds.

#### `set_pro_gripper(gripper_id, address, value)`

- **Function**: Set the parameters of the Pro force-controlled gripper. You can set a variety of parameter functions. For details, please see the following table.
- **Parameter**:
- `gripper_id` (`int`): Gripper ID, default 14, value range 1 ~ 254.
- `address` (`int`): The command number of the gripper.
- `value`: The parameter value corresponding to the command number.

<table>
<tr>
<th>Function</th>
<th>gripper_id</th>
<th>address</th>
<th>value</th>
</tr>
<tr>
<td>Set gripper ID</td>
<td style="text-align: center;">14</td>
<td style="text-align: center;">3</td>
<td>1 ~ 254</td>
</tr>
<tr>
<td>Set gripper enable status</td>
<td style="text-align: center;">14</td>
<td style="text-align: center;">10</td>
<td>0 or 1, 0 - off enable; 1 - on enable</td>
</tr>
<tr>
<td>Set gripper clockwise runnable error</td>
<td style="text-align: center;">14</td>
<td style="text-align: center;">21</td>
<td>0 ~ 16</td>
</tr>
<tr>
<td>Set the anti-clockwise running error of the gripper</td>
<td style="text-align: center;">14</td>
<td style="text-align: center;">23</td>
<td>0 ~ 16</td>
</tr>
<tr>
<td>Set the minimum starting force of the gripper</td>
<td style="text-align: center;">14</td>
<td style="text-align: center;">25</td>
<td>0 ~ 254</td>
</tr>
<tr>
<td>IO output setting</td>
<td style="text-align: center;">14</td>
<td style="text-align: center;">29</td>
<td>0, 1, 16, 17</td>
</tr>
<tr>
<td>Set IO opening angle</td>
<td style="text-align: center;">14</td>
<td style="text-align: center;">30</td>
<td>0 ~ 100</td>
</tr>
<tr>
<td>Set IO closing angle</td>
<td style="text-align: center;">14</td>
<td style="text-align: center;">31</td>
<td>0 ~ 100</td>
</tr>
<tr>
<td>Set servo virtual position value</td>
<td style="text-align: center;">14</td>
<td style="text-align: center;">41</td>
<td>0 ~ 100</td>
</tr>
<tr>
<td>Set the clamping current</td>
<td style="text-align: center;">14</td>
<td style="text-align: center;">43</td>
<td>1 ~ 254</td>
</tr>
</table>

- **Return value**:
- Please check the following table:

<table>
<tr>
<th>Function</th>
<th>Return value</th>
</tr>
<tr>
<td>Set the gripper ID</td>
<td>0 - Failure; 1 - Success</td>
</tr>
<tr>
<td>Set the gripper enable status</td>
<td>0 - Failure; 1 - Success</td>
</tr>
<tr>
<td>Set the clockwise runnable error of the gripper</td>
<td>0 - Failure; 1 - Success</td>
</tr>
<tr>
<td>Set the counterclockwise runnable error of the gripper</td>
<td>0 - Failure; 1 - Success</td>
</tr>
<tr>
<td>Set the minimum starting force of the gripper</td>
<td>0 - Failure; 1 - Success</td>
</tr>
<tr>
<td>IO output setting</td>
<td>0 - Failure; 1 - Success</td>
</tr>
<tr>
<td>Set IO opening angle</td>
<td>0 - Failure; 1 - Success</td>
</tr>
<tr>
<td>Set IO closing angle</td>
<td>0 - Failure; 1 - Success</td>
</tr>
<tr>
<td>Set the servo virtual position value</td>
<td>0 - Failure; 1 - Success</td>
</tr>
<tr>
<td>Set the clamping current</td>
<td>0 - Failure; 1 - Success</td>
</tr>
</table>


#### `get_pro_gripper(gripper_id, address)`

- **Function**: Get the parameters of the Pro force-controlled gripper, which can get a variety of parameter functions. Please refer to the following table for details.
- **Parameter**:
- `gripper_id` (`int`): Gripper ID, default 14, value range 1 ~ 254.
- `address` (`int`): The command number of the gripper.

<table>
<tr>
<th>Function</th>
<th>gripper_id</th>
<th>address</th>
</tr>
<tr>
<td>Read firmware major version number</td>
<td style="text-align: center;">14</td>
<td style="text-align: center;">1</td>
</tr>
<tr>
<td>Read firmware minor version number</td>
<td style="text-align: center;">14</td>
<td style="text-align: center;">2</td>
</tr>
<tr>
<td>Read gripper ID</td>
<td style="text-align: center;">14</td>
<td style="text-align: center;">3</td>
</tr>
<tr>
<td>Read gripper clockwise runnable error</td>
<td style="text-align: center;">14</td>
<td style="text-align: center;">22</td>
</tr>
<tr>
<td>Read the anti-clockwise running error of the gripper</td>
<td style="text-align: center;">14</td>
<td style="text-align: center;">24</td>
</tr>
<tr>
<td>Read the minimum starting force of the gripper</td>
<td style="text-align: center;">14</td>
<td style="text-align: center;">26</td>
</tr>
<tr>
<td>Read the IO opening angle</td>
<td style="text-align: center;">14</td>
<td style="text-align: center;">34</td>
</tr>
<tr>
<td>Read the IO closing angle</td>
<td style="text-align: center;">14</td>
<td style="text-align: center;">35</td>
</tr>
<tr>
<td>Get the amount of data in the current queue</td>
<td style="text-align: center;">14</td>
<td style="text-align: center;">40</td>
</tr>
<tr>
<td>Read the servo virtual position value</td>
<td style="text-align: center;">14</td>
<td style="text-align: center;">42</td>
</tr>
<tr>
<td>Read the clamping current</td>
<td style="text-align: center;">14</td>
<td style="text-align: center;">44</td>
</tr>
</table>

- **Return value**:
- Check the following table (if the return value is -1, it means that no data can be read):

<table>
<tr>
<th>Function</th>
<th>Return value</th>
</tr>
<tr>
<td>Read the firmware major version number</td>
<td>Major version number</td>
</tr>
<tr>
<td>Read the firmware minor version number</td>
<td>Minor version number</td>
</tr>
<tr>
<td>Read the gripper ID</td>
<td>1 ~ 254</td>
</tr>
<tr>
<td>Read the gripper clockwise runnable error</td>
<td>0 ~ 254</td>
</tr>
<tr>
<td>Read the gripper counterclockwise runnable error</td>
<td>0 ~ 254</td>
</tr>
<tr>
<td>Read the minimum starting force of the gripper</td>
<td>0 ~ 254</td>
</tr>
<tr>
<td>Read the IO opening angle</td>
<td>0 ~ 100</td>
</tr>
<tr>
<td>Read the IO closing angle</td>
<td>0 ~ 100</td>
</tr>
<tr>
<td>Get the amount of data in the current queue</td>
<td>Return the amount of data in the current absolute control queue</td>
</tr>
<tr>
<td>Read the servo virtual position value</td>
<td>0 ~ 100</td>
</tr>
<tr>
<td>Read the clamping current</td>
<td>1 ~ 254</td>
</tr>
</table>

#### `set_pro_gripper_angle(gripper_id, gripper_angle)`

- **Function**: Set the force-controlled gripper angle.
- **Parameter**:
- `gripper_id` (`int`): Gripper ID, default 14, value range 1 ~ 254.
- `gripper_angle` (`int`): Gripper angle, value range 0 ~ 100.
- **Return value**:
- 0 - Failed
- 1 - Success

#### `get_pro_gripper_angle(gripper_id)`

- **Function**: Read the angle of the force-controlled gripper.

- **Parameter**:

- `gripper_id` (`int`): Gripper ID, default 14, value range 1 ~ 254.

- **Return value**: `int` 0 ~ 100

#### `set_pro_gripper_open(gripper_id)`

- **Function**: Open the force-controlled gripper.

- **Parameter**:

- `gripper_id` (`int`): Gripper ID, default 14, value range 1 ~ 254.

- **Return value**:

- 0 - Failed

- 1 - Successful

#### `set_pro_gripper_close(gripper_id)`

- **Function**: Close the force-controlled gripper.
- **Parameter**:
- `gripper_id` (`int`): Gripper ID, default 14, value range 1 ~ 254.
- **Return value**:
- 0 - Failure
- 1 - Success

#### `set_pro_gripper_calibration(gripper_id)`

- **Function**: Set the zero position of the force-controlled gripper. (The zero position needs to be set first for the first use)
- **Parameter**:
- `gripper_id` (`int`): Gripper ID, default 14, value range 1 ~ 254.
- **Return value**:
- 0 - Failure
- 1 - Success

#### `get_pro_gripper_status(gripper_id)`

- **Function**: Read the gripping status of the force-controlled gripper.
- **Parameters**:
- `gripper_id` (`int`): Gripper ID, default 14, value range 1 ~ 254.
- **Return value:**
- `0` - Moving.
- `1` - Stopped moving, no object was detected.
- `2` - Stopped moving, object was detected.
- `3` - After the object was detected, it fell.

#### `set_pro_gripper_torque(gripper_id, torque_value)`

- **Function**: Set the force-controlled gripper torque.
- **Parameters**:
- `gripper_id` (`int`): Gripper ID, default 14, value range 1 ~ 254.
- `torque_value` (`int`): Torque value, value range 1 ~ 100.
- **Return value**:
- 0 - Failed
- 1 - Success

#### `get_pro_gripper_torque(gripper_id)`

- **Function**: Read the torque of the force-controlled gripper.
- **Parameter**:
- `gripper_id` (`int`): Gripper ID, default 14, value range 1 ~ 254.
- **Return value:** (`int`) 100 ~ 300

#### `set_pro_gripper_speed(gripper_id, speed)`

- **Function**: Set the speed of the force-controlled gripper.
- **Parameter**:
- `gripper_id` (`int`): Gripper ID, default 14, value range 1 ~ 254.
- `speed` (int): Gripper movement speed, value range 1 ~ 100.
- **Return value**:
- 0 - Failed
- 1 - Success

#### `get_pro_gripper_default_speed(gripper_id, speed)`

- **Function**: Read the default speed of the force-controlled gripper.
- **Parameter**:
- `gripper_id` (`int`): Gripper ID, default 14, value range 1 ~ 254.
- **Return value**: Gripper default movement speed, range 1 ~ 100.

#### `set_pro_gripper_abs_angle(gripper_id, gripper_angle)`

- **Function**: Set the absolute angle of the force-controlled gripper.
- **Parameter**:
- `gripper_id` (`int`): Gripper ID, default 14, value range 1 ~ 254.
- `gripper_angle` (`int`): Gripper angle, value range 0 ~ 100.
- **Return value**:
- 0 - Failure
- 1 - Success

#### `set_pro_gripper_pause(gripper_id)`

- **Function**: Pause motion.
- **Parameter**:
- `gripper_id` (`int`) Gripper ID, default 14, value range 1 ~ 254.
- **Return value**:
- 0 - Failure
- 1 - Success

#### `set_pro_gripper_resume(gripper_id)`

- **Function**: Resume motion.
- **Parameter**:
- `gripper_id` (`int`) Gripper ID, default 14, value range 1 ~ 254.
- **Return value**:
- 0 - Failure
- 1 - Success

#### `set_pro_gripper_stop(gripper_id)`

- **Function**: Stop motion.
- **Parameters**:
- `gripper_id` (`int`) Gripper ID, default 14, value range 1 ~ 254.
- **Return value**:
- 0 - Failure
- 1 - Success

### 6.2 Python zero calibration operation instructions
After connecting the gripper to the end of the robot arm, run the following code, the gripper will first open to the maximum, then completely close, and complete the calibration.
```Python
from pymycobot import MyCobot320
mc=MyCobot320("COM1")#Fill in the serial port number of the robot
mc.set_pro_gripper_calibration(14)#The default ID of the gripper is 14
```

### 6.3 Python control scenario example
#### demo1: Torque value adaptation
The user can observe the deformation degree of the force-controlled gripper after clamping the object under the premise of setting the corresponding torque value
Select a torque value with the smallest deformation but can clamp the object normally. This torque value is the most suitable torque value for the current object

```Python
from pymycobot import MyCobot320
import time
mc=MyCobot320("COM1")#Fill in the serial port number of the robot
mc.set_pro_gripper_torque(14,10)#Set the torque value
print(mc.get_pro_gripper_torque(14))#View the set torque value
mc.set_pro_gripper_open(14)#Gripper fully open
time.sleep(3)
mc.set_pro_gripper_close(14)#Gripper fully closed
```

#### demo2: Grab and move objects from point A to B
```Python
from pymycobot import MyCobot320
import time
mc=MyCobot320("COM1")#Fill in the serial port number of the robot
mc.set_pro_gripper_torque(14,10)#Set the torque value of the gripper
print(mc.get_pro_gripper_torque(14))#Print the set gripper torque value
mc.set_pro_gripper_open(14)#First open the gripper completely
start_angles=[19.68, -1.23, -91.4, -0.52, 90.08, 60.29]
target_coords=[[231.3, -61.3, 232.7, 178.35, -2.7, -130.56],[231.3, 65.3, 232.7, 178.35, -2.7, -130.56]]
end_angles=[80,0,-85,0,90,60] 
for i in range(len(target_coords)): 
  mc.sync_send_angles(start_angles,50) 
  mc.send_coords(target_coords[i],100,1) 
  time.sleep(2) 
  mc.send_coord(3,165,50) 
  time.sleep(2) 
  mc.set_pro_gripper_close(14) 
  time.sleep(2) 
  mc.send_coords(target_coords[i],100,1) 
  mc.sync_send_angles(end_angles,100) 
  mc.set_pro_gripper_open(14) 
  time.sleep(2) 
 ``` 
 
 <img src="./img/demo.gif" width="50%" >