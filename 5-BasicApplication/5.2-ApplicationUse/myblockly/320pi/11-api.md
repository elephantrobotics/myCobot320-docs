# myblockly 构建模块详解

## 系统信息

### 获取 Basic 固件版本

![Alt text](./img/blocks/system/1.png)

- **原型**: `get_basic_version()`
- **接口描述**：获取 Basic 固件版本。
- **返回**：返回 Basic 固件版本。

### 获取主控版本信息

![Alt text](./img/blocks/system/2.png)

- **原型**: `get_system_version()`

- **接口描述**：获取主控版本信息。

- **返回**：返回 Basic 固件版本。

### 获取机器人 id

![Alt text](./img/blocks/system/3.png)

- **原型**: `get_robot_id()`

- **接口描述**：获取机器人 id。

- **返回**：返回机器人 id。

### 获取机器人 id

![Alt text](./img/blocks/system/4.png)

- **原型**: `set_robot_id(id)`
- **接口描述**：设置机器人 id。
- **参数**：
  - 机器人 id

## WLAN

### 设置 WLAN 账号密码

![Alt text](./img/blocks/wlan/1.png)

- **原型**: `set_ssid_pwd(account,password)`
- **接口描述**：设置 WLAN 账号密码。
- **参数**：
  - wlan 账号
  - wlan 密码

### 获取 WLAN 账号密码

![Alt text](./img/blocks/wlan/2.png)

- **原型**: `get_ssid_pwd()`
- **接口描述**：获取 WLAN 账号密码。
- **返回**：
  - wlan 账号
  - wlan 密码

### 设置 WLAN 连接的端口

![Alt text](./img/blocks/wlan/3.png)

- **原型**: `set_server_port(port)`
- **接口描述**：设置 WLAN 连接的端口。
- **返回**：
  - 端口号

## 底座

### 设置底座引脚输出

![Alt text](./img/blocks/basic/1.png)

- **原型**: `set_basic_output(id,state)`
- **接口描述**：设置底座引脚输出
- **参数**：
  - 引脚号
  - 选择输出状态

### 获取底座引脚输入

![Alt text](./img/blocks/basic/2.png)

- **原型**: `set_basic_output(id)`
- **接口描述**：获取底座引脚输入
- **返回**：
  - 底座引脚输入状态

## 原子

### 设置颜色

![Alt text](./img/blocks/atom/1.png)

- **原型**: `set_color(r=0,g=0,b=0)`
- **接口描述**：设置末端 LED 灯的颜色。
- **参数**

  - 红

  - 绿

  - 蓝

### 设置 PWM 输出

![Alt text](./img/blocks/atom/2.png)

- **原型**: `set_pwm_output(v1=0,v2=0,v3=0)`
- **接口描述**：设置 PWM 输出。
- **参数**

  - **v1** (_int_)

  - **v2** (_int_)

  - **v3** (_int_)

### 设置末端引脚模式

![Alt text](./img/blocks/atom/3.png)

- **原型**: `set_pin_mode(id,state)`
- **接口描述**：设置末端引脚模式。
- **参数**
  - 引脚号

* 选择模式

### 设置 IO 值

![Alt text](./img/blocks/atom/4.png)

- **原型**: `set_digital_output(id,state)`
- **接口描述**：设置 IO 值
- **参数**

  - io 序号

  - 选择状态 0 或 1

### 读取 IO 值

![Alt text](./img/blocks/atom/5.png)

- **原型**: `get_digital_input(id)`
- **接口描述**：读取 IO 值
- **参数**
  - io 序号

## 状态

### 上电

![Alt text](./img/blocks/status/1.png)

- **原型**: `power_on()`
- **接口描述**:Atom 开放通信（默认开放）。

### 断电

![Alt text](./img/blocks/status/2.png)

- **原型**: `power_off()`

- **接口描述**: Atom 关闭通信。

### 检查机械臂是否通电

![Alt text](./img/blocks/status/3.png)

- **原型**: `is_power_on()`

- **接口描述**: 检查机械臂是否通电。

- **返回**:

  - `1`: power on
  - `0`: power off
  - `-1`: error

### 释放所有关节

![Alt text](./img/blocks/status/4.png)

- **原型**: `release_all_servos()`
- **接口描述**: 将机器人手臂设置为自由移动模式。

### 设置指令刷新模式

