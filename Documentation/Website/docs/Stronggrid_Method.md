
# Strongrid IEEE C37.118 DLL
# DLL Interface Description

## INTRODUCTION

### Document scope

This document gives the Strongrid DLL users an overview of methods and information the DLL interface is capable of providing. It also suggests different threading models that can be implemented by the client application to efficiently use the information these methods provide.

### Strongrid IEEE C37.118 DLL Interface overview

 ![DLL Architecture](/docs/img/STRONgrid-DLL-Architecture.png)

The Strongrid IEEE C37.118 DLL interface connects the client application to the PMUs/PDCs through the IEEE C37.118 protocol.  In first version of the Strongrid DLL  only the DLL API interface is implemented, while the other interfaces are prepared in the code.

The complete information it is possible to retrieve through the Strongrid DLL API interface is  given in the Appendix 1.

### Usage of methods

The usage of these methods depends on the clients requirements, i.e. the client application can either call methods with required fields or it shall call methods that will retrieve all the information, the  flow charts below gives an overview of using these methods differently in different ways based on threading models being adopted.

The Strongrid DLL Threading model shall support 2 different modes, giving the user a choice between ease of use and scalability.

The threading model is critical for developing a scalable system, however, it may come at the cost of some additional complexity. The stronggrid DLL shall support the following two modes:

- One thread per PMU/PDC
- Threadpool w/ readqueue

### One thread per PMU/PDC

This mode will be the simplest to implement for the client – Each individual PMU can be used synchronously and in isolation within each thread. Reading from the PMU will be synchronous, and the user will not have to deal with synchronization and coordination of threads. As shown in the flow chart 1 (Appendix 2).

As a general rule of thumb, one should expect at least 1 MB of memory per thread and increased latency for each thread. The amount of threads a system can sustain is very system dependent andcannot be accurately predicted, however, the number of threads should never exceed approximately 100 on any system.

### Threadpool with readqueue

The readqueue contains a list of PMU/PDC&#39;s which have data waiting to be read. This makes it possible to call &quot;readFrame&quot; without any significant blocking behavior, making it possible to use a threadpool to act as &quot;workers&quot; in reading the data from the network and decoding it. Flow chart 2 (Appendix 2) displays this model of threading.

**The flow of the program becomes:**

1. 1)Read list of PMU/PDC&#39;s with data available to be read: &#39;readPendingQueue&#39;\*
2. 2)Delegate the content of the list to the threadpool which in turn calls &#39;readFrame&#39; for each PDC/PMU in the list
  1. Any calls to the &quot;getter&quot; functions should immediately follow &quot;readFrame&quot; within each thread.
3. 3)Wait for all threads to complete
  1. Failure to wait will result in the same PMU/PDC&#39;s being returned on the next call to &#39;readPendingQueue&#39; making coordination that much harder.
4. 4)Go to (1)

**readPendingQueue\* is not yet defined in the DLL interface**

The size of the threadpool should vary with the system – ie. [1,4] threads per CPU core should yield the best results.

### Conclusions

The &quot;Theadpool with readqueue&quot; approach should under no circumstances be slower than the &quot;one thread per PMU/PDC&quot; approach, and is significantly more scalable. The increased complexity however, means the user must make a conscious decision based on the scope and scale of the project, balancing complexity with scalability and latency requirements.

## Strongrid IEEE C37.118 DLL APIs

### General functions

