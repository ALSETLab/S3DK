![](https://lh6.googleusercontent.com/u7RayDKR44B0Tfh0pCdBdj9g9Sh-zATGohRJZ9wIP0lH5fr47BxTUuLHnxXtCO8moEQbeaHmqSXJKpOyHTy9q4pt8sr5oAFKV896xKdZoV49JrPKOVA13-iVcEgvxYJ4HE-0bnyi)

This VI is used to sample a PDC at the pseudo location and output the results.

Inputs: 
|  |  |
|---|---|
| pollTimeoutMS | The time allowed to wait for the VI to collect data  |
| pseudoPDCIDArrayLength | A numerical indicator that represents  the length of a pdc array that will be used for polling |
| outPseudoPDCIDArr | A numerical indicator that represents the ID for the PDC that will be used to sample data  |
| outNumPDCWithData | A numerical indicator that represents the ID for the PDC that will be used to sample data  |

Outputs:
| | |
|---|---|
| Function | If no pdc is found or no data is streamed, then the function returns 1 else returns 0 |
| outPseudoPDCIDArr out | The output of the polled data from the PDC |
| outNumPDCWithData out | The output of the polled data from the PDC |