![Alt text](./img/blocks/status/5.png)

- **原型**: `set_fresh_mode(mode)`
- **接口描述**: 设置指令刷新模式

* **参数**

  - **mode**:
    `Refresh Sport` - 始终首先执行最新的命令.
    `Interpolation` - 以队列的形式顺序执行指令.

### 获取指令刷新模式

![Alt text](./img/blocks/status/6.png)

- **原型**: `get_fresh_mode()`
- **接口描述**: 获取指令刷新模式

  - **返回**
    - 1 - 始终首先执行最新的命令。
    - 0 - 以队列的形式顺序执行指令。

### 获取机器人错误信息。

![Alt text](./img/blocks/status/7.png)

- **原型**: `get_error_information()`

- **接口描述**: 获取机器人错误信息。

- **返回**:

  - `0`: 没有错误.
  - `1 ~ 6`: 对应关节超出极限位置.
  - `32`: 运动学逆解无解.
  - `33 ~ 34`: 直线运动没有邻接解.

### 清除机器人错误消息

![Alt text](./img/blocks/status/8.png)

- **原型**: `clear_error_information()`
- **接口描述**: 清除机器人错误消息。

### 检查 Atom 是否已连接

![Alt text](./img/blocks/status/9.png)

- **原型**: `is_controller_connected()`
- **接口描述**: 检查 Atom 是否已连接
- **返回**：
  - 0：未连接
  - 1：已连接

### 设置自由模式

![Alt text](./img/blocks/status/10.png)

- **原型**: `set_free_mode(state)`
- **接口描述**: 是否设置成自由模式
- **参数**：
  - **state**(int)：0 | 1

### 检查是否是自由模式

![Alt text](./img/blocks/status/11.png)

- **原型**: `is_free_mode()`
- **接口描述**: 检查是否是自由模式
- **返回值**：
  - **state**(int)：0 | 1

## 角度和坐标

### 获取所有角度

![Alt text](./img/blocks/mid/1.png)

- **原型**: `get_angles()`
- **接口描述**: 获取所有关节的度数。
- **返回**：
  - 机器所有关节角度值

### 获取所有坐标

![Alt text](./img/blocks/mid/2.png)

- **原型**: `get_coords()`
- **接口描述**: 获取机器笛卡尔坐标。
- **返回**：
  - 笛卡尔坐标值

### 设置单关节角度

![Alt text](./img/blocks/mid/3.png)

- **原型**: `send_angle(id, degree, speed)`

- **接口描述**: 机器人单关节角度控制。

- **参数**

  - 关节 id：1-6
  - 角度值
  - 速度

### 设置单坐标

![Alt text](./img/blocks/mid/4.png)

- **原型**: `send_coord(id, value, speed)`

- **接口描述**: 机器人单坐标控制。

- **参数**
  - 坐标：1-6 对应 x y z rx ry rz
  - 坐标值
  - 速度

### 检测是否在运动

![Alt text](./img/blocks/mid/5.png)

- **原型**: `is_moving(id, value, speed)`
- **接口描述**: 检测机器是否在运动。
- **返回**：
  - 0 ：机器不处于运动状态
  - 1：机器在运动。

### 角度是否到达位置

![Alt text](./img/blocks/mid/6.png)

- **原型**: `is_in_position([j1,j2,j3,j4,j5,j6],0)`

- **接口描述**: 检查机器角度是否到达指定的位置

- **参数**：

  - j1 角度值

  - j2 角度值

  - j3 角度值

  - j4 角度值

  - j5 角度值

  - j6 角度值

- **返回**：
  - 0 ：未到达指定位置
  - 1：到达指定位置

### 角度是否到达位置

![Alt text](./img/blocks/mid/7.png)

- **原型**: `is_in_position([x,y,z,rx,ry,rz],1)`

- **接口描述**: 检查机器角度是否到达指定的位置

- **参数**：

  - x 坐标值

  - y 坐标值

  - z 坐标值

  - rx 坐标值

  - ry 坐标值

  - rz 坐标值

- **返回**：
  - 0 ：未到达指定位置
  - 1：到达指定位置

### 设置全坐标

![Alt text](./img/blocks/mid/8.png)

- **原型**: `send_angles(angles, speed)`

- **接口描述**: 将所有角度发送到机器人手臂.

- **参数**
  - `angles`: 坐标值列表(`List[float]`).
  - `speed`: (`int`) 0 ~ 100

