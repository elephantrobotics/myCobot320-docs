# myCobotPro 摄像头模块

> **兼容型号：** myCobot 320, myCobot 600

## 产品图片

<img src="../../../resources/1-ProductIntroduction/1.4/1.4.3-Camera/摄像头模块.jpg" alt="img-1" width="800" height=“auto” />

## 规格

| **名称**     | **myCobotPro 摄像头模块**                            |
| ------------ | ---------------------------------------------------- |
| 模型         | myCobot_Pro_cameraHolder_J6                          |
| 材料         | 光敏树脂                                             |
| USB 协议     | USB2.0 HS/FS                                         |
| 镜头焦距     | 标准 1.7mm                                           |
| 视野         | 约 60°                                               |
| 支持的系统   | Win7/8/10, Linux, MAC                                |
| 使用寿命     | 两年                                                 |
| 固定方式     | 螺丝固定                                             |
| 使用环境要求 | 温度和压力                                           |
| 适用设备支持 | ER myCobot 320 Series <br> ER myCobot Pro 600 Series |

## 用于物体

**相机法兰:** 机器视觉

**引言**

- USB 高清摄像头可与吸泵、自适应抓手、人工智能套件等配合使用，手眼并用，实现精确定位和校准。

**安装使用**

- 检查配件包东西是否齐全：螺丝及内六角扳手、带 usb 线的摄像头模组
  ![](../../../resources/1-ProductIntroduction/1.4/1.4.3-Camera/物料.jpg)

- 摄像头安装：

  - 结构安装：

    1. 将摄像头模组根据需要的方向对准机械臂末端，配合内六角扳手拧紧螺丝
       ![](../../../resources/1-ProductIntroduction/1.4/1.4.3-Camera/安装.jpg)

  - 电气连接：

    1. 将 USB 线插入底座 USB 接口：
       ![](../../../resources/1-ProductIntroduction/1.4/1.4.3-Camera/电气连接.jpg)

- 编程开发：

  > 使用 python 对摄像模组进行编程开发
  > [python 环境下载](../../../10-ApplicationBasePython/10.1_320_PI-ApplicationPython/1_download.md)

  - 新建 python 文件：  
     在想要的文件路径下右键新建 python 文件：  
     ![](../../../resources/1-ProductIntroduction/1.4/1.4.3-Camera/python使用1.png)

    > 文件名字可以根据需要修改

    ![](../../../resources/1-ProductIntroduction/1.4/1.4.3-Camera/python使用2.png)

  - 进行功能编程：
    ![](../../../resources/1-ProductIntroduction/1.4/1.4.3-Camera/python使用3.png)

    > 代码如下：

    ```python
    import cv2
    import numpy as np

    cap = cv2.VideoCapture(0) # “0”，根据查询到的摄像设备号来定

    while(True):
        ret, frame = cap.read()

        # gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

        cv2.imshow('frame', frame)
        # 按下'q'退出
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()
    ```

  - 保存文件并关闭，在文件夹空白处右键打开命令行终端

    ![](../../../resources/1-ProductIntroduction/1.4/1.4.3-Camera/python使用4.png)

    输入：

    ```bash
    python gripper.py
    ```

    ![](../../../resources/1-ProductIntroduction/1.4/1.4.3-Camera/python使用5.png)

    > 可以看到摄像头捕捉到的画面

    运行结果：
    ![](../../../resources/1-ProductIntroduction/1.4/1.4.3-Camera/python使用6.png)

- 如何查询摄像头设备号

  ```bash
  ls /dev/video* -l
  ```

  > 可以通过插拔设备分别使用命令，观察新增的设备号来确认。

  示例结果：
  ![alt text](../../../resources/1-ProductIntroduction/1.4/1.4.3-Camera/python使用7-查询设备号.png)

## 购买链接:

- [淘宝](https://shop504055678.taobao.com)
- [shopify](https://shop-elephantrobotics-com.translate.goog/collections/mycobot-pro-600/products/mycobotpro-cameraflange?_x_tr_sl=auto&_x_tr_tl=zh-CN)

---

[← 周边配件页](../README.md#camera) | [下一页 →](../1.4.4-Holder/1-PenHolderPro.md)
