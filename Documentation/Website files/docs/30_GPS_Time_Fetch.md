
**![](https://lh3.googleusercontent.com/x2dlCus6wzzSBjsW2FR2is_IATjLJQlpdazCa6vDgOAx7oXKyDoAc-qbcLn8XFTANlM5yqgu0ceb1WQSWQ4elM49rCSgqxpwg70j-M4QMXk-n94kxt_vBQHUSx6dbF_FlWNdskT3)**
30 GPS Time Fetch is used to find the time in order to create a time synchronous system. The image above shows the Front Panel. The GPS Time, Date, and Time Error are outputted, along with the CPU Time Error.![](https://lh4.googleusercontent.com/KuckrI0UmWgWM7oY0o_5hctf2kYodGr5Da5q2r8Q-775wd6TE8JWI17bCm1kzRFrg919rMqny3QKJfvrwq-hhUK_rTjd04gLNa-aHtxp-TYFQ4JV5OSpFThdG-zx0u_rm3aCywjZ)

**ATTENTION:** The I/O COM# may have to be changed for your Garmin GPS set up.

  

Above shows the Block Diagram. 30 GPS Time Fetch continuously finds the time from the Garmin GPS signal by using a While Loop, and several sub-VIs to determine a synchronous time. ATTENTION: The I/O COM may have to be changed for your Garmin GPS set up. GPS Time Fetch begins by receiving an input the Garmin GPS at a COM input port. Two signals are sent:

-   The Pink Line, the GPS data is sent to the GPS NIDAQ RS232 sub-VI for Data processing. The output data of the sub-VI is sent to another sub-VI, GPS PARSE, for further processing. GPS PARSE outputs the Time, Date, which are sent to the Front Panel, and to the Case Structure.
    
-   The Orange Line, the CPU data, is sent through various logic structures to calculate both the GPS Time Error and the CPU Time Error, which are sent to the Front Panel. If both the errors satisfy the condition of being less than 0.01 two things happen. The Case Structure is satisfied, and writes all of the data found to the config WRITE TIME, and the while loop stops.
    

Once computed, the GPS Time Error, CPU Time Error, GPS Time and GPS Date are all sent to the Front Panel as output.