### 设置全角度

![Alt text](./img/blocks/mid/9.png)

- **原型**: `send_coords(coords, speed, mode)`

- **接口描述**: 将所有坐标发送到机器人手臂.

- **参数**

  - `coords`: 坐标值列表(`List[float]`).
  - `speed`: (`int`) 0 ~ 100
  - `mode`: (`int`): `0` - angular（默认）, `1` - linear

## 点动控制

### 点动控制关节

![Alt text](./img/blocks/jog/1.png)

- **原型**: `jog_angle(joint_id, direction, speed)`

- **接口描述**: 点动控制角度

- **Parameters**

  - `joint_id`: (`int`) 1 ~ 6
  - `direction`: `0` - decrease, `1` - increase
  - `speed`: 0 ~ 100

### 点动控制坐标

![Alt text](./img/blocks/jog/2.png)

- **原型**: `jog_coord(coord_id, direction, speed)`

- **接口描述**: Jog control coord.

- **Parameters**

  - `coord_id`: (`int`) 1 ~ 6
  - `direction`: `0` - decrease, `1` - increase
  - `speed`: 0 ~ 100

### 关节绝对控制

![Alt text](./img/blocks/jog/4.png)

- **原型**: `jog_absolue(coord_id, direction, speed)`

- **接口描述**: 步进模式。

- **Parameters**

  - `coord_id`: (`int`) 1 ~ 6
  - `direction`:
  - `speed`: 0 ~ 100

### 步进模式

![Alt text](./img/blocks/jog/5.png)

- **原型**: `jog_increment(coord_id, direction, speed)`

- **接口描述**: 步进模式。

- **Parameters**

  - `coord_id`: (`int`) 1 ~ 6
  - `direction`:
  - `speed`: 0 ~ 100

### 停止点动运动

![Alt text](./img/blocks/jog/3.png)

- **原型**: `jog_stop()`

- **接口描述**: 停止点动

### 暂停

![Alt text](./img/blocks/jog/8.png)

- **原型**: `pause()`

- **接口描述**: 暂停运动。

### 恢复

![Alt text](./img/blocks/jog/9.png)

- **原型**: `resume()`

- **接口描述**: 恢复运动。

### 停止

![Alt text](./img/blocks/jog/10.png)

- **原型**: `stop()`

- **接口描述**: 停止移动。

### is_paused

![Alt text](./img/blocks/jog/11.png)

- **原型**: `is_paused()`

- **接口描述**: 判断操纵者是否暂停。

- **返回**: :

  - `1` - paused
  - `0` - not paused
  - `-1` - error

### 设置伺服电机编码值

![Alt text](./img/blocks/jog/6.png)

- **原型**: `set_encoder(joint_id, encoder)`

- **接口描述**: 将单个关节旋转设置为指定的电位值。

- **Parameters**

  - `joint_id`: (`int`) 1 ~ 6
  - `encoder`: 0 ~ 4096

### 获取伺服电机编码值

![Alt text](./img/blocks/jog/7.png)

- **原型**: `get_encoder(joint_id)`

- **接口描述**: 获取指定的关节电位值。

- **Parameters**: `joint_id`: (`int`) 1 ~ 6

- **返回**: `encoder`: 0 ~ 4096

## 设置

### get_speed

![Alt text](./img/blocks/setting/1.png)

- **原型**: `get_speed()`

- **接口描述**: 获取速度

- **返回**: speed: (`int`)

### set_speed

![Alt text](./img/blocks/setting/2.png)

- **原型**: `set_speed(speed)`

- **接口描述**: 设定速度。

- **Parameters**: speed: (`int`) 0 ~ 100

### set_joint_min

![Alt text](./img/blocks/setting/5.png)

- **原型**: `set_joint_min(id, angle)`
- **接口描述**: 设置指定关节的最小角度。

- **Parameters**:
  - `id`: (`int`) joint id 1-6.
  - `angle`: 0 - 180.

### set_joint_max

![Alt text](./img/blocks/setting/6.png)

- **原型**: `set_joint_max(id, angle)`
- **接口描述**: 设置指定关节的最大角度。

- **Parameters**:
  - `id`: (`int`) joint id 1-6.
  - `angle`: 0 - 180.

### get_joint_min_angle

![Alt text](./img/blocks/setting/3.png)

