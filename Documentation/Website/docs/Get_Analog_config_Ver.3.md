
![](https://lh3.googleusercontent.com/yJQJuTZ_v4__BTHOTn8BGnV8hDmT5peGx-_KN6iA4lYGi13Cj_n1l6AwJ505lnHcRdlLmai5A5i2tDnqU_07wEZzvni1k7y44chv8V_hXmi_Sr5-hJ3fUoEmViLHxE6V-3JvO3_1)

Takes in an array of numerical indicator as configuration for a specific PDC with the pseudo ID. If one exists then the function returns is 0 else 1.

  

Inputs:
|  |  |
|---|---|
| PDC CFG | An array with numerical indicators for time readings and number of PMU being read from. The variables:   -LeapSecCorrection: Correction value to maintain accurate time  -LeapSecPending: Determines how off the time is from the standard time  -ClockIsReliable: 1 or 0 determining if a reliable time is being   -Dummy controller(DC): Can be altered based on the users demand  -DC  -DC  -ClockErrorSec: Total time error in seconds  -Year: The year the PDC think it is  -Month: The month the PDC think it is  -Day: The day the PDC think it is  -Hour: The hour the PDC think it is  -Minute: The minute the PDC think it is  -Seconds:The seconds the PDC think it is  -Ms:The Ms the PDC think it is  -DC  -DC  -DC  -DC  -DC  -DC  -SecondOfCentury: The current century(current time) in seconds  -FramesPerSeconds:How many readings per seconds  -numberOfPMU: How many PMU are being used |
| pseudoPDCID | Represents an ID number for software management and keeping track of which PDC instance is being used.  The ID separate where the data is going to if on the same device. |

Outputs: 
| | |
|---|---|
| pdcCFG out | The array outputted from the array in |
| Function return | Returns one if the PDC is not running and 0 if it is. |