| **Method** | **Description** |
| --- | --- |
| int   **connectPdc** (char \*ipAddress, char \*port, int32\_t pdcId, int32\_t \* pseudoPdcId )  | The connectPdc API will create an object of StrongridIEEEC37118Client and adds it to the vector/map that is maintained globally and will attempt to establish a socket connection using the credentials passed as arguments,On success this API will return 0, and a &quot;pseudoPdcId&quot;, uniquely identifying the PDC.On failure this API will free the created StrongridIEEEC37118Client object and return 1 |
| int   **readHeaderData** ( int32\_t timeOutMs int32\_t pseudoPdcId)  | The readHeaderData API will find the StrongridIEEEC37118Client object using the pseudoPdcId and gets the Header frame from the associated PDC/PMU. From the Header Frame it will get all the Header values.On success this API will return 0.On failure this API will return 1.  |
| int   **readConfiguration** ( int32\_t timeOutMs int32\_t pseudoPdcId)  | The readConfiguration API will find the StrongridIEEEC37118Client object using the pseudoPdcId and gets the Configuration 2 frame based on the version of the associated PDC/PMU. From the Configuration 2 Frame it will get all the Configuration values.On success this API will return 0.On failure this API will return 1.  |
| int   **readConfiguration\_Ver3** ( int32\_t timeOutMs int32\_t pseudoPdcId)  | The readConfiguration\_Ver3API will find the StrongridIEEEC37118Client object using the pseudoPdcId and gets the Configuration 3 frame based on the version of the associated PDC/PMU. From the Configuration 3 Frame it will get all the Configuration values (note that the optional CFG-3 is introduced with version 2 of the protocol - IEEE Std C37.118.2-2011).On success this API will return 0.On failure this API will return 1.  |
| int **getHeaderMsg** (char\* msg, int maxMsgLength, int32\_t pseudoPdcId)  | The getHeaderMsg API will find StrongridIEEEC37118Client object using the pseudoPdcId and send the header information.On success this API will return 0On failure this API will return 1 |
| int **getPdcConfig** (pdcConfiguration\* pdcCfg,int32\_t pseudoPdcId)  | The getPdcConfig API will finds the StrongridIEEEC37118Client object using the pseudoPdcId and send theconfiguration 2 frame details.On success this API will return 0On failure this API will return 1 |
| int **getPdcConfig\_Ver3** (pdcConfiguration\* pdcCfg,int32\_t pseudoPdcId)    | The getPdcConfig\_Ver3 API will finds the StrongridIEEEC37118Client object using the pseudoPdcId and send theconfiguration 3 frame details (note that the optional CFG-3 is introduced with version 2 of the protocol - IEEE Std C37.118.2-2011).On success this API will return 0On failure this API will return 1 |
| int **getPmuConfiguration** (pmuConfig\* pmuconf,int32\_t pseudoPdcId, int32\_t pmuIndex)  | The getPmuConfiguration  API will find particular PMU related to the pseudoPdcId and pmuIndex given and sends all the configuration 2 frame details related to current PMU.On success this API will return 0On failure this API will return 1 |
| int **getPmuConfiguration\_Ver3** (pmuConfig\_Ver3\* pmuconf,int32\_t pseudoPdcId, int32\_t pmuIndex)  | The getPmuConfiguration\_Ver3 API will find particular PMU related to the pseudoPdcId and pmuIndex given and sends all the configuration 3 frame details related to current PMU (note that the optional CFG-3 is introduced with version 2 of the protocol - IEEE Std C37.118.2-2011).On success this API will return 0On failure this API will return 1  |
| int   **getPhasorConfig** ( phasorConfig \*phasorCfg,int32\_t pseudoPdcId,int32\_t pmuIndex,int32\_t phasorIndex)  | The getPhasorConfig API will find the StrongridIEEEC37118Client object using the pseudoPdcId and gets the Configuration 2 frame phasor configuration of the associated PDC/PMU. From the Configuration Frame it will get the configuration of the PMU using the pmuIndex, and by using the phasorIndex it will get the particular phasorConfig.On success this API will return 0 On failure this API will return 1.  |
| int   **getPhasorConfig\_Ver3** ( phasorConfig\_Ver3 \*phasorCfg, int32\_t pseudoPdcId,int32\_t pmuIndex,int32\_t phasorIndex)  | The getPhasorConfig\_Ver3API will find the StrongridIEEEC37118Client object using the pseudoPdcId and gets the Configuration 3 frame phasor configuration of the associated PDC/PMU. From the Configuration Frame it will get the configuration of the PMU using the pmuIndex, and by using the phasorIndex it will get the particular phasorConfig.On success this API will return 0 On failure this API will return 1.  |
| int   **getAnalogConfig** ( analogConfig \*analogCfg,int32\_t pseudoPdcId,int32\_t pmuIndex,int32\_t analogIndex) | The getAnalogConfig API will find the StrongridIEEEC37118Client object using the pseudoPdcId and gets the Configuration 2 frame analog value configuration of the associated PDC/PMU. From the Configuration Frame it will get the configuration of the PMU using the pmuIndex, and by using the analogIndex it will get the particular analogConfig.On success this API will return 0 On failure this API will return 1. |
| int   **getAnalogConfig\_Ver3** ( analogConfig\_Ver3 \*analogCfg,int32\_t pseudoPdcId,int32\_t pmuIndex,int32\_t analogIndex)  | The getAnalogConfig API will find the StrongridIEEEC37118Client object using the pseudoPdcId and gets the Configuration 3 frame analog value configuration of the associated PDC/PMU. From the Configuration Frame it will get the configuration of the PMU using the pmuIndex, and by using the analogIndex it will get the particular analogConfig.On success this API will return 0 On failure this API will return 1.  |
| int   **getDigitalConfig** ( digitalConfig\* digitalCfg, int32\_t pseudoPdcId,int32\_t pmuIndex,int32\_t digitalIndex)  | The getDigitalConfig API will find the StrongridIEEEC37118Client object using the pseudoPdcId and gets the Configuration 2 frame digital value configuration of the associated PDC/PMU. From the Configuration Frame it will get the configuration of the PMU using the pmuIndex, and by using the digitalIndex it will get the particular digitalConfig.On success this API will return 0 .On failure this API will return 1.  |
| int   **getDigitalConfig\_Ver3** ( digitalConfig\* digitalCfg, int32\_t pseudoPdcId,int32\_t pmuIndex,int32\_t digitalIndex)  | The getDigitalConfig\_Ver3 API will find the StrongridIEEEC37118Client object using the pseudoPdcId and gets the Configuration 3 frame digital value configuration of the associated PDC/PMU. From the Configuration Frame it will get the configuration of the PMU using the pmuIndex, and by using the digitalIndex it will get the particular digitalConfig.On success this API will return 0 .On failure this API will return 1.  |
| int   **startDataStream** (int32\_t pseudoPdcId)  |  The startDataStream API will find the StrongridIEEEC37118Client object using the pseudoPdcId and send the START\_DATA\_FRAME command to the associated PMU/PDC. On success this API will return 0On failure this API will return 1.  |
| Int **pollPdcWithDataWaiting** ( int pseudoPdcIdArrayLength, int32\_t\* outPseudoPdcIdArr, int32\_t\* outNumPdcWithData, int pollTimeoutMs)   | The startDataStream API will fill a list over PMU/PDCs which have available data frames to read. The function fills Fills in &quot;outPseudoPdcIdArr&quot; with pseudoPdcId&#39;s which have data waiting. Note that call to the readNextFrame() function with pseudoPdcId related to PMU/PDC with available data frames to read will not lead to blocking of the thread the function is called from. Note also that the return list with PMU/PDCs which have available data frames to read can only contain any of the PseudoPdcId numbers related to PMU/PDCs currently connected to the  Strongrid IEEE C37.118 DLL.pseudoPdcIdArrayLength = The length of the input array outPseudoPdcIdArr = the input array where the pseudo PDC id&#39;s are placedoutNumPdcWithData = the total number of PDC&#39;s with data waitingOn success this API will return 0On failure this API will return 1  |
| int **readNextFrame** (int32\_t timeoutMs, int32\_t pseudoPdcId)  | Reads the next data frame from the PDC/PMU associated with using the pseudoPdcId.On success this API will return 0.On failure this API will return 1.  |
| Int **getPdcRealData** (pdcDataFrame\* rd,int32\_t pseudoPdcId)  | This API will find particular PDC using pseudoPdcId and sends all the Real time data from the associated PDC.On success this API will return 0On failure this API will return 1 |
| Int **getPmuRealData** (pmuDataFrame\* rd,PmuStatus\* status,int32\_t pseudoPdcId,int32\_t pmuIndex)  | This API will find particular PMU using pseudoPdcId and sends all the Real time data from the associated PMU/PDC.On success this API will return 0On failure this API will return 1 |
| int   **stopDataStream** (int32\_t pseudoPdcId)  | The stopDataStream API will find the StrongridIEEEC37118Client object using the pseudoPdcId and send the STOP\_DATA\_FRAME command to the associated PMU/PDC On success this API will return 0On failure this API will return 1  |
| int   **disconnectPdc** (int32\_t pseudoPdcId) | The disconnectPdc API will find the StrongridIEEEC37118Client object using the pseudoPdcId and closes the connection and free the StrongridIEEEC37118Client object.On success this API will return 0On failure this API will return 1 |
| int **dllshutdown** () | The int dllshutdown API shut down the Strongrid IEEE C37.118 DLL. |