- **原型**: `get_joint_min_angle()`
- **接口描述**: 获取指定关节的最小移动角度

- **Parameters**: `joint_id`: (`int`)

- **返回**: angle value (`float`)

### get_joint_max_angle

![Alt text](./img/blocks/setting/4.png)

- **原型**: `get_joint_max_angle()`
- **接口描述**: 获取指定关节的最大移动角度
- **Parameters**: `joint_id`: (`int`)
- **返回**: angle value (`float`)

## Servo control

### is_servo_enable

![Alt text](./img/blocks/servos/1.png)

- **原型**: `is_servo_enable(servo_id)`

- **接口描述**: 确定所有舵机是否都已连接

- **Parameters**: `servo_id` (`int`) 1 ~ 6

- **返回**:

  - `0`: disable
  - `1`: enable
  - `-1`: error

### is_all_servo_enable

![Alt text](./img/blocks/servos/2.png)

- **原型**: `is_all_servo_enable()`

- **接口描述**: 确定是否连接了指定的舵机

- **返回**:

  - `0`: disable
  - `1`: enable
  - `-1`: error

### set_servo_data

![Alt text](./img/blocks/servos/3.png)

- **原型**: `set_servo_data(servo_no, data_id, value)`
- **接口描述**: 设置舵机指定地址的数据参数。

- **Parameters**:
  - `servo_no`: 铰接舵机的序列号，1 - 6。
  - `data_id`: 数据地址
  - `value`: 0 - 4096

### get_servo_data

![Alt text](./img/blocks/servos/4.png)

- **原型**: `get_servo_data(servo_no, data_id)`
- **接口描述**: 读取舵机指定地址的数据参数。

- **Parameters**:

  - `servo_no`: 铰接舵机的序列号，1 - 6。
  - `data_id`: 数据地址

- **返回**: `value`: 0 - 4096

  - `0`: disable
  - `1`: enable
  - `-1`: error

### set_servo_calibration

![Alt text](./img/blocks/servos/5.png)

- **原型**: `set_servo_calibration(servo_no)`
- **接口描述**: 校准舵机的当前位置为角度零点，相应的电位值为 2048。

- **Parameters**:
  - `servo_no`: 铰接舵机的序列号，1 - 6。

### release_servo

![Alt text](./img/blocks/servos/6.png)

- **原型**: `release_servo(servo_id)`

- **接口描述**: 关闭指定舵机系统的电源

- **Parameters**: `servo_id`: 1 ~ 6

### focus_servo

![Alt text](./img/blocks/servos/7.png)

- **原型**: `focus_servo(servo_id)`
- **接口描述**: 接通指定舵机的电源
- **Parameters**: `servo_id`: 1 ~ 6

## 夹爪

### set_gripper_calibration

![Alt text](./img/blocks/gripper/1.png)

- **原型**: `set_gripper_calibration()`
- **接口描述**: 将当前位置设置为零，设置当前位置值为 `2048`。

### set_gripper_state

![Alt text](./img/blocks/gripper/2.png)

- **原型**: `set_gripper_state(flag, speed, mode)`

- **接口描述**: 设置夹爪开关状态

- **Parameters**

  - `flag` (`int`): 0 - open, 1 - close
  - `speed` (`int`): 0 ~ 100
  - `mode`:gripper

### set_gripper_value

![Alt text](./img/blocks/gripper/3.png)

- **原型**: `set_gripper_value(value, speed, mode)`

- **接口描述**: 设置夹爪值

- **Parameters**

  - `value` (int): 0 ~ 100
  - `speed` (int): 0 ~ 100
  - `mode`:gripper

### get_gripper_value

![Alt text](./img/blocks/gripper/4.png)

- **原型**: `get_gripper_value(mode)`
- **接口描述**: 获取夹爪值
- **Return**: gripper value (int)

### is_gripper_moving

![Alt text](./img/blocks/gripper/5.png)

- **原型**: `is_gripper_moving()`

- **接口描述**: 判断夹爪是否移动

- **返回**:

  - `0` : not moving
  - `1` : is moving
  - `-1`: error data

### Init Eletric Gripper

![Alt text](./img/blocks/gripper/6.png)

- **原型**: `init_eletric_gripper()`
- **接口描述**: 初始化电动夹爪

### Set Eletric Gripper

![Alt text](./img/blocks/gripper/7.png)

