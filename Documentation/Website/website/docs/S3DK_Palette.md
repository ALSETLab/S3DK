
## S3DK  in Labview
The Smart Grid Synchrophasor Software Development ToolKit is broken down in the in different folders in labview. There are two different types of VIs utilized by the S3DK, there are the VIs open to the user under the block window function selector and VIs that are set for communication between the VIs and outside applications. The VIs not in the function menu such as programs that use DLL can be accessed by going into the function palette VIs. 
### Breakdown of function VIs
There are 6 different folders under the function menu, which include:
 Templates, [Examples](https://alsetlab.github.io/S3DK/docs/PDC_Reader.html), [Time](https://alsetlab.github.io/S3DK/docs/Time_Stamp_to_iso_8601_with_Millieseconds.html), [Write](https://alsetlab.github.io/S3DK/docs/TDMS_VIs.html), [Buffer and Queues](https://alsetlab.github.io/S3DK/docs/Buffer_Queue.html), and [Utilities](https://alsetlab.github.io/S3DK/docs/S3DK_Utilities_VI_Overview.html)
* Template options have a basic loop VI mirroring the structure used by most S3DK VIs
* Examples have an applications of multiple VIs under the S3DK being used for a general purpose
* Time is a single VI that converts time units
* Write holds VIs that write to Technical Data Management (TDM) files and also data log files
* Buffer and Queue folder holds a PRL VIs that can handle initialization of connection and data flow
* Utilities has the majority of VIs that can be used to handle and utilize data input and output.
