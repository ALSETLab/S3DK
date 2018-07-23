
![](https://lh4.googleusercontent.com/izO3Z-iYBofBT5WBFuImyIkjQreUBQMQwyZpU8jRV8VcccWN6YP8eRzG6BDpfz348DUaroKChXWdadqyn0vbofQMSrOzCEMtKnh4XeHw-sspTg9t_WnkPPu0SWPcf-7-9JxPvzgN)
The VI 23 Input Scaling takes input voltages and currents (A-D) from an NI-DAQmx along with the scaling values from the VI 24 Global Front Panel to modify each of the voltages and currents. 

![](https://lh4.googleusercontent.com/Zy5SOPCFKl-ZMipF2EyDFahJNyhzSu3UFDvOfl9l-R2LaGSsy4G6E0M8QV8hRkPYdqK-i04WHcxx-zsCWZB6O3N0WUbvUs0Cq867d7I7ZmCthWiyIseOhQM-HhrO1vI1ZjKv-S6C)
The Block diagram shows how the VI starts with receiving raw input data from an NI-DAQmx and splitting the signal into Voltages A-D and Currents A-D. The global variables from the VI 24 Global Front Panel are used to multiply each signal. The signals are then, combined and sent the the Front Panel as output.
