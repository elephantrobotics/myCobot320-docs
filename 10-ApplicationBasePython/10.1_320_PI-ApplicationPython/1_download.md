# 环境配置

pymycobot 是一个和 myCobot 进行串口通讯的 Python 包，支持 Python2、Python3.5 及之后版本。

在使用 pymycobot 控制机械臂之前需要搭建 Python 环境，下面就对 Python 的下载安装做出详细说明。

## 1 Python 下载和安装

目前，Python 有两个版本：2.x "和 "3.x"。这两个版本互不兼容。本节以版本 `3.x` 为例，因为它越来越受欢迎。

### 1.1 安装 Python

> **注意：** 安装之前，请先确认您的电脑是 64 位还是 32 位。右键点击我的电脑，选择属性。如下图显示是 64 位的操作系统，所以选择 64 位的 Python 安装包。
>
> <img src="../../resources/10-ApplicationPython/operatingsystemchecking1.jpg" alt="7.1.1-1" style="zoom:50%;" />
>
> <img src="../../resources/10-ApplicationPython/operatingsystemchecking2.jpg" alt="7.1.1-1" style="zoom:50%;" />

- **Python 官方下载地址： http://www.python.org/download/**
- **点击`Downloads`选项，开始下载 Python，点击 `Add Python 3.10 to PATH`,点击 `Install Now`，开始安装 Python**

<img src="../../resources/10-ApplicationPython/pythoninstall1.jpg" alt="7.1.1-1" style="zoom:50%;" />

<img src="../../resources/10-ApplicationPython/pythoninstall2.jpg" alt="7.1.1-1" style="zoom:50%;" />

<img src="../../resources/10-ApplicationPython/pythoninstall3.jpg" alt="7.1.1-1" style="zoom:50%;" />

- **出现“Setup was successful”提示，说明安装完成**

  <img src="../../resources/10-ApplicationPython/pythoninstall4.jpg" alt="7.1.1-1" style="zoom:50%;" />

### 1.2 运行 Python

安装成功后，打开命令提示符窗口（`Win+R`，输入`cmd`回车），敲入`python`后，会出现两种情况。

**情况一：**

<img src="../../resources/10-ApplicationPython/successfulinstallation.jpg" alt="7.1.1-1" style="zoom:50%;" />

屏幕上的这一提示表示 Python 已成功安装。提示符 `>>>` 表示 Python 交互环境。如果输入 Python 代码，可以立即得到执行结果。

**情况二：**

假如输入错误（比如输入 pythonn），则会出现错误提示：

<img src="../../resources/10-ApplicationPython/installerror.jpg" alt="7.1.1-1" style="zoom: 67%;" />

> **注意：** 出现错误的信息一般都是没有配置环境变量导致的，可以参考 1.3 配置环境变量修改环境变量。

### 1.3 配置环境变量

由于 Windows 会根据一个 Path 的环境变量设定的路径去查找 python.exe，如果没找到，就会报错。因此，如果安装时漏掉了勾选`Add Python 3.10 to PATH`，则需要手动把 python.exe 所在的路径添加到 Path 中，或者重新安装一遍 Python，记得勾选上 `Add Python 3.10 to PATH` 选项即可。

以下是手动添加 python.exe 所在的路径步骤。

- 右键`我的电脑` –> 选择属性 –> 选择高级系统设置 –> 选择右下角的环境变量：

<img src="../../resources/10-ApplicationPython/environment configuration.jpg" alt="7.1.1-1" style="zoom: 50%;" />

- 环境变量包括用户变量和系统变量。对于用户变量，用户可以通过 `cmd` 命令使用自己下载的程序。将目标程序的绝对路径写入用户变量。

<img src="../../resources/10-ApplicationPython/user variable1.jpg" alt="7.1.1-10" style="zoom:50%;" />

<img src="../../resources/10-ApplicationPython/user variable2.jpg" alt="7.1.1-11" style="zoom:50%;" />

- 以上步骤完成后，打开命令提示符窗口（`Win+R`，再输入 `cmd`，回车），敲入 `python`，出现下图中的提示表示成功：

