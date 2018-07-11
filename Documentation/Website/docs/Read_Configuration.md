
![](https://lh6.googleusercontent.com/lsmiBT2F9lydnNWra5ZjZd8189Las_ekgLKb417z4ActSaLilL9mMCqkwy5aBMjv6QUqMsTDgfN9C6LnBqPQuNVQ0MEO3xjihvOQQXGO0IpVV_1pkaA9hxjmx_cTa3OHhHRIvFGw)

This VI will read the configuration of a device at the pseudoPDCID. If it takes longer then the timeout Ms value then the function return is 1 and stops.

Inputs:
|  |  |
|--|--|
| timeoutMs | A numerical indicator that represents the allowed time for waiting on configuration reading |
| pseudoPDCID | Represents an ID number for software management and keeping track of which PDC instance is being used.  The ID separate where the data is going to if on the same device. |

Outputs:
| | |
|---|---|
| Function Return | Returns one if the PDC is not running and 0 if it is. |

