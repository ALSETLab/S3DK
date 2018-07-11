
![](https://lh3.googleusercontent.com/kIZXQgwHF2dZMXhd4SGGVWUZkj0e7fcXMUx0mqE-GyRYcE8YcWNgPm2pNGfH497isRaf5xAopE39TFW6XsBpaxJDF_ORBDukVdmp51pn8GMDENAF9mfX8ELspRcpLgWENT7C7-2n)

This component reads data from a queue directly from the Live Buffer. The size of this buffer is set in the PRL Configuration, and is entered as number of data points. The minimum value is 1.

  

The Queue Reader is designed for applications that need a steady flow of data sets of equal length, or in general faster access to the data.

Inputs:
|  |  |
|---|---|
| Timeout | Decides how long the VI will wait for new data to arrive before exiting. Setting depends on the design of the client software. The default value is 5 milliseconds. Entering -1 will cause the VI never to time out. This is not recommended, but is one way of doing it. |


Outputs:
|  |  |
|---|---|
| Timestamp Values | Timestamp Array |
| Phasor Values | Phasor Data Array |
| Analog Values | Analog Data Array |
| Digital Values | Digital Data Array |
| Has Data? | Indicates if new data has arrived before timeout. If not, read again until it does |


Dependency Graph:

![](https://lh3.googleusercontent.com/GvtdtpSfM09Eq9JZgDS4xS9ZZy13NUw89xfl7WWnS4iZVHmPj8wr20OtPsHo2yVxXvkGukCyLIE_bw1ZaKzLOoE2SiK9spxB2OeuyEf_YaA-ua3UM_DBGbUCTlG7K4Cslu9jbP8Y)
