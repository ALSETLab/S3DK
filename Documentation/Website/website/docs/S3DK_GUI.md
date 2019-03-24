

![](https://lh3.googleusercontent.com/cTcOu92qvTwgK41ILlcahom1KgGiIZJAw9NgO4USl05Oz_AI7ot-tjnm0uW6cAlgC-4ehmwmJ7oPkgLdbi9hqCO6sFz7Ex3HnF2e2-RJHFy2anvEJ9w5ztKxqvHAdaAyoh4B8k-J)

This VI shows the data being outputted by a PMU. The VI has visual indicators for the values of phasor data as well as CPU usage.

![](https://lh3.googleusercontent.com/OtFsIzn0pC7n3G2NFnTJhkAO-t2060IZp51bN4H3xCmomHRk0Sm7NXFS4ApbetA_SmGipE3jbHrXIhKMB-hQOdPbDSC9zawEz6aejCzDhRdAYRiWVWwSGYJmUWfBmZScZW7tK6rn)

-   Buttons:
    

-   Startup: Creates initial connection to the PMU, automatically connects if data is being streamed on local connection.
    
-   Abort: Ends connection to the streaming connection
    
-   Pause: Pauses the data stream.
    
-   Shutdown: Stops the GUI entirely
    
-   Restart: Restarts the connection
    
-   Configuration: Allows for set up of a PMU server such as setting IP and port numbers.
    
-   Quit: Stops data collection and exits the program
    

![](https://lh5.googleusercontent.com/OT8gF6aDx6JmYOm5cgSz1kzFZgbmEppordMgz3spOcNk3SFbz0ABt7STYCIK6Kb6t1reALICSsZd56iAk08qaLTg1atLWIMTOfbjAaiiAPI7czitUpF6rOa0N83KhA9rmejUCy91)

  

|1|Data Rate|The number of data frames received per second
|--|--|--|
|2|Software Activity|Indicates the current operations, if any. Ready otherwise.
|3|Time Stamp|The time stamp of the latest received data frame.|
|4|Access Buffer Write Rate|Indicates how much time the software spends on writing data to the access buffer.|
|5|Bad dt Counter|Indicates how much time the software spends on writing data to the access buffer.|
|6|Data quality Indicator|Shows the percentage of missing data. The maximum value of the indicator is 50%.|
|7|Data frame Processing Rate|Indicates the amount of time that the software spends on processing data frames. 0 means no data is coming and hence that the data stream has stopped. 100 means data processing is continuous, and hence that there is an incoming data overload.|
|8|Channel Selector|Open/close the Channel Selector window|
|9|Raw Data Indicator|Open/close the raw data display|
|10|Status Indicators|Indicates the status of the connection and of the software. Hold the mouse pointer over the different lights to see what they mean.|

  
  

![](https://lh6.googleusercontent.com/yv698n4ztykVmk0wqmKkIvMUfTPj26MwFDR2baaZF6mq2r7OSg3EeNznyHHgR1mVo-mpV53k4inzx8mh3T6VSxscfSnR2XeA8QqpUscC383lrBIbDkulIQDfAreIZaivXyVeZyZt)

Indicators from top to bottom:

1.  Initialize
    
2.  Autostart
    
3.  Bad Data Removal
    
4.  Access Buffer Active
    
5.  Queue Active
    
6.  Manual Control
    
7.  PDC connection initialization
    
8.  PDC connected
    
9.  Configuration File recieved
    
10.  Configuration File Timeout
    
11.  Configuration File Read
    
12.  PDC connected
    
13.  Shutdown
    

  

The main window is depicted above. Press "run" (the arrow to the upper left) to start the PRL, which will now look like this:

Press the Config button to open the Configuration Window.

The Connection tab always shows first. Enter the IP-address, Port and PDCID of the connection, and press OK.

Now press Startup to activate the connection. The PRL will retry the connection until it comes alive. If it does not work, press Abort to cancel or press Quit directly.

NOTE: If the IP-address and/or the port is invalid, this will cause Labview to hang for a while. Problem is solved by waiting a bit, or restart.

If there is a problem with the connection, use the PMU Connection tester to verify that the connection settings are correct. The signals should arrive fine there before you try to connect with the PRL.

When the connection is active, the Pause and Shutdown buttons are activated and the indicators will show activity. This means data is available and can be retrieved from the Access Buffer.

Hold the mouse pointer over the different indicators and buttons to see what they do, if this is unclear, or look at the detailed description below.

Press Shutdown to stop the data stream and Quit to exit the application.

  

  

  

![](https://lh5.googleusercontent.com/J8naw44H_JjQTWRRQbPefDZJb0usJvXN1vRb1s389fadD0NmgKer-MMP4PuKkWomTI-toeDWuZ_neR4GAa-HYIbV4dXOKYaUKRdsegC2XG108aib71UNkANsJXIksmhI2B4puWzF)

| 1 | Incoming Data | Blinks when data is received |
| -- | -- | -- | 
| 2 | Data to Buffer |Blinks when data is transferred from live buffer to access buffer |
| 3 | System Activity | System Activity |
| 4 | System Exit | System Exit |
| 5 | Processing|Processing
| 6 | Data Lost|Data lost on the way to the access buffer|
| 7|Data Received|Data received in the access buffer

  

# Configuration

## Connection

![](https://lh6.googleusercontent.com/s3ga2qAAVJgfQxokm5NWcJZ6b_5_vkl4D2FYU_UditInPNoocpiifjYGLH1AvrSDe3vfzyOmK9Qc5J-pdzp7mwBuQczky4uGVZ7PLvokRFMd9lLHNJjEc8SfKP96Qqxjhn5EB5bO)

Connection Settings contain the IP-address, Port and PDC ID of the PMU/PDC. These are the same as would be set in the PMU Connection Tester.

The Autostart feature determines whether the connection will be made automatically on software startup (this means that when calling the PRL remotely, it is sufficient to send the "Run" command. The "Startup" command automatically follows).

## Buffer and Queue

![](https://lh6.googleusercontent.com/75ivepBdEqF675FDY2wEBP_Y9w0bRFSywe4IboH3o0kEh5DfXbnrtfcbK9SU209QFFLTnzJP0M8YTL_pUdGb-VYOgojO83ztIg3d8ohG_eCNnU8d4gmEZ3IINHNd5XlyL9Sy8Ll_)

  

The Live Data Buffer  Size sets the number of data frames that will be read from the incoming data before the data is passed on to the Access Buffer and/or the output queue. This may be set to 1, which means the data will go directly to the buffer/queue. Using values above 1 may however prove appropriate for data efficiency purposes. The size of this buffer will determine the maximum usable refresh rate when reading data from the Access Buffer.

Access Buffer Size determines the amount of data made available to the client application.

Queue Active and Access Buffer Active switches off/on the respective data streams.

Data Points indicates the actual amount of data frames contained in the Access Buffer, and the LED to the right indicates whether the combination Live Data Buffer Size, Access Buffer Size and PMU/PDC data rate gives an integer amount of data points. In other words it indicates if the length of the data buffer, in time, is in fact the length stated in Access Buffer Size.

## Bad Data

![](https://lh3.googleusercontent.com/_uz32ig5_MfzOHkKlDAfS-adBZU9RuROAiPjyRAygzotrW1xWujfUTnaBJA6j_mV5MmhPrirf3ltAaV5zcieFQ9tt5kS-_zyJGJETOrblhX9nokJpxoaLhDi3OkB8YIde9HNPAXL)

When a signal is missing, the phasors coming from a PMU is typically 0, but may also be 1. Sometimes the signal is maxed out. The same goes for the analog frequency signal. When the signal is missing, it might give an output of 50 Hz flat instead of 0 Hz. It is therefore difficult to determine if the signal is valid based on limits. Instead the software is set to compare succeeding data points, and if enough of them are equal the signal is treated as invalid, and the data is replaced with NaN's until the values come alive.

A certain type of PMU’s gave some problems with this solution. Since the resolution of the signal was quite low, steps were visible when looking closely at the signal. This resulted in the software somtimes producing invalid frequency signals—even when the number of allowed data points was set to 50.

When setting these values, care should therefore be taken with the frequency signal. Make sure the signal is floating or set the number of allowed data points high.

dt Toleranceis the accepted slide in time between two data frames. The GPS clocks that PMUs use to synchronize has an accuracy of one microsecond. The default ten microseconds is therefore a good start.

## Advanced

![](https://lh6.googleusercontent.com/s9AMgAYeiY3xLLZtixYLzW2bermw9ri7g6OzNjCBKVr5nYRYMlFYaskzfIzWntY0qzXQ_1L4-ix9lD3UqnBDEcODpwhyZx3B9vIJy5WuqeqJ8YP-hdKm6axx-oJpxdzQVQnyAcBk)

Wait for Config Timeout decides for how long the software should wait for the PDC/PMU to supply a configuration file, and Seconds to Try is the time it will continue to look for the configuration file. If no configuration is received, Seconds to Wait if Config Fails determines how long the software will wait before retrying.

Max Time Stamp Age Before Reconnect is the the maximum allowed lag of the incoming PMU-data to the system clock of the computer running the PRL. The background for this is that if the PDC restarts, the PRL wil not automatically continue reading the data stream. Instead it requires a new connection.

Poll New Data Timeout is how long each check for a newly arrived data frame waits. This number affects the Data Frame Processing Rate.

Data Rate History is the number of data points used to determine how busy the software is (Data Frame Processing Rate). The timeout in the procedure waiting for new data to arrive is 5 ms. If more than 5 ms passes before the software receives new data, this counts as a no data period. The history of data/no data gives a percentage of time used on processing data, and a low value will mean the data stream has stopped, while a high value will mean too much processing power is used on processing data. This may also indicate that the computer is overloaded with other tasks.

If the Data Frame Processing Rate peaks at 100, this means all power is used on processing data and it indicates that data may be piling up in the DLL buffer and that there is a risk of eventually loosing data. If this happens, it could for example indicate that the Client is using too much resources on processing. The Data Frame Processing Rate is not the same as CPU Usage. It is an artificial, yet good, indicator of how stressed the PRL is. A good number is 30 to 60.
