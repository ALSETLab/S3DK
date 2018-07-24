

![](https://lh6.googleusercontent.com/UcDAhMJhZPkSOwX4_bBvSmB6RX0bnkARPlA-_GcPvL5ViK7Q8J4aSWi38NuKB1CJrm9YHckcdHBVqqqDNMYO3hFGy1V-vGAr3FKfNGhHFfQFemOWZVLsmIwLFQr6oaAsM4sBaoAw)

11 DAQ Config (continuous) uses NI DAQmx VI’s to acquire analog input voltage measurements. The Front Panel shows the error in, error out, and the tasks in and out. Note that in 00 Main, 11 DAQ Config (continuous) will constantly find input values, then wait.

  
![](https://lh4.googleusercontent.com/s6MeLlWL6ElbhEKULgPQoFJd3lYd_WVlPsMmvP_pR4o5VI8ROKV3HQ_dcV5-osCaT5Zje7hqHPa60dYjecW6LPc_08Puwx2XzKb9bozQ-5F4M32DTSw3PXli_dOLKZojdzApl116)

**ATTENTION:** To use the DAQmx, you will need to download the driver from: [http://www.ni.com/nisearch/app/main/p/bot/no/ap/tech/lang/en/pg/1/sn/catnav:du,n8:3478.41.181.5495,ssnav:ndr/](http://www.ni.com/nisearch/app/main/p/bot/no/ap/tech/lang/en/pg/1/sn/catnav:du,n8:3478.41.181.5495,ssnav:ndr/)

  

**ATTENTION:** All inputs discussed below are subjective to your set up, and may need to be changed.

  

The VI starts by receiving any errors in, then sends the errors to the National Instruments VI DAQmx Create Task. A task is used to tell the DAQmx to be ready to acquire or generate data. ATTENTION: To use the DAQmx, you will need to download the drivers from: [http://www.ni.com/nisearch/app/main/p/bot/no/ap/tech/lang/en/pg/1/sn/catnav:du,n8:3478.41.181.5495,ssnav:ndr/](http://www.ni.com/nisearch/app/main/p/bot/no/ap/tech/lang/en/pg/1/sn/catnav:du,n8:3478.41.181.5495,ssnav:ndr/) Once the task is established, the DAQmx takes an Analog Input Voltage for Voltage_0 through Voltage_2 using the VI DAWmx Create Channel (AI-Voltage-Basic). ATTENTION: All inputs discussed below are subjective to your set up, and may need to be changed. Several inputs can be set by the user :

-   Input terminal Configuration: This specifies what your measurement will be compared to. There are several different modes.
    
-   Minimum Value/ Maximum Value: Your expectation of the min/max values of your measurement.
    
-   Physical Channel: This specifies the physical channel that lets you create a virtual channel for data.
    
-   Name to Assign: Names the virtual channel.
    
-   Custom Scale Name: Enables the user to use a custom scale. If you want to use this, you must set the Units to From Custom Scale.
    

The process is repeated for each voltage. Once complete, the VI DAQmx Timing (Sample Clock) is called. Sample Clock sets the number of samples, the type of sampling, the rate of sampling, and source of the clock. Any errors are passed through the entire VI. Once complete, any errors and the task are sent to the Front Panel as output.
