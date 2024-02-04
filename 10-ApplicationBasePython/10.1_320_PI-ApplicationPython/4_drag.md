# Drag to teach

Trajectory recording (including adaptive gripper) and playback can be realized.

> Python version drag and teach only supports Pi and Jetson Nano versions in 280, 270, and 320 models.

## Instructions：

- 1. Download [Drag Teaching Python Code File](https://github.com/elephantrobotics/pymycobot/blob/main/demo/drag_trial_teaching.py)
- 2. Copy the downloaded file to the robotic arm system.
- 3. Open the terminal and run the file:
  ```bash
    python drag_trial_teaching.py
  ```
    <img src="../../resources/10-ApplicationBasePython/drag.png" style="zoom:100%;" />
  
  After the file is run:
   - 3.1 Select robot port
   - 3.2 Enter the baud rate, the default is 1000000
        | machine type | Serial number | baud rate |
        |:---------:| :--------:|:--------:|
        |270 PI|  /dev/ttyAMA0|1000000|
        |280 PI|  /dev/ttyAMA0|1000000|
        |320 PI|  /dev/ttyAMA0|115200|
        |280 Jetson Nano|  /dev/ttyTHS1|1000000|
  - 3.3 Choose whether debugging is required, debugging is not enabled by default
  - 3.4 Finally, enter the function selection list, and the function selection is realized through the keyboard keys:
    - `q`: quit
    - `r`: start recording
    - `c`: stop recording
    - `p`: play once
    - `P`: loop / stop playback
    - `s`: Save this recording information, it will save the recording information to the record.txt file in the same directory as `drag_trial_teaching.py`
    - `l`: will load the information in the record.txt file in the same directory as `drag_trial_teaching.py`
    - `f`: relax all joints of the robot arm

---

[← Previous Page](3_TCPIP.md) | [Next Page →](5_Handle_control.md)