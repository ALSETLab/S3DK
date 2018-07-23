![](https://lh6.googleusercontent.com/ICdIo_MpYfA0e8FTp_jNGuCLc2gaMet2-KDVwnMb-iw8C8izLc4hwWko_5qxfq_0jDYL6ZbIwQml4mVTd-kbrrA9ND54dovng6ksQE2vLlzoakVWYpz36iP0LgeRe4zZazQVVGr7)

Accepts a string and prints out that whole string as long as that string is less than or equal to than the max MSG Length. This string input and corresponding output is connected to the pseudo PDC ID.

Inputs:
|  |  |
|---|---|
| msg | A string indicator to be sent out to another terminal or prompt |
| maxMSGLength  | A number that determines the size length of the output message |
| pseudoPDCID | The ID that corresponds to the source of the information used to differentiate the data, used when data is stream from the same source. |

Outputs:
|   |  |
|---|---|
| Msg out | A string that corresponds to the original msg in, can be shorter due to cut of |
| Function Return | If the pseudoPDCID transmits a string to the location of the pseudoPDCID then the function return will be 0 else 1 |
**![](https://lh5.googleusercontent.com/BxbUXnWh2qomNXpu0u0UcgFO-BEB8pDDAjKVNBA3M0kkKHr8Jswa9QiB1TIoiD8NgrrcLPt7V8stecESE3JRSMB5APh5X3764EM9owgdgMUtSgesI2QE09jC2aShnu2nPA3pSTYR)**