### Labview compatability functions

Note that all char\* arrays must be 256 bytes, or longer

| **Method** | **Description** |
| --- | --- |
| Int **getPmuConfigurationLabview** (noArraysPmuConfig\* pmuconf, char\* stationName,int32\_t pseudoPdcId,int32\_t pmuIndex)  | The getPmuConfigurationLabview API will find particular PMU related to the pseudoPdcId and pmuIndex given and sends all the configuration 2 frame details related to current PMU.Note ! Only used together with LabView application.On success this API will return 0On failure this API will return 1 |
| Int **getPhasorConfigLabview** (noArraysPhasorConfig \*phasorCfg,char\* name,int32\_t pseudoPdcId,int32\_t pmuIndex,int32\_t phasorIndex)  | The getPhasorConfigLabview API will find the StrongridIEEEC37118Client object using the pseudoPdcId and gets the Configuration 2 frame phasor configuration of the associated PDC/PMU. From the Configuration Frame it will get the configuration of the PMU using the pmuIndex, and by using the phasorIndex it will get the particular phasorConfig.Note ! Only used together with LabView application.On success this API will return 0 On failure this API will return 1. |
| Int **getAnalogConfigLabview** (noArraysAnalogConfig \*analogCfg,char\* name,int32\_t pseudoPdcId,int32\_t pmuIndex,int32\_t analogIndex)  | The getAnalogConfigLabview API will find the StrongridIEEEC37118Client object using the pseudoPdcId and gets the Configuration 2 frame analog value configuration of the associated PDC/PMU. From the Configuration Frame it will get the configuration of the PMU using the pmuIndex, and by using the analogIndex it will get the particular analogConfig.Note ! Only used together with LabView application.On success this API will return 0 On failure this API will return 1. |
| Int **getDigitalConfigLabview** (noArraysDigitalConfig\* digitalCfg,char\* name,int32\_t pseudoPdcId,int32\_t pmuIndex,int32\_t digitalIndex)  | The getDigitalConfigLabview API will find the StrongridIEEEC37118Client object using the pseudoPdcId and gets the Configuration 2 frame digital value configuration of the associated PDC/PMU. From the Configuration Frame it will get the configuration of the PMU using the pmuIndex, and by using the digitalIndex it will get the particular digitalConfig.Note ! Only used together with LabView application.On success this API will return 0 .On failure this API will return 1.  |
| Int **getPmuRealDataLabview** (noArraysPmuDataFrame\* rd, PmuStatus\* status,uint16\_t PhasorArrayLength, float\* phasorValueReal, float\* phasorValueImaginary,uint16\_t AnalogArrayLength, float\* analogValueArruint16\_t DigitalArrayLength,uint8\_t\* digitalValueArr,int32\_t pseudoPdcId,int32\_t pmuIndex)  | This API will find particular PMU using pseudoPdcId and sends all the Real time data from the associated PMU/PDC. Note ! Only used together with LabView application.On success this API will return 0On failure this API will return 1 |

