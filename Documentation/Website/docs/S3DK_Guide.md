

## Overview of the S3DK Toolbox:

This software package is a grouping of VI that can be used to handle streams of data from a PMU/PDC connection. In the package there are pre-built examples of the combination of simply VI such as the ones in the examples folder, documentation can be found [here](https://alsetlab.github.io/S3DK/docs/PDC_Reader.html), as well as simple VIs that can be used for data handling. The [simple VI](https://alsetlab.github.io/S3DK/docs/Get_Real_PMU_Data.html) are broken down by function:

-   Time
    
-   PRL Connection:
    

	-   Buffer and Queue Folder
    
	-   Documentation under Buffer and Queue
    
	-   VIs that can be used to test the status of the PRL as well as handles communication between PRL and Labview
    
	-   Examples VI: [PRL PMU status](https://alsetlab.github.io/S3DK/docs/PRL_PMU_Status.html)
    

-   Writing:
    

	-  	 Write Folder
    
	-   Documentation under TDMS Application
    
	-   Vis that are used to log data from a PMU/PDC, most VIs are built to incorporate the use of TDMS files
    
	-   Examples VI: [Write to TDMS File](https://alsetlab.github.io/S3DK/docs/Write_to_TDMS.html)
    

-   Data managing:
    

	-   Can be broken down into math functions, signal parsing, 	and queue status
    
	-   Utilities folder
    
	-   Documentation under S3DK Utilities VIs
    
	-   This is the bulk of S3DK, most VIs in this folder are needed to create more in depth examples.
    
	-   Examples Math: [Calculate angle and amplitude](https://alsetlab.github.io/S3DK/docs/Calculate_Angle_and_Amplitude.html)
    
	-   Examples Signal: [PRL Waveform create](https://alsetlab.github.io/S3DK/docs/PRL_Create_Waveform_Signal_by_Interpolation.html)
    
	-   Examples Queue: [PRL Queue Reader](https://alsetlab.github.io/S3DK/docs/PRL_Queue_Reader.html)
    

The documentation tab in the top left gives the documentation on the VIs in the toolkit. It is broken down into S3DK Utilities VIs, STRONGgrid DLL VI, Buffer and Queue, and TDMS Application. Which matches the folder layout in the toolkit LABview viewer.

## Basic:

For initial testing of a connection for PMU/PDC  S3DK [GUI](https://alsetlab.github.io/S3DK/docs/S3DK_GUI.html) in the [Buffer and Queue](https://alsetlab.github.io/S3DK/docs/PRL_Reader_Buffer.html) folder will show if data is being streamed and the values that are being sent. When troubleshooting for any issues while using the toolkit the GUI is a good starting point to see if there is a problem with the connection.

VIs in the template folder are blank starting point for Vi construction that will have similar structure to VI in S3DK that separate input, intermediate, and output.

## Advanced:

When starting to build a VI, looking at the integrated examples for understanding the initial connection process, for example, Starting Simple Frequency Reader uses the PRL Remote VI to initialize the connection process while using while loops and action commands to change the process PRL Remote will do. Looking at PDC Reader VI, this VI also uses PRL Remote but has a different layout and organizes data different using buffer VI. To gain an understanding of how to use S3DK VIs for large projects finding an Example VI that matches the purpose and altering the structure would be a good start.
