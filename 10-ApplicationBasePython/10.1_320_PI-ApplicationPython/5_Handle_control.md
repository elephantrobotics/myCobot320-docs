# 手柄控制

可以通过游戏手柄来控制机器的运动，实现使用夹爪或者吸泵来抓取物体。

> 注意：手柄需要单独购买，详情请咨询官方客服

> <img src="../../resources/10-ApplicationPython/handle.jpg" alt="7.1.1-1" style="zoom: 80%;" />

## 手柄按键对应功能如下:

### myCobot

- **1**: RX 坐标值增大
- **2**: RX 坐标值减小
- **3**: RY 坐标值减小
- **4**: RY 坐标值增大
- **5**: X 坐标值增大
- **6**: X 坐标值减小
- **7**: Y 坐标值减小
- **8**: Y 坐标值增大
- **9**: Z 坐标值增大
- **10**: Z 坐标值减小
- **11**: RZ 坐标值减小
- **12**: RZ 坐标值增大
- **13**: 唤醒手柄。连接后长时间不使用手柄，手柄会进入休眠模式。你需要按下这个按钮才能继续使用。
- **14**: 检测机器连接状态，atom LED 闪烁绿灯三次表示机器正常，闪烁红灯三次表示状态异常。
- **X**: 夹爪累加张开
- **Y**: 夹爪累加关闭
- **X**: 打开吸泵
- **X**: 关闭吸泵
- **Left 1**: 长按 2s，初始化机器人至关节零位状态。
- **Left 2**: 长按 2s，机器人停止力矩输出，放松所有关节。
- **Right 1**: 长按 2s，初始化机器人至移动初始点位。
- **Right 2**: 长按 2s，机器人打开力矩输出，所有关节锁定。

## 使用说明

### 1.连接设备

将 MyCobot 和手柄连接到电脑。

### 2.安装所需的包

下载代码: https://github.com/elephantrobotics/pymycobot

打开终端，切换路径到 `pymycobot/demo/handle_control` 文件夹，运行如下指令：

```bash
pip3 install -r requirements.txt
```

### 3.修改端口号

#### myCobot

编辑 handle_control.py 文件

```python
import pygame
import time
from pymycobot import MyCobot
import threading
# 将com7修改为你的电脑检测到的实际端口号
mc = MyCobot("/dev/ttyUSB0")
...
```

运行程序即可。

```bash
python3 handle_control.py
```

> 注意：在运行程序以后，首先要先点击 14 按钮，检查机器连接状态，机器连接状态正常(若为异常，将无法进行其他的操作，请先解决连接异常问题)，再点击 Right 1 按钮，机器到达初始点位以后，才可以进行其他的操作。

---

[← 上一页](4_drag.md) | [下一页 →](6_example.md)
