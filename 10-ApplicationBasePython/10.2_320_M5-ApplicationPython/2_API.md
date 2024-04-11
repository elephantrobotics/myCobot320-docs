# Introduction to API

API or Application Programming Interface refers to a number of preset programs. Before utilization, it is required to import API library:


## 1. System Status

**1.1** `get_system_version()`

- **Function:** get the version of firmware
- **Parameters:** None
- **Return value:** None


## 2. Overall Status


**2.1**  `power_on()`

- **Function:** atom open communication (default open)

- **Return Value:** None

**2.2**  `power_off()`

- **Function:** atom turn off communication

- **Return Value:** None

**2.3**  `is_power_on()`

- **Function:** judge whether robot arms is powered on or not

- **Return Value:**
  - 1: power on
  - 0: power off
  - -1: error

**2.4**  `release_all_servos()`

- **Function:** release all robot arms
- **Return Value:** None

**2.5**  `is_controller_connected()`

- **Function:** check if connected with Atom.

* **Return Value:**
  - 1: connected
  - 0: not connected
  - -1: error

**2.6**  `read_next_error()`

- **Fuction:** robot Error detection

- **Return Value:**
  - 0: No abnormality
  - 1: Communication disconnected
  - 2: Unstable communication
  - 3 : Servo abnormality

**2.7**  `set_fresh_mode(mode)`

- **Fuction:** set command refresh mode
- **Parameters:**
  - **mode** – int  
    1 - Always execute the latest command first.  
    0 - Execute instructions sequentially in the form of a queue.
- **Return Value:** None

**2.8**  `get_fresh_mode()`

- **Fuction**: get command refresh mode

- **Return Value:**
  - 1 - Always execute the latest command first.
  - 0 - Execute instructions sequentially in the form of a queue.

**2.9**  `set_free_mode(mode)`

- **Fuction:** set free mode
- **Parameters:**
  - **mode** – int  
    1 -   close free mode  
    0 -   open free mode
- **Return Value:** None

**2.10**  `is_free_mode()`

- **Fuction:** check whether it is in free movement mode

- **Return Value:**
  - 1 - close
  - 0 - open



## 3. MDI Mode and Operation

**3.1**  `get_angles()`

- **Function:** get the degree of all joints
- **Returns**: a float list of all degree

**3.2**  `send_angle(id, degree, speed)`

- **Function:** send one degree of joint to robot arm

- **Parameters:**

  - id: Joint id(`genre.Angle`) / int 1-6
  - degree: degree value(`float`)
  - speed: (`int`) 0 ~ 100

**3.3**  `send_angles(degrees, speed)`

- **Function:** send the degrees of all joints to robot arm
- **Parameters:**
  - degrees: a list of degree value(`List[float]`), length 6
  - speed: (`int`) 0 ~ 100

**3.4**  `get_coords()`

- **Function:** get the Coords from robot arm, coordinate system based on base.

- **Returns:** a float list of coord:`[x, y, z, rx, ry, rz]` or  `[x, y, z, rx]`

**3.5**  `send_coord(id, coord, speed)`

- **Function:** send one coord to robot arm

- **Parameters:**
  - id: coord id(`genre.Coord`) / int 1-6
  - coord: coord value(`float`)
  - speed: (`int`) 0 ~ 100

**3.6**  `send_coords(coords, speed, mode)`

- **Function:** send all coords to robot arm
- **Parameters:**
  - coords: a list of coords value(`List[float]`), length 6.
  - speed: (`int`) 0 ~ 100
  - mode: (`int`): `0` - angular, `1` - linear


**3.7**  `is_in_position(data, flag)`

- **Function:** judge whether in the position.  
- **Parameters:**  
  - data: A data list, angles or coords, length 6.
  - flag: Tag the data type, `0` - angles, `1` - coords.  
- **Return Value:**
  - 1 - true
  - 0 - false
  - -1 - error

**3.8**  `is_moving()	`

- **Function:** judge whether the robot is moving
- **Return Value:**
  - 1 moving
  - 0 not moving
  - -1 error

  
