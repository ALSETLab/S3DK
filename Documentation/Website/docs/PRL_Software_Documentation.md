# Software Design

The PRL is a packed Labview library. The code is not open to the user. Usage is meant to be through remote or manual control of the PRL, and using the Access Buffer or Access Queue remote components to read data, as well as using the Channel Selector to select which data is retrieved.

# PRL Library Contents

The PRL Library supports a Client application by taking care of connection to the C37 Device and handle PMU-data buffering. The PRL component connects to the device, reads data and puts these in an Access Buffer and/or queue. The Client may access these data through separate components that communicate with the PRL remotely.

![](https://lh5.googleusercontent.com/kbmJST_y2bhGdz2cqPfNsxz4aDOkC1nriyQroVUqO37glIba9lGOnHOwm0KlWx5MG_A8wT0ZfRNm5uALBdbFFudHIPjTJLy1Nmwd-QBM7bOQa3VdJEk0Q3-L1IwPYel_oul5Lc8F)

***The library has two parts:***

-   The PRL is a separate component which has to be started and stopped remotely or manually. It reads data and makes them accessible from a buffer and a queue.
    
-   The Access Components are used to start/stop the PRL, as well as access the data in different ways. These components are not self-supportive and merely represent an entrance point for the Client application to the PRL.
    

  

PMU Recorder Light (PRL)

  

-   Uses a DLL1 to connect to the PDC stream via the C37.118 protocol.
    
-   Receives configuration (channel names and scaling) from the PDC
    
-   Stores incoming data in the Live Buffer
    
-   Sends data on a queue to the Queue Handler and to the Access Buffer
    
-   Has remote controls for start/stop
    
-   Reconnects when signal is lost
    

  

Access Components

  

-   Queue Handler
    

-   Used in the Custom Application to read data from the queue
    

-   Buffer Handler
    

-   Used in the Custom Application to read data from the Access Buffer
    
-   Has variable sample rate
    

-   Selector
    

-   Provides a tool to select channels from the Custom Application
    

-   Remote
    

-   Allows the user to send commands to the PRL from the Custom Application
    

  

***PMU Recorder Light (PRL)***

  

The PRL makes PMU-data readily available to the Custom Application, and take care of the full connection with the PDC. This is done to avoid complicated data handling for the user

  

Streaming data must be buffered to handle variations in the stream. The PRL has the data flow depicted below.

![](https://lh3.googleusercontent.com/SI6Qlht8EGPdgls6-qgif-zLPSB93P0lb03CwaoagpiMyLsjIpRMxPqXKg2rmKkJBTgLfvm8Bee5tmxbNrsqc4QATWrO6bvQ-uB4UbrNmSyKJf1wSF3MlbZu_Q7a5vZA1jXUSLoj)

The Data Reader asks the DLL regularly for new data. New data is then put in the Data Buffer, and when the buffer is full the data is put in a queue that can be received by the Custom Application using the Queue Handler, and also sends the data to the Access Buffer via the Access Buffer Writer.

  

The Access Buffer size decides the amount of data history in memory, and data can be read from the buffer in the Custom Application via the Buffer Handler.

  

***Custom Application***
Due to the design of the PRL and the library, the Custom Application will need a particular design to use the components:

-   The PRL must be started with the Remote before data can be read. Also, the PRL must be stopped by the Custom Application after use. Otherwise it will continue running in memory—although this will not cause memory overflow.
    
-   If using the Queue Handler, the data must be read at regular intervals—otherwise data will be lost
    
-   The same goes for the Buffer Handler, and when using this component there must be an input for update rate (how often the data will be read)
    
-   The Selector is a separate window, and in order to use it, the Custom Application must have logic for opening/closing this window
    

The delivery will contain a sample project, which uses the PRL Library with all its features. This can be modified to suit the user’s specific needs. The delivery will also contain a detailed user manual and an installation package for the Windows 7 operating system and Labview 2011 or later.