## Strongrid IEEE C37.118 DLL type definitions and data structures

| **Type definition** | **Description** |
| --- | --- |
| typedef signedchar        int8\_t;typedef short                 int16\_t;typedef int                int32\_t;typedef long long         int64\_t;typedef unsigned char        uint8\_t;typedef unsigned short         uint16\_t;typedef unsigned int         uint32\_t;typedef unsigned long long uint64\_t;  | Type definitions used in Strongrid IEEE C37.118 DLL. |

| **Data structure** | **Description** |
| --- | --- |
| typedef struct { int32\_t LeapSecCorrection;         bool LeapSecPending;         bool ClockIsReliable;        float ClockErrorSec;} TimeStatus  | The TimeStatus data structure contains variables related to the quality of the data frame time stamp.  +1 for 1 second added, and -1 for subtract. 0 means no changeEarly warning of pending leap second |
| typedef struct {        int16\_t Year;        int16\_t Month;        int16\_t Day;        int16\_t Hour;        int16\_t Minute;        int16\_t Second;        int16\_t Ms;} ParsedTimestamp;  | The ParsedTimestamp data structure contains variables related to the data frame time stamp.  |
| typedef struct {        TimeStatus TimeQuality;        ParsedTimestamp Timestamp;        double SecondOfCentury;        float FramesPerSecond;        int numberOfPMUs;}pdcConfiguration;  | The pdcConfiguration data structure contains variables related to the PDC configuration.  |
| typedef struct{                int32\_t pmuid;        char\* stationname;        float nominalFrequency;        int32\_t numberOfPhasors;        int32\_t numberOfAnalog;        int32\_t numberOfDigital;}pmuConfig;  | The pdcConfiguration data structure contains variables related to the PMU configuration received in CFG-2 configuration frames, which are part of the IEEE Std C37.118-2005 protocol.  |
| typedef struct{                int32\_t pmuid;        float nominalFrequency;        int32\_t numberOfPhasors;        int32\_t numberOfAnalog;        int32\_t numberOfDigital;}noArraysPmuConfig;  | The noArraysPmuConfig data structure contains variables related to the PMU configuration received in CFG-2 configuration frames, which are part of the IEEE Std C37.118-2005 protocol.  |
| typedef struct{                int32\_t pmuid;        char\* stationname;        float nominalFrequency;        int32\_t numberOfPhasors;        int32\_t numberOfAnalog;        int32\_t numberOfDigital;        float POS\_LAT;        float POS\_LON;        float POS\_ELEV;        uint8\_t SVC\_CLASS;        int32\_t PhasorMeasurementWindow;        int32\_t PhasorMeasurementGroupDelayMs;        char globalPmuId[16];}pmuConfig\_Ver3;  | The pdcConfiguration data structure contains variables related to the PMU configuration received in CFG-3 configuration frames, which are part of the IEEE Std C37.118-2011 protocol.  |
| typedef struct PmuStatus{        uint8\_t dataErrorCode;            bool pmuSyncFlag;        bool pmuDataSortingFlag;        bool pmuTriggerFlag;        bool configChangeFlag;        bool dataModifiedFlag;        uint8\_t timeQualityCode;        uint8\_t unlockTimeCode;            uint8\_t triggerReasonCode;        }; | The PmuStatus data structure contains quality variables related to the received data frames.  Data error:        - 0 = good measurement data - no errors        - 1 = PMU error. No information about data        - 2 = PMU in test mode         - 3 = PMU error (no not use values) PMU in sync with a UTC tracable time source Data sorting - true=sort by timestamp / false=sort by arrival PMU trigger detected  Configuration change detected Data modified - true=modified by post processing / false=not PMU time quality (TODO) Unlocked time:        - 0 = sync locked or unlocked &lt; 10 s (best quality)        - 1 = 10 s &lt;= unlocked time &lt; 100 s        - 2 = 100s &lt; unlock time &lt;= 1000s        - 3 = unlocked time &gt; 1000s Trigger reason        - 0 = manual        - 1 = magnitude low        - 2 = magnitude high        - 3 = Phase angle diff        - 4 = Frequency high or low        - 5 = df/dt High        - 6 = &lt;reserved&gt;        - 7 = Digital  |
| typedef struct {                TimeStatus TimeQuality;        ParsedTimestamp Timestamp;        double SecondOfCentury;        int NumPmuInDataFrame;}pdcDataFrame ; | The pdcDataFrame data structure contains variables related to the PDC part of received data frames.  |
| typedef struct {                PmuStatus        status;        float                frequency;        float                deltaFrequency;        uint16\_t                PhasorArrayLength;        float\*                phasorValueReal;        float\*                phasorValueImaginary;        uint16\_t                AnalogArrayLength;        float\*                analogValueArr;        uint16\_t                DigitalArrayLength;        bool\*                digitalValueArr;}pmuDataFrame ;  | The pmuDataFrame data structure contains variables related to the PMU part of received data frames.  |
| typedef struct {        char\*                name;          uint8\_t                type;         uint8\_t                format;        bool                dataIsScaled;        float                scalar;}phasorConfig; | The phasorConfig data structure contains variables related to the phasor configuration received in CFG-2 configuration frames, which are part of the IEEE Std C37.118-2005 protocol. INPUT ARRAY MUST BE &gt;= 256 in length 0 == voltage, 1 == current 0 = rectangular, 1 = polar,  NOTE: currently this version is always in &#39;rectangular&#39; True if scaled - false if not  |
| typedef struct {char\* name;          uint8\_t                type;         uint8\_t                format;         bool                dataIsScaled;                float                scaling\_magnitude;        float                scaling\_angleOffset;}phasorConfig\_Ver3; | The phasorConfig\_Ver3 data structure contains variables related to the phasor configuration received in CFG-3 configuration frames, which are part of the IEEE Std C37.118-2011 protocol. INPUT ARRAY MUST BE &gt;= 256 in length 0 == voltage, 1 == current        0 = rectangular, 1 = polar, NOTE: currently this version is always in &#39;rectangular&#39; True if scaled - false if not  |
| typedef struct {                char\*                name;        int Type;             bool                dataIsScaled;          float                userdefined\_scalar;}analogConfig; | The analogConfig data structure contains variables related to the analog value configuration received in CFG-2 configuration frames, which are part of the IEEE Std C37.118-2005 protocol.INPUT ARRAY MUST BE &gt;= 256 in lengthType of analog value measurement :        0 = Single point on wave        1 = RMS of analog input        2 = peak of analog input        5-64 = reserved Scaling information : True if already scaled - false if not |
| typedef struct {                char\*                name;          bool                dataIsScaled;          float                scaling\_magnitude;        float                scaling\_offset;}analogConfig\_Ver3; | The analogConfig data structure contains variables related to the analog value configuration received in CFG-3 configuration frames, which are part of the IEEE Std C37.118-2011 protocol.INPUT ARRAY MUST BE &gt;= 256 in length         Scaling information : True if already scaled - false if not |
| typedef struct {        char\*                name;        bool                normalBit;         bool  isValidBit;  }digitalConfig; | The analogConfig data structure contains variables related to the analog value configuration received in CFG-3 configuration frames, which are part of the IEEE Std C37.118-2011 protocol.INPUT ARRAY MUST BE &gt;= 256 in length         &quot;Normal&quot; state of bit Bit is valid |

## Flow charts

### Representing one thread per PMU/PDC
![Flowchart 1](/docs/img/Flowchart-1.png)

### Representing the thread pool with read Queue
![Flowchart 1](/docs/img/Flowchart-2.png)