**3.9**  `pause()`

- **Function:** pause robot movement.
- **Returns**: None.

**3.10**  `is_paused()`

- **Function:** detect if the bot is paused
- **Returns:**
  - 1 - paused 
  - 0 - not paused 
  - -1 - error

**3.11**  `resume()`

- **Function:** resume the robot movement and complete the previous command
- **Returns**: a float list of all degree

**3.12**  `stop()`

- **Function:** stop all movements of robot
- **Returns**: None

**3.13** `get_joint_min_angle(joint_id)`

- **Function:** get minimum speed of a joint
- **Parameter:** range from 1-6
- **Return Value:** angle value

**3.14** `get_joint_max_angle(joint_id)`

- **Function:** get maximum speed of a joint
- **Parameter:** range from 1-6
- **Return Value:** angle value

**3.15** `set_joint_min(id,angle)`

- **Function:** Sets the minimum angle for the specified joint.

- **Parameters**:
  - `id`: (`int`) 1-6.
  - `angle`: 0 - 180.
- **Return Value:** None

**3.16** `set_joint_max(id,angle)`

- **Function:** Sets the maximum angle of the specified joint.
- **Parameter:**
  - `id`: (`int`) 1-6.
  - `angle`: 0 - 180
- **Return Value:** None


## 4. JOG Mode and Operation

**4.1** `jog_angle(joint_id, direction, speed)`

- **Function:** jog control angle

- **Parameters:**
  - `joint_id`: (`int`) 1 ~ 6
  - `direction`: `0` - decrease, `1` - increase
  - `speed`: 0 ~ 100

**4.2** `jog_coord(coord_id, direction, speed)`

- **Function:** jog control coord.

- **Parameters:**
  - `coord_id`: (`int`) 1 ~ 6
  - `direction`: `0` - decrease, `1` - increase
  - `speed`: 0 ~ 100


**4.3** `jog_increment(joint_id,increment,speed)`

- **Function:** step mode
- **Parameters**:
  - `coord_id`: (`int`) 1-6
  - `direction`:
  - `speed`: 0 ~ 100
- **Returns**: None


## 5. Motor Control

**5.1** `set_encoder(joint_id, encoder)`

- **Function:** set a single joint rotation to the specified potential value
- **Parameters:**
  - `joint_id`: (`int`) 1 ~ 6
  - `encoder`: 0 ~ 4096

**5.2** `get_encoder(joint_id)`

- **Function:** obtain the specified joint potential value
- **Parameters:** `joint_id`: (`int`) 1 ~ 6
- **Returns:**
  - `encoder`: 0 ~ 4096

**5.3** `set_encoders(encoders, speed)`

- **Function:** set the six joints of the manipulator to execute synchronously to the specified position

- **Parameters:**
  - `encoders`: a encoder list, length 6.
  - `speed`: 0 - 100

**5.4** `get_encoders()`

- **Function:** get the six joints of the manipulator

- **Returns**: a list of encoder (`list`)


## 6. Servo Control

**6.1** `is_servo_enable(servo id)`

- **Function:** judge whether a servo is enabled
- **Parameter:** range from 1-6
- **Return Value:**
  - `1`: enabled
  - `0`: not enabled
  - `-1`: error

**6.2** `is_all_servo_enable()`

- **Function:** judge whether all servos are enabled
- **Return Value:**
  - `1`: enabled
  - `0`: not enabled
  - `-1`: error

**6.3** `release_servo(servo_id)`

- **Function:** release a servo
- **Parameter:** range from 1-6
- **Return Value:**
  - `1`: enabled
  - `0`: not enabled
  - `-1`: error


**6.4** `set_servo_data(servo_no, data_id, value)`

- **Function:** set the data parameters of the specified address of the steering gear

- **Parameters**:
  - `servo_no`: Serial number of articulated steering gear, 1 - 6.
  - `data_id`: Data address.
  - `value`: 0 - 4096
- **Return Value:** None


**6.5** `get_servo_data(servo_no, data_id)`

- **Function:** read the data parameter of the specified address of the steering gear

