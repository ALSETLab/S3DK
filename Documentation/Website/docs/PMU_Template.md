
The "Template PMU App" is a template project for developing PMU based on the S3DK. You need to have installed S3DK in your tabview for it to work properly. As described here [https://github.com/MaximeBaudette/Template-PMU-App](https://github.com/MaximeBaudette/Template-PMU-App)

it implements the following functionalities:

  

1- Automated PMU data acquisition through the S3DK

2- Configurable PMU data buffering for parallel algorithms

3- User settings management

4- User configurable error handling

  

The PMU Template automatically searches for data files or DAQ devices, the two different general forms of the acquisition process is either CSV or S3DK methods. The S3DK is more general while CSV unbundle and breakdown the values of the CSV files. Most implementations from the Template PMU will have CSV settings or methods to interact with CSV files,

1.  Acquire:
    

	1.  This step setups where the data will come from and how will labview interpret that data. The first part is the state, which determines where the data will come, the different options are idle, idle S3dk, acquiring S3DK, idle CSV, acquiring CSV. Idle represents that the data is currently not transmitting, while acquiring means collecting from hardware.
    
	2.  Settings determine what the program is for, normally this is set for acquisition as at this step data is being transmitted.
    
	3.  Signals represent the data coming in
    
	4.  CSV section determines which part of the CSV data structure we will put the data in and the length of the value. EOF means end of file.
    
	5.  Mode section breakdowns into the type of time that is being transmitted, how the information will be separated, and where the data will be going
    

2.  Configure:
    

	1.  This VI is used to configure and store settings for the application.
    

3.  Error Handler:
    

	1.  In the template, the user can either ignore errors entriley depending on the error or have the standard error prompt, if the user allows it.
    
	2.  The error handling ignores errors in two ways, either static or dynamic. The Ignore Errors (Static List) array constant should contain ignore errors that are defined at edit time. The Ignore Errors (Runtime) array can be dynamically generated at runtime
    

4.  Initialize:
    

	1.  The initialize setup is made to start any hardware reference needed for the application and startup the PRL.
    
	2.  If a connection is not set than the application times out
    

5.  Shutdown:
    

	1.  As the name implies, runs a close and shutdown operation for the end of the data.
    

6.  Stop:
    

	1.  As the name implies, runs a stop operation for the pause of the data input by closing any references to the hardware connected through the initialize VI.
