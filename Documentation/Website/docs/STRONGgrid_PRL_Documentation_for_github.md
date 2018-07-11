SD3K Quick Start Guide

Smart grid Synchrophasor Software Development Toolkit

  

Repository

[https://github.com/SmarTS-Lab-Parapluie/S3DK](https://github.com/SmarTS-Lab-Parapluie/S3DK)

  
  
  
  


| Version | Date | User | Comment |
|---------|-----------|--------------|-----------------------------------------------------------|
| 1 | 206-07-14 | L. Vanfretti | First Version-General Installation from Source is missing |

  

# Introduction

## Background

NOTE: Usage of the PRL will require some knowledge of Labview. This documentation is NOT an introduction to Labview.

## Vocabulary

| | |
|--|--|
| Client | The client application that connects to the data queue, or reads data from the Access Buffer.     The software bundle contains an example Client that also starts/stops the PRL remotely.  |
| C37 Device | The device (PMU or PDC) that sends data on the C37.118 protocol. |

  

# Installation

Instructions for installation from source to be added.

Quick Install: Go to the ”Releases”: [https://github.com/SmarTS-Lab-Parapluie/S3DK/releases](https://github.com/SmarTS-Lab-Parapluie/S3DK/releases) and install the software using the VI package manager in LabView.

# User Manual

## Prerequisites

The user should have some familiarity with Labview, or go through the first five modules here:

[http://www.ni.com/white-paper/7466/en](http://www.ni.com/white-paper/7466/en)

## Useful Software

### PMU Connection Tester

As the name indicates it can be used to test the connection to a PMU or a PDC, to see that all the signals are arriving as they are supposed to. It can be downloaded from this site:

[http://pmuconnectiontester.codeplex.com/](http://pmuconnectiontester.codeplex.com/)

Before using the connection tester, you will need to set it to use Ipv4, in the Settings tab:

![](https://lh4.googleusercontent.com/TkNV-JYlBgtK3uVrQWZFldgBt9JSjr2OAiZ-xPb3cnYQZ5ABpTa_-Ki6JBhV0rcFpSGK4twRJEE_FB8IaVWDl8h8WZtzimt81qu1znHqOAmTq8itLsrazEEuEaqLfqsP9h-b278qb_TsIiQP9A)

## Quick Start

  

![C:\Users\vemunda\Documents\PRL\PRL off.png](https://lh6.googleusercontent.com/Isa0IBs0J7-M72_fk9TvtTGeVZBBN11P2lvaaSwmcNAtepENhyD0UtmSTv3-l3wflTvih0sbZMgA4Oi4dv9H4OgqNIC02g47UoXDT-47cDuJBoWcj9hCh1LzQwSj4j3RYTGdW4Fl-W3tN-u0oA)

The main window is depicted above. Press "run" (the arrow to the upper left) to start the PRL, which will now look like this:

![C:\Users\vemunda\Documents\PRL\PRL on.png](https://lh5.googleusercontent.com/InHaplvYY6N6Lo9zP-RAuex2wBebToQBap0d6KmA-FFJ8FuSDd5W_NmTlC5K2tPCN_jftosr0korSlphqzsV5j8HtwhbMUmcy1GbRCyDMhwAaDwU6aeDPsZ2X_aI3k3Sak7v5wnaYpQdNvBkIQ)

Press the Config button to open the Configuration Window.

![C:\Users\vemunda\Documents\PRL\PRL Config 1.png](https://lh6.googleusercontent.com/qThsVr4YnO2UrENQCJ4VUYLkQgwB-0wu6qtx4qHS_GpHzYlLh_o2FjqTGYdYaxfGDcIsTFDS5wqBm11W-FpQDs3GsZsqxHUwfzVVPC-ZoDg3fpsQdDncTDnNMrBtIEs_QdEqyZnj_qazJb0F3A)

The Connection tab always shows first. Enter the IP-address, Port and PDCID of the connection, and press OK.

Now press Startup to activate the connection. The PRL will retry the connection until it comes alive. If it does not work, press Abort to cancel or press Quit directly.

NOTE: If the IP-address and/or the port is invalid, this will cause Labview to hang for a while. Problem is solved by waiting a bit, or restart.

If there is a problem with the connection, use the PMU Connection tester to verify that the connection settings are correct. The signals should arrive fine there before you try to connect with the PRL.

When the connection is active, the Pause and Shutdown buttons are activated and the indicators will show activity. This means data is available and can be retrieved from the Access Buffer.

Hold the mouse pointer over the different indicators and buttons to see what they do, if this is unclear, or look at the detailed description below.

Press Shutdown to stop the data stream and Quit to exit the application.

## Main Window

### Buttons

![C:\Users\vemunda\Documents\PRL\PRL on.png](https://lh5.googleusercontent.com/InHaplvYY6N6Lo9zP-RAuex2wBebToQBap0d6KmA-FFJ8FuSDd5W_NmTlC5K2tPCN_jftosr0korSlphqzsV5j8HtwhbMUmcy1GbRCyDMhwAaDwU6aeDPsZ2X_aI3k3Sak7v5wnaYpQdNvBkIQ)


|  |  |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| Quit | Stops data collection and exits the program |
| Startup | Connects to the C37 device using the connection settings set in Config. |
| Abort | If connection fails, the software will wait a given amount of time (as set in Config) before retrying. This wait may be aborted with this button. |
| Pause | Pauses/continues data collection. The data will be buffered for a given amount of time in the DLL. |
| Shutdown | Disconnects from the C37 device. |
| Restart | Reinitializes the software according to current settings. |
| Config | Opens the configuration window. |
| Raw Data Indicator | Opens a panel showing all incoming channels and raw data. |
| Channel Selector | Opens a panel where you can select which signals should be the output of the Snapshooter. |
  
  

### Indicators

![](https://lh3.googleusercontent.com/zXvFt4yTXdqMFfo8AwPPUN_nRK-dgTejWdWUDeMD_UaoXN_PhmwWkjollZ3dNyHeqcbvEz7B9NOdXduKOx1cdBafFscbWBAkY8aQvZEFJwVPp3S7_g-E1bM8kEHFmfEMioo4ucO3Uo21VzzIWQ)


|  |  |  |
|----|----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1 | Data Rate | The number of data frames received per second. |
| 2 | Software Activity | Indicates the current operation, if any. Ready otherwise. |
| 3 | Time stamp | The time stamp of the latest received data frame. |
| 4 | Access Buffer Write | Indicates how much time the software spends on writing data to the access buffer. |
| 5 | Bad dt Counter | Counts the number of dt above sampling period. Zero means no data has been lost.  |
| 6 | Data Quality Indicator | Shows the percentage of missing data. The maximum value of the indicator is 50%.  |
| 7 | Data Frame Processing Rate | Indicates the amount of time that the software spends on processing data frames. 0 means no data is coming and hence that the data stream has stopped. 100 means data processing is continuous, and hence that there is an incoming data overload. |
| 8 | Channel Selector | Open/close the Channel Selector window |
| 9 | Raw Data Indicator | Open/close the raw data display |
| 10 | Status Indicators | Indicates the status of the connection and of the software. Hold the mouse pointer over the different lights to see what they mean. |

# ![](https://lh6.googleusercontent.com/B9cJ00TySr5xaHdRtz052LcdEy6BIeWKybvEvyN3w7acnPZmqvc8NvjD_LY0F8NmIJE0j6Fusi2MmSwPyXMkWdo5vhQR0XEEWl1uJ2A6hPxoLbS8S3xB2XWui6cNUOwUuoYEBN2HX0xFcA9-Fg)

  


|  |  |  |
|---|-----------------|-------------------------------------------------------------------|
| 1 | Incoming Data | Blinks when data is received |
| 2 | Data to Buffer | Blinks when data is transferred from live buffer to access buffer |
| 3 | System Activity | System Activity |
| 4 | System Exit | System Exit |
| 5 | Processing | Processing |
| 6 | Data Lost | Data lost on the way to the access buffer |
| 7 | Data Received | Data received in the access buffer |

# Configuration

## Connection

## ![C:\Users\vemunda\Dropbox\1 Project\06 Strongrid\PRL\PRL\PRL Config 1.png](https://lh4.googleusercontent.com/xhvFXMnJm6wXY0_hkHO8eNDi7Qx7fveLxKHT5scmAzt1zhGDimWgvfVDXDXYAillkzFu2bCbJDbBSl57gU2UcGdUggGZyIXFBKn7lqD96PxPlXNmNoXzB6uPK7ZpH0bvsy8fV7pS24iURgqp9Q)

  

Connection Settings contain the IP-address, Port and PDC ID of the PMU/PDC. These are the same as would be set in the PMU Connection Tester.

The Autostart feature determines whether the connection will be made automatically on software startup (this means that when calling the PRL remotely, it is sufficient to send the "Run" command. The "Startup" command automatically follows).

## Buffer and Queue

  

![C:\Users\aristobruker\Dropbox\3 Resource\Graphics\Statnett\PRL\PRL Configuration - Buffer and Queue.png](https://lh6.googleusercontent.com/w44waJBzbNashxkl9ElOYq_pEEg61133MtbvIZcrru0-OGw7sfvxSjYpxoLyQ08sA-SDzvuDkLJcWcPI-TZDoMOVkQqeFBvmq9SP9dbE85Vfm3JpbMf2pVEQalgWhbwo2sThvt7gzX55OhzdMg)

  

NOTE: The connection to the PMU/PDC must first be tested in the PRL, since the buffer size depends on sampling rate. This is when the PRL connects to the PMU/PDC.

The Live Data Buffer  Size sets the number of data frames that will be read from the incoming data before the data is passed on to the Access Buffer and/or the output queue. This may be set to 1, which means the data will go directly to the buffer/queue. Using values above 1 may however prove appropriate for data efficiency purposes. The size of this buffer will determine the maximum usable refresh rate when reading data from the Access Buffer.

Access Buffer Size determines the amount of data made available to the client application.

Queue Active and Access Buffer Active switches off/on the respective data streams.

Data Points indicates the actual amount of data frames contained in the Access Buffer, and the LED to the right indicates whether the combination Live Data Buffer Size, Access Buffer Size and PMU/PDC data rate gives an integer amount of data points. In other words it indicates if the length of the data buffer, in time, is in fact the length stated in Access Buffer Size.

## Bad Data

  

![](https://lh5.googleusercontent.com/SJ9W2bNNcfbNV8FnasrzT19adqCHX74pNGfPxyB1IWopGv_On9-DB5DG6Wyw2AOHsPrZhl5e8lJPtX4voaakrgiglIkgqZH5tK15K3RgelksN3sM_HHuH0QOj_2QXOVsXvvCVQ00YFaOID8ngQ)

When a signal is missing, the phasors coming from a PMU is typically 0, but may also be 1. Sometimes the signal is maxed out. The same goes for the analog frequency signal. When the signal is missing, it might give an output of 50 Hz flat instead of 0 Hz. It is therefore difficult to determine if the signal is valid based on limits. Instead the software is set to compare succeeding data points, and if enough of them are equal the signal is treated as invalid, and the data is replaced with NaN's until the values come alive.

A certain type of PMU’s gave some problems with this solution. Since the resolution of the signal was quite low, steps were visible when looking closely at the signal. This resulted in the software somtimes producing invalid frequency signals—even when the number of allowed data points was set to 50.

When setting these values, care should therefore be taken with the frequency signal. Make sure the signal is floating or set the number of allowed data points high.

NOTE: When using a test signal, this signal may be a steady flat value. For testing purposes it may therefore be best to switch off the Bad Data Removal alltogether.

dt Tolerance is the accepted slide in time between two data frames. The GPS clocks that PMUs use to synchronize has an accuracy of one microsecond. The default ten microseconds is therefore a good start.

## Advanced

  

![](https://lh4.googleusercontent.com/iw0aFwYVSZ84lvLHlUIMJptrFxZ85Ypa4WEWERwb1Hv9r92t-fD1gc3FmwF27GMTzGZdPxTvtWS9LiXJiTPFy03XZBA2l0fF0RToZU1PVupw7KEtqsQTx0oYVuCR7L_vh6pm3gE97OjyQQX9Ig)

Wait for Config Timeout decides for how long the software should wait for the PDC/PMU to supply a configuration file, and Seconds to Try is the time it will continue to look for the configuration file. If no configuration is received, Seconds to Wait if Config Fails determines how long the software will wait before retrying.

Max Time Stamp Age Before Reconnect is the the maximum allowed lag of the incoming PMU-data to the system clock of the computer running the PRL. The background for this is that if the PDC restarts, the PRL wil not automatically continue reading the data stream. Instead it requires a new connection.

NOTE: If the configuration has changed after a reconnect, this is not detected by this version of the PRL.

Poll New Data Timeout is how long each check for a newly arrived data frame waits. This number affects the Data Frame Processing Rate.

Data Rate History is the number of data points used to determine how busy the software is (Data Frame Processing Rate). The timeout in the procedure waiting for new data to arrive is 5 ms. If more than 5 ms passes before the software receives new data, this counts as a no data period. The history of data/no data gives a percentage of time used on processing data, and a low value will mean the data stream has stopped, while a high value will mean too much processing power is used on processing data. This may also indicate that the computer is overloaded with other tasks.

If the Data Frame Processing Rate peaks at 100, this means all power is used on processing data and it indicates that data may be piling up in the DLL buffer and that there is a risk of eventually loosing data. If this happens, it could for example indicate that the Client is using too much resources on processing. The Data Frame Processing Rate is not the same as CPU Usage. It is an artificial, yet good, indicator of how stressed the PRL is. A good number is 30 to 60.


