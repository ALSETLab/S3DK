![](https://lh5.googleusercontent.com/KF1Q5AKiVYpQ-SjRikTJQhmg2UDyPjn7iQ12Zyv1n25Qku0iGvRi5Oyefcv4LguFoMa0ZIUuKBt6YvHOPTm2dohsX9eDRC_pxpMT5wldqApQj1UU9Cr6luR2tMT9XaQHv9XmSSge)
The VI 10 DAQ Config (PFI0) is used to find analog voltage inputs. The entire VI performs specific actions to acquire and record the voltages. After doing so once, only the task out and any error outs are sent to the Front Panel via the use of First Time boolean case structures. 
![](https://lh6.googleusercontent.com/ckQMMQIBblkxx1x84Z1YFRbTsyQ_7DW8rH4bYY9dDC39yLY-bWc063mV2_r9FzX4ZBQEwok4yGlss3yM8-GaKQaRojss27AQIjB_E71whip9bKXhglu4SmyZc_BpgcwP6pVRN35c)
ATTENTION: All inputs discussed below are subjective to your set up, and will need to be changed based on your project
  

10 DAQ Config (PFI0) starts by taking any error in from the Front Panel. The first while loop consists of getting the initial task out and error out. Because of a “First Time” only boolean case, the “True” state is only called once, which sets the task out. For any repeat after the First time, the same Task and Error Out are returned. Once the task and error out arrive at the second case structure, a similar process occurs. If it is not the first iteration of the case structure, the error and task are sent through. However, on the first iteration, a voltage will be read by DAQmx Create Channel (TEDS-AI-Voltage-Basic). Either an AI voltage or a TEDS AI Voltage based on the boolean variable determines which voltage will be read. ATTENTION: All inputs discussed below are subjective to your set up, and may need to be changed. Several inputs can be set by the user :

-   Input terminal Configuration: This specifies what your measurement will be compared to. There are several different configuration modes.
    
-   Minimum Value/ Maximum Value: Your expectation of the min/max values of your measurement.
    
-   Physical Channel: This specifies the physical channel that lets you create a virtual channel for data.
    
-   Name to Assign: Names the virtual channel.
    
-   Custom Scale Name: Enables the user to use a custom scale. If you want to use this, you must set the Units to From Custom Scale.
   
   Once complete, the task out and error out are sent forward.

![](https://lh5.googleusercontent.com/Zc40hB0PHt9lVilcsZOZZm9JO1Bc5vKVGTm8AwLA4KxsvHXnivZs1N6BfhMyZHNisj_Q7YmTL_zZrp0PLQm9l5xo4aThlrDgGT3g3izHq6YGjb0KnOkWkgwMWU0F67pymnQq_1bY)

The second portion of 10 DAQ Config (PFI0) uses the VI DAQmx Timing (Sample Clock) to set all timing needs. DAQmx Timing sets the number of samples, the type of sampling, the rate of sampling, and source of the clock, all based on inputs sent from the user. Once the sampling clock has been configured, the DAQmx begins taking data through the next VI, DAQmx Start Trigger (Digital Edge). Source is input from the user that “specifies the name of a terminal where there is a digital signal to use as the source of the trigger.”

  
  
  
  **![](https://lh5.googleusercontent.com/4YpASsvwHQDz7dGYt2R4mq0M-CjEmvjBaNv6usyq-3NSC020sfMuBUxX9RFr-yXMjpAw7I-tL57RFnRdmzaY67IIMoN29OfMlu4y9x2V32wccbBeFEu1zm-0zS-ZdkpE7i-1gqqZ)**
  
  

The last portion of 10 DAQ config (PFI0) uses the VI DAQmx Control Task to set the hardware to perform the task at hand, used through the input “commit.” This input can be set by the user. Once complete, any errors and the task out are handed to the Front Panel as output.