- **Parameters**:

  - `servo_no`: Serial number of articulated steering gear, 1 - 6.
  - `data_id`: Data address.

- **Returns**: `value`: 0 - 4096
  - `0`: disable
  - `1`: enable
  - `-1`: error


**6.6** `set_servo_calibration(servo_no)`

- **Function:** the current position of the calibration joint actuator is the angle zero point, and the corresponding potential value is 2048.
- **Parameters**:
  - `servo_no`: Serial number of articulated steering gear, 1 - 6.
- **Return Value:** None

**6.7** `focus_servo(servo_id)`

- **Function:** power on designated servo
- **Parameters**: `servo_id`: 1 ~ 6
- **Return Value:** None

**6.8** `joint_brake(joint_id)`

- **Function:** make it stop when the joint is in motion, and the buffer distance is positively related to the existing speed
- **Parameters**: `joint_id`: 1~6
- **Return Value:** None

**6.9** `get_servo_speeds()`

- **Function:** Get joint velocity.
- **Return Value:** `list` Speed of each joint.

**6.10** `get_servo_currents()`

- **Function:** Get joint current.
- **Return Value:** `list` Current of each joint.

**6.11** `get_servo_voltages()`

- **Function:** Get joint voltage.
- **Return Value:** `list` Voltage of each joint.

**6.12** `get_servo_temps()`

- **Function:** Get the temperature of each joint.
- **Return Value:** `list` the temperature of each joint.

**6.13** `get_servo_status()`

- **Function:** power on designated servo
- **Return Value:** `list` the state of each joint.


**6.14** `get_servo_last_pdi(id)`

- **Function:** Obtain the pdi of a single steering gear before modification
- **Return Value:** the pdi of the joint.

## 7. Atom IO 


**7.1** `set_pin_mode(pin_no, pin_mode)`

- **Function:** set the state mode of the specified pin in atom
- **Parameters:**
- `pin_no` (int): Pin number.
- `pin_mode` (int): 0 - input, 1 - output, 2 - input_pullup

* **Return Value:** None

**7.2** `set_digital_output(pin_no, pin_signal)`

- **Function:** set digital state of a pin
- **Parameters**
  - `pin_no` (int):
  - `pin_signal` (int): 0 / 1

* **Return Value:** None

**7.3** `get_digital_input(self, pin_no)`

- **Function:** get digital state of a pin
- **Parameters**: `pin_no` (int)
- **Return Value**: signal value

**7.4** `set_pwm_output(channel, frequency, pin_val)`

- **Function:** PWM control.
- **Parameters**:
  - `channel` (`int`): IO number.
  - `frequency` (`int`): clock frequency
  - `pin_val` (`int`): Duty cycle 0 ~ 256; 128 means 50%
- **Return Value**: None


## 8. Gripper Control
**8.1** `set_eletric_gripper(mode)`

- **Function:** set the gripper to open and close
- **Parameters:**
  - `1`: close
  - `0`: open
- **Return Value:** None

**8.2** `init_eletric_gripper()`

- **Function:** initialize the electric gripper  
- **Return Value:** None

**8.3** `set_gripper_mode(mode)`

- **Function:** set the mode of gripper
- **Parameters:** 
  - `1`: port mode
  - `0`: transparent transmission
- **Return Value:** None

**8.4** `get_gripper_mode(mode)`

- **Function:** set the mode of gripper
- **Return Value:** 
  - `1`: port mode
  - `0`: transparent transmission


**8.5** `is_gripper_moving()`

- **Function:** judge whether the gripper is moving or not

- **Return Value:**
  - `0` : not moving
  - `1` : is moving
  - `-1`: error data

**8.6** `set_gripper_value(value, speed, gripper_type=None)`

- **Function:** Let the gripper rotate to the specified position at the specified speed
- **Parameter Description:**
  - `value`: Indicates the position that the clamping jaw wants to reach, the value range is 0~256
  - `speed`: indicates the speed at which to rotate, the value range is 0~100
  - `gripper_type`: Gripper type, the default is adaptive gripper
    - `1`: Adaptive gripper
    - `3`: Parallel jaws
    - `4`: Flexible gripper