<img src="../../resources/10-ApplicationPython/user variable3.jpg" alt="7.1.1-7" style="zoom: 67%;" />

## 2 PyCharm 安装和使用

PyCharm 是一款功能强大的 Python 编辑器，具有跨平台性。首先介绍 PyCharm 在 Windows 系统中的安装步骤。

**下载地址** **[PyCharm](http://www.jetbrains.com/pycharm/download/#section=windows)**

### 2.1 下载安装

进入该网站后，我们会看到如下界面：

<img src="../../resources/10-ApplicationPython/pycharmdownload1.jpg" alt="7.1.1-7" style="zoom: 67%;" />

根据界面介绍下载文件，Professional 表示专业版，Community 是社区版，推荐安装社区版，因为是免费使用的。

- 下载好之后开始安装，点击 `Next`:

<img src="../../resources/10-ApplicationPython/pycharmdownload2.jpg" alt="7.1.1-7" style="zoom: 67%;" />

- 按照个人喜好选择相应选项，然后点击 `Next`:

<img src="../../resources/10-ApplicationPython/pycharmdownload3.jpg" alt="7.1.1-7" style="zoom: 67%;" />

- 点击 `Install`:

<img src="../../resources/10-ApplicationPython/pycharmdownload4.jpg" alt="7.1.1-7" style="zoom: 67%;" />

- 下载中:

<img src="../../resources/10-ApplicationPython/pycharmdownload5.jpg" alt="7.1.1-7" style="zoom: 67%;" />

- 点击 `Finish` 结束安装：

  <img src="../../resources/10-ApplicationPython/pycharmdownload6.jpg" alt="7.1.1-7" style="zoom: 67%;" />

### 2.2 创建项目

PyCharm 安装完成之后进入该软件，创建第一个程序。

- 单击桌面上的 PyCharm 图标，进入到 PyCharm 中，如下图所示，点击 `New Project` :

<img src="../../resources/10-ApplicationPython/createproject1.jpg" alt="7.1.1-7" style="zoom: 50%;" />

- `Interpreter` 用于解释 python 程序。找到 `Interpreter`，开始对解释器进行设置，点击 `Add Interpreter`

  <img src="../../resources/10-ApplicationPython/interpreter1.jpg" alt="7.1.1-7" style="zoom: 50%;" />

- 点击 `New`，找到 python.exe 存储位置，勾选 `Inherit global site-package` 选项：

  <img src="../../resources/10-ApplicationPython/interpreter3.jpg" alt="7.1.1-7" style="zoom: 40%;" />

- 设置 `Location`。Location 是存储 PyCharm 项目的地方，可根据需要自行选择。

  <img src="../../resources/10-ApplicationPython/location1.jpg" alt="7.1.1-7" style="zoom: 40%;" />

- 点击 `Create`，会出现一个样本:

  <img src="../../resources/10-ApplicationPython/createproject2.jpg" alt="7.1.1-7" style="zoom: 40%;" />

- 新建 PyCharm 文件。右击箭头指向的文档图标，点击 New，点击 Python File，新建成功:

  <img src="../../resources/10-ApplicationPython/createproject3.jpg" alt="7.1.1-7" style="zoom: 40%;" />

- 命名 Python File.

  <img src="../../resources/10-ApplicationPython/createproject4.jpg" alt="7.1.1-7" style="zoom: 67%;" />

- 文件创建成功后便进入如下的界面，便可以编写自己的程序了:

  <img src="../../resources/10-ApplicationPython/pycharm界面展示.jpg" alt="7.1.1-7" style="zoom: 67%;" />

## **3 准备工作**

- 固件烧录。固件是系统控制机器人的驱动程序。 [**MyStudio**](<(https://docs.elephantrobotics.com/docs/gitbook-en/4-BasicApplication/4.1-myStudio/)>)。

  - **M5Stack 版本** 底部的 `Basic` 需要烧录 `minirobot`。烧录完成后选择 `Transponder` 功能（该功能用于接收转发底部 Basic 发送的指令，从而执行目标动作），点击 `Press A`，出现 `Atom：OK` 提示信息即为成功。此外，M5 版本末端 Atom 烧录最新版的 atomMain，出厂默认已烧录，无需自行烧录。
  - **Pi \ jetsonnano** 版本末端 Atom 烧录最新版的 atomMain，出厂默认已烧录，无需自行烧录。

- pymycobot 安装。打开一个控制台终端(快捷键 `Win+R`,输入 `cmd` 进入终端)，输入以下命令：

  ```python
  pip install pymycobot --upgrade --user
  ```

  <img src="../../resources/10-ApplicationPython/pymycobotinstall.jpg" alt="7.1.1-7" style="zoom: 80%;" />

- 源码安装。打开一个控制台终端(快捷键 `Win+R`,输入 `cmd` 进入终端)，输入以下命令即可安装：

  ```python
  git clone https://github.com/elephantrobotics/pymycobot.git <your-path>
  # 其中<your-path>填写你的安装地址，不填默认在当前路径

  cd <your-path>/pymycobot
  # 进入到下载包的pymycobot文件夹

  # 根据你的python版本运行下面其一命令
  # Install
   python2 setup.py install
  # or
   python3 setup.py install
  ```

- 更新 pymycobot

```bash
pip install pymycobot --upgrade
```

## 4 导入 pymycobot

上述准备工作完成之后，开始通过 Python 代码实现对机械臂的操控。这里以 myPalletizer 320 pi 版本为例进行演示。

- 输入以下代码，导入我们的库：

```python
from pymycobot.mycobot import MyCobot
```

> **注意：**
>
> 1. 如果代码下方没有出现红色波浪线，则说明 pymycobot 安装成功。
> 2. 如果出现红色波浪线，请访问 **https://github.com/elephantrobotics/pymycobot** 手动下载 pymycobot 并将其放入 python 库。
>
> <img src="../../resources/10-ApplicationPython/pymycobotdownload.jpg" alt="7.1.1-7" style="zoom: 33%;" />

## 5 **简单演示**

创建一个新的 Python 文件，输入以下代码来设置 RGB 灯光面板的颜色。

> **注意：** 各款设备的对应的波特率不尽相同，使用时请查阅资料了解其波特率，串口编号可通过[计算器设备管理器](https://docs.elephantrobotics.com/docs/gitbook/4-BasicApplication/4.1-myStudio/4.1.1-myStudio_download_driverinstalled.html#4113-%E5%A6%82%E4%BD%95%E5%8C%BA%E5%88%86cp210x%E5%92%8Ccp34x%E8%8A%AF%E7%89%87) 或串口助手进行查看。

- **MyCobot 相应代码：**

```python
# demo.py
from pymycobot.mycobot import MyCobot # 当使用树莓派版本的mycobot时，可以引用这两个变量进行MyCobot初始化，如不是可不填该行代码
import time
# 以上需写在代码开头，意为导入项目包

# MyCobot 类初始化需要两个参数：串口和波特率
#   第一个是串口字符串， 如：
#       linux： "/dev/ttyUSB0"
#       windows: "COM3"
#   第二个是波特率：
#       M5版本为： 115200
#
#   以下:
#       mycobot-M5:
#           linux:
#              mc = MyCobot("/dev/ttyUSB0", 115200)
#           windows:
#              mc = MyCobot("COM3", 115200)
#       mycobot-raspi:
#           mc = MyCobot(PI_PORT, PI_BAUD)

# 初始化一个MyCobot对象
# 下面为 mycobot-raspi 版本创建对象代码
mc = MyCobot("/dev/ttyAMA0", 115200)

i = 7
# 循环7次
while i > 0:
    mc.set_color(0,0,255) # 蓝灯亮
    time.sleep(2)	# 等2秒
    mc.set_color(255,0,0) # 红灯亮
    time.sleep(2)	# 等2秒
    mc.set_color(0,255,0) # 绿灯亮
    time.sleep(2)	# 等2秒
    i -= 1
```

运行示例文件：

```bash
python3 demo.py
```

机器顶部的灯以蓝、红、绿灯的顺序 2 秒钟的间隔连续闪烁 7 次。

---

[← 上一页](../README.md) | [下一节 →](2_API.md)
