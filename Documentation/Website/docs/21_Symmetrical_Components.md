

![](https://lh5.googleusercontent.com/u5OGEt3TxASniXu4zBv-mOuzkuY3toTKCMCoFYC_Nc7cLv-UqDZKdmJgIlCySIE9L9PFcRulF8jRenNeqpWbFwKWBNohsihtqZUd3ZAc8600nHVcMr5AyPnY-2kV4-ejf4qjEl54)

21 Symmetrical Components VI takes raw input from an NI-DAQmx as waveform data. The waveform data is manipulated to find the amplitudes and phases of each wave given to it.

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
![](https://lh5.googleusercontent.com/n-AH0ctZJuVR5bbY6z6eCNm5tFsxZi2NH5vS7Cq0Vv3EXzt7RxMXJa-Mj56C_5TmTUdngX5gCk4ILhPr9sgRKpG5T6U4htszo9ST-1YBnLMvB81ywD5l1oYa41YmN4l0px154z_T)

The VI starts by receiving raw Amplitude and Phase data from an NI-DAQmx. Each signal is split into 3 data waves. Each phase angle and amplitude value for each signal 1, 2, and 3 are converted into complex notation of r*e^(i*theta). The various outputs are then calculated by adding and modifying the complex notations. Once added and modified, the average is found, which is converted back to polar coordinates of amplitude and angle. These values are sent as outputs.