- **Return value:** None

**8.7** `get_gripper_value(gripper_type=None)`

- **Function:** Get the current position data information of the gripper
- **Parameter Description:**
  - `gripper_type`: Gripper type, the default is adaptive gripper
    - `1`: Adaptive gripper
    - `3`: Parallel jaws
    - `4`: Flexible gripper
- **Return value:** Gripper data information

**8.8** `set_gripper_calibration()`

- **Function:** Set the initial position of the gripper and set the current position to 2048
- **Return value:** None

**8.9** `set_gripper_state(flag, speed, _type=None)`

- **Function:** Let the gripper enter the specified state at the specified speed
- **Parameter Description:**
  - `flag`: 1 means the clamping jaw is closed, 0 means the clamping jaw is open.
  - `speed`: Indicates how fast to reach the specified state, the value range is 0~100
  - `_type`: Gripper type, the default is adaptive gripper
    - `1`: Adaptive gripper
    - `2`: Five-fingered dexterity
    - `3`: Parallel jaws
    - `4`: Flexible gripper
- **Return value:** None

## 9. Atom RGB Control
**9.1** `set_color(r, g, b)`

- **Function:** set the color of RGB light panel
- **Parameters:**
  - `R`: 0-255
  - `G`: 0-255
  - `B`: 0-255
- **Return Value:** None


## 10. Coordinate Setting

**10.1** `set_tool_reference(coords)`

- **Function**: Set tool coordinate system.

- **Parameters**:

  - `coords`: (`list`) [x, y, z, rx, ry, rz].

- **Return**:None

**10.2** `set_world_reference(coords)`

- **Function**: Set world coordinate system.

- **Parameters**:
  - `coords`: (`list`) [x, y, z, rx, ry, rz].
- **Return**:None

**10.3** `get_world_reference()`

- **Function**: Get world coordinate system.

- **Return**: `list` [x, y, z, rx, ry, rz].

**10.4** `set_reference_frame(rftype)`

- **Function**: Set base coordinate system.

- **Parameters**:

  - `rftype`: 0 - base 1 - tool.

- **Return**:None

**10.5** `get_reference_frame()`

- **Function**: Get base coordinate system.

- **Return**: 0 - base 1 - tool.

**10.6** `set_movement_type(move_type)`

- **Function**: Set movement type.

- **Parameters**:

  - `move_type`: 1 - movel, 0 - moveJ.

- **Return**:None

**10.7** `get_movement_type()`

- **Function**: Get movement type.

- **Return**: 1 - movel, 0 - moveJ.

**10.8** `set_end_type(end)`

- **Function**: Set end coordinate system.
- **Parameters**:
  - `end`: 0 - flange, 1 - tool.
- **Return**:None

**10.9** `get_end_type()`

- **Function**: Get end coordinate system.

- **Return**: 0 - flange, 1 - tool.

**10.10** `get_tool_reference()`

- **Function**: get tool coordinate system

- **Return**:

  - `coords`: (`list`) [x, y, z, rx, ry, rz]

## 11. Basic IO Control
**11.1** `get_basic_input(pin_no)`

- **Function:** get bottom pin
- **Parameters:**
- `pin_no` (`int`) Pin number.
- **Return Value:**
  - `0 `: in working state
  - `1`: not in working state

**11.2** `set_basic_output(pin_no, pin_signal)`

- **Function:** set bottom pin

- **Parameters:**
  - `pin_no` (`int`) Pin number
  - `pin_signal` (`int`): 0 / 1

## 12. TCP/IP
**12.1** `get_ssid_pwd(pin_no)`

- **Function:** get connected wifi account and password.(Apply to m5)  
- **Return Value:**  (account, password)

**12.2** `set_ssid_pwd(account, password)`

- **Function:** change connected wifi.(Apply to m5)

- **Parameters:**
  - `account (str)`: new wifi account. 
  - `password (str)`: new wifi password.

---

[← Previous Page](1_download.md) | [Next Page →](3_TCPIP.md)