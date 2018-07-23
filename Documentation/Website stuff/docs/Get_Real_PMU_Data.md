![](https://lh5.googleusercontent.com/K5lg64Rx4buMsObi8EHi0lNEc330tSOyTLACOXw13gb7bIF42um8ifFgonBadiURw1X4NxKXH_SXM_l4c11azhVBEQDwvaBSTIIp2UVjhnB3GJrg7DY2TmuJcAe1kkTRC6myZxqZ)

This VI takes in raw data in the form of frequencies and streams the effect of a PMU on that data. The VI also outputs the imaginary and real part of a broken down complex number and some effects a system has on values such as digital values.

Input:
|  |  |
|---|--|
| PseudoPDCID | Represents an ID number for software management and keeping track of which PDC instance is being used.  The ID separate where the data is going to if on the same device. |
| DigitalArrayLength | Numerical indicator that determines the maximum length of the digital Array |
| rd | Cluster of raw data that shows frequency, regular frequency and delta frequency  |
| status | The status input is an empty cluster added to use as an indication of the data stream |
| PhasorArrayLength | Numerical indicator that determines the maximum length of the phasor data array |
| phasorValueReal | A numerical indicator that represents a single phasors shows the real value of that data |
| phasorValueImaginary | A numerical indicator that represents a single phasors shows the imaginary value of that data |
| AnalogArrayLength | Numerical indicator that represents the length of the analog array, to be used as an indication of how long the data will be |
| analogValueArr |  A float value indicating an analog value |
| digitalValueArr | A float value indicating a digital value |
| PMUIndex | A numerical indicator that corresponds to an index of a pmu |

Output:
| | |
|---|---|
| Rd out | Cluster that outputs the raw delta and regular frequency  |
| Status out | Depending on the type of indicator inserted into the original status cluster, the status out will display the status. |
| Function return | Returns one if there is an error or no device connected but else will return 0 is functioning correctly. |
| phasorValueReal out | A value that corresponds to the output of the initial real part of the phasor value altered by the device |
| Phasor value imaginary out | A value that corresponds to the output of the initial imaginary part of the phasor value altered by the device |
| analogValueArr out | The analog value outputted by the system |
| digitalValueArr out | The digital value outputted by the system |
