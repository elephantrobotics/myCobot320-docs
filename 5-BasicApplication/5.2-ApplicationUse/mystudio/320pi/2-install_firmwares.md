# 安装驱动

用户可以根据自己使用的操作系统，点击下方按钮下载对应的**CP210X**或**CP34X**驱动压缩包。 解压压缩包后，选择与操作系统位数对应的安装包进行安装。

目前有两个驱动芯片版本，**CP210X**（适用于 CP2104 版本）和**CP34X**（适用于 CH9102 版本）驱动压缩包。 如果您不确定您的设备使用哪个 USB 芯片，您可以同时安装两个驱动程序。 (**CH9102_VCP_SER_MacOS** 安装过程中可能会出现错误，但实际上已经安装完毕，忽略即可。)

**注意**：对于 MacOS，安装前请确保系统 "首选项->安全与隐私->常规"和 "允许来自应用商店和公认开发者的应用程序 "已启用。

- 在底部下载**M5Stack-basic**串口驱动

  - **CP210X**

    - [ **Windows10** ](https://download.elephantrobotics.com/software/drivers/CP210x_VCP_Windows.zip)
    - [ **MacOS** ](https://download.elephantrobotics.com/software/drivers/CP210x_VCP_MacOS.zip)
    - [ **Linux** ](https://download.elephantrobotics.com/software/drivers/CP210x_VCP_Linux.zip)

  - **CP34X**

    - [ **Windows10** ](https://download.elephantrobotics.com/software/drivers/CH9102_VCP_SER_Windows.exe)
    - [ **MacOS** ](https://download.elephantrobotics.com/software/drivers/CH9102_VCP_MacOS.zip)

  - 最后下载**Atom**串口驱动

    - [ **Windows10** ](https://download.elephantrobotics.com/software/drivers/CDM21228_Setup.zip)

![P210X_install](img\4.1.1.2-CP210X_install.gif)

## 如何区分 CP210X 和 CP34X 芯片

- 如下图所示，打开**设备管理器**，查看**端口（COM 和 LPT）**

![frimware_check](img\4.1.1.3-firmware_check.gif)

- 如果**端口（COM 和 LPT）**显示**USB-Enhanced-SERIAL CH9102**，则为**CP34X 芯片**。

![CP34X](img\4.1.1.3-CP34X.png)

- 如果**端口（COM 和 LPT）**显示**Silicon Labs CP210x USB 至 UART 桥**，则为**CP210X 芯片**。

![CP210C](img\4.1.1.3-CP210X.png)

---

[← 上一页](./1-setup.md) | [下一页 →](./3-flash_firmwares.md)
