Using the PMU Template the Oscillation Monitoring implements the template VIs in different loops, to process commands and data.

  

Event Handling Loop: This loop is responsible for controlling User input, when the user presses a button the loop will respond to that input.

-   Timeout-If the user waits to long the program will timeout and send a error to the error handling loop, stopping the stream.
    
-   Reset PSDs - resets the data output for the PSD display
    
-   Start- Start the data stream to the VI
    
-   Setting-Allows the user to update the settings for the data stream
    
-   Stop-stops the data stream
    
-   Panel Close-Starts the quit protocol the end the application
    
-   Application instance close- Doesn’t stop or effect the VI
    
-   Exit-Runs the exit protocol to close the application
    
-   PRL Visible- A checkbox to bring up the PRL display
    
-   Data Selector- Changes the channel at which the data is being collected from, if the front panel is not open, no change. If there is then the displays are updated
    
-   <User Event>- a unique user event not described above
    

UI Message Loop: The UI Message outputs the necessary information for each function.

-   Initialize-Get configuration settings, then message the UI to initialize, and broadcast the settings to the other message loops.
    
-   Init Ui Ref-Store control references for UI controls. Also enable/disable controls appropriately.
    
-   Update Status-Convert the message data to a string to display in the Status indicator.
    
-   Update Status(Acq)-Duplicate this frame when creating new messages. Change this comment in the duplicated frame to describe this message.
    
-   Reset PSDs
    
-   Start-Enable/Disable buttons appropriately for an acquisition that has started, and update status display.
    
-   Stop-Enable/Disable buttons appropriately for an acquisition that has stopped, and update status display.
    
-   Acquisition Stop-Logic for determining what action to take when the acquisition has stopped.
    
-   Logging Stop-Logic for determining what action to take when the logging has stopped.
    
-   Launch Setting Dialog-Launch the Settings Dialog when the user clicks the 'Settings' button.
    
-   Error-Display an error dialog. This message is sent by the "Error Handler" VIs at the end of other loops in this application.
    
-   Confirm Quit-Message that can confirm whether or not the user wants to exit the application.
    
-   Exit-Send Exit messages to the Acquisition and Logging loops, and fire the user event to stop the Event Handling Loop.
    
-   Copy this Frame
    
-   Default-'Default' case only runs if there is a message that isn't defined in any of the other cases. Output a programming error.
    

Acquisition: The primary loop that focuses on handling the data stream

-   Initialize-is currently a no-op. The hardware initialization takes place in the 'Start' message.
    
-   Start-Configure and start the acquisition.
    
-   Acquire-Acquire data from the hardware. Since this is a continuous acquisition, this message will always message itself to run again. From S3DK or CSV
    
-   Stop-stop the Acquisition.
    
-   Read settings
    
-   Update settings-New settings are available, update the current ones stored in the shift register with the settings sent as part of the message
    
-   Toggle online-Duplicate this frame when creating new messages. Change this comment in the duplicated frame to describe this message.
    
-   Exit-sends exit message to the UI message Handler
    
-   Copy this Frame
    
-   Default-'Default' case only runs if there is a message that isn't defined in any of the other cases. Output a programming error.
    

Logging:

-   Initialize-gets called when first launched. Currently a no-op.
    
-   Start-Send the "Log" message to start logging. Generate a unique, timestamped TDMS file name based on the Log File Base Path value.
    
-   Log- Log data to disk. Since this is a continuous acquisition, this message will always message itself to run again.
    
-   Read settings
    
-   Update settings-New settings are available, update the current ones stored in the shift register with the settings sent as part of the message.
    
-   Exit-Send the Exit message to the UI Message Handler. Call 'Flush Data to Log File.vi' so any pending data is not lost.
    
-   Flush
    

Algorithm:

-   Initialize - gets called when first launched. Currently a no-op.
    
-   Start- Send the "Log" message to start logging. Generate a unique, timestamped TDMS file name based on the Log File Base Path value.
    
-   Process-
    
-   Stop-Flush the message queue of any pending "Log" messages. Call 'Flush Data to Log File.vi' so any pending data is not lost.
    
-   Read settings
    
-   Update settings- New settings are available, update the current ones stored in the shift register
    
-   Update Filters-Update filter settings
    
-   Exit-Send the Exit message to the UI Message Handler. Call 'Flush Data to Log File.vi' so any pending data is not lost.
    

Data Display:

-   Display 1: Outputs 4 clusters that represent energy levels of the four frequency categories
    

Display 2: Outputs the graphs for each frequency.

