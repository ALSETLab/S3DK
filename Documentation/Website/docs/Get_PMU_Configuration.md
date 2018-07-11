
![](https://lh4.googleusercontent.com/1wIRSm2e1XhAruos1IGEOx2CaZnls6BF-f-cFqhrZtsIcvuGt3Rgoc9Rly6TnKRaPerVsJJ8BgKKaojFfYp8A-bu3nsLiXEBJyXNZVtY96_37OIZOBLQTR1bMMu8oaA7M2ilyXWs)

This VI takes in the phasor configuration of a PMU, the name, and the index for the pmu. This VI will show any change in data from configuration in a program, if there is an error the function return will output 1 else 0.

Input:
|  |  |
|---|---|
| PMUIndex | The index for use in indicating which PMU data is  |
| PMUConf | Shows what settings the PMU is configured  |
| stationName | The name of the PMU transmitting data |
| pseudoPDCID | Represents an ID number for software management and keeping track of which PDC instance is being used.  The ID separate where the data is going to if on the same device. |

Outputs:
|  |  |
|---|---|
| PMUConf | Shows what settings the PMU is configured |
| stationName | The name of the PMU transmitting data |
| Function Return | Returns one if the PDC is not running and 0 if it is. |

The output and the input don’t always replicate each other, this VI can show any change in PDC connection