- **原型**: `set_eletric_gripper()`
- **接口描述**: 初始化电动夹爪
- **Parameters**

  - 选择打开或关闭

### set_gripper_mode

![Alt text](./img/blocks/gripper/8.png)

- **原型**: `set_gripper_mode(status)`

- **接口描述**: 设置抓取模式。

- **Parameters**
- `status` (`int`): 0 - 透明传输。1 - 端口模式。

### get_gripper_mode

![Alt text](./img/blocks/gripper/9.png)

- **原型**: `get_gripper_mode()`

- **接口描述**: 获取抓取模式。

- **Return**

  - `status` (`int`): 0 - 透明传输。1 - 端口模式。

## 坐标控制

### get_tool_reference

![Alt text](./img/blocks/coords/1.png)

- **原型**: `get_tool_reference()`

- **接口描述**: 获取工具坐标系。

- **Return**: `list` [x, y, z, rx, ry, rz].

### set_tool_reference

![Alt text](./img/blocks/coords/2.png)

- **原型**: `set_tool_reference(coords)`

- **接口描述**: 设置工具坐标系。

- **Parameters**:
  - `coords`: (`list`) [x, y, z, rx, ry, rz].

### get_world_reference

![Alt text](./img/blocks/coords/3.png)

- **原型**: `get_world_reference()`
- **接口描述**: 获取世界坐标系。
- **Return**: `list` [x, y, z, rx, ry, rz].

### set_world_reference

![Alt text](./img/blocks/coords/4.png)

- **原型**: `set_world_reference(coords)`

- **接口描述**: 设置世界坐标系。

- **Parameters**:
  - `coords`: (`list`) [x, y, z, rx, ry, rz].

### get_reference_frame

![Alt text](./img/blocks/coords/5.png)

- **原型**: `get_reference_frame()`

- **接口描述**: 获取基本坐标系。

- **Return**: 0 - base 1 - tool.

### set_reference_frame

![Alt text](./img/blocks/coords/6.png)

- **原型**: `set_reference_frame(rftype)`

- **接口描述**: 设置基本坐标系。

- **Parameters**:
  - `rftype`: 0 - base 1 - tool.

### get_movement_type

![Alt text](./img/blocks/coords/7.png)

- **原型**: `get_movement_type()`
- **接口描述**: 获取运动类型。
- **Return**: 1 - movel, 0 - moveJ.

### set_movement_type

![Alt text](./img/blocks/coords/8.png)

- **原型**: `set_movement_type(move_type)`

- **接口描述**: 设置运动类型。

- **Parameters**:
  - `move_type`: 1 - movel, 0 - moveJ.

### get_end_type

![Alt text](./img/blocks/coords/9.png)

- **原型**: `get_end_type()`
- **接口描述**: 获取终点坐标系。
- **Return**: 0 - flange, 1 - tool.

### set_end_type

![Alt text](./img/blocks/coords/10.png)

- **原型**: `set_end_type(end)`

- **接口描述**: 设置终点坐标系。

- **Parameters**:
  - `end`: 0 - flange, 1 - tool.

## MyCobot320

### get_servo_speeds

![Alt text](./img/blocks/mycobot320/1.png)

- **原型**: `get_servo_speeds()`

- **接口描述**: 获取关节速度。

- **Return**: `list` 每个关节的速度

### get_servo_currents

![Alt text](./img/blocks/mycobot320/2.png)

- **原型**: `get_servo_currents()`

- **接口描述**: 获取关节电流。

- **Return**: `list` 每个关节的电流。

### get_servo_voltages

![Alt text](./img/blocks/mycobot320/3.png)

- **原型**: `get_servo_voltages()`

- **接口描述**: 获取关节电压。

- **Return**: `list` 每个关节的电压。

### get_servo_status

![Alt text](./img/blocks/mycobot320/4.png)

- **原型**: `get_servo_status()`

- **接口描述**: 获取每个关节的状态。

- **Return**: `list` 每个关节的状态。

### get_servo_temps

![Alt text](./img/blocks/mycobot320/5.png)

- **原型**: `get_servo_temps()`

- **接口描述**: 获取每个关节的温度。

- **Return**: `list` 每个关节的温度。

---

[← 上一页](../320pi/9-PumpUse.md) | [基础功能页面 →](../../../../5-BasicApplication/README_PI.md)
