**![](https://lh6.googleusercontent.com/tIixzf9d4wQZSH7dsVW4Bd-o7hQdkGOooH-C0O3Yrov_xI_lkzlnUJ0Qrpu3NHaccz0rJXxkGp7qV9DUYQUcyiZFHKl0CRO7NYfVwYBspmF4uwMEi4jZ5zk63RLgVl3QmurdXKft)**
The Snapshooter reads data from the Access Buffer. There are two main ways of usage:

  

1.  Inserting the VI in a timed loop will read data from the Access Buffer at regular intervals. By keeping the input and output time stamps the VI will return only new data. The amount of data received each time may vary, since at a data rate of 50, there is only 20 ms between each new data frame.
    
2.  By activating the Get Full Buffer option, the VI will return the full buffer each time it is used. The length of this buffer is set in the PRL configuration. This is useful for making a sliding FFT or similar operations that require a fixed length buffer at regular intervals.

Inputs:
| | |
|---|---|
| Get Full Buffer | Ignores the input time stamp and return |
| Get All Signals | Skips the signal filtering made by the Channel Selector, and Sends all available signals to the data outputs |

Outputs:
|  |  |
|---|---|
| Time Stamp | Timestamp array |
| Phasor Signals | Phasor data array |
| Analog Signals | Analog data array |
| Digital Signals | Digital data array |
| Has Data | Indicate if new data has been found |
| First Buffer Filled | Returns false until the buffer has been filled, it will remain filled since it is rotating buffer. |

Dependency Graph:

![](https://lh3.googleusercontent.com/gxCCHQcO6yAxnSCGG0dZFo0NRrtGxLWXGC2MgPP0Yh05h9bHpbwm1cRU7CyXTXPKVCsbPZvX7Krm-3UzUwGlqdUJn2rT7tbh1Q8RTOjEP2Lmmlb9bMxkWzLmgT4vSlz0_C6SH8kb)
