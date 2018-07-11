![](https://lh3.googleusercontent.com/v4oAF0EubNSfBs0alkO9Bytw3aO1l_R0Lpxkil4JUCt2i4uuscLUX5DQAIjAy1N7QH1_6nMXh8EVtwySUPv_RuQ9cPTbmuCvuEO7CwAK1gtTGm8l6HBFWn55SOGLAQGt9Fme0OUp)

This VI is used to find the configuration and name of a PMU given an index. Given a current PMU the VI will find a the PMU at that index and output the name and configuration

Input:
|  |  |
|--|--|
| PMU index | The index of a PMU the user wants to output the name and configuration |
| PMU configuration | The configuration of a pmu |
| Station Name | The name of the PMU used for the configuration |
| Pseudo PDC ID | Represents an ID number for software management and keeping track of which PDC instance is being used.  The ID separate where the data is going to if on the same device. |

Output:
| | |
|---|---|
| PMU configuration out | Outputs the configuration |
| Station name out | Outputs the name of the PMU at that index |
| Function return | Returns 1 if there is no device that corresponds to the indexes else returns 0 |

**![](https://lh4.googleusercontent.com/uXkeDfX1JRVMiybo9yxx0Qq21Pa3LEwD05sjpI16ZYc1MLhjHwEedaMkH_ADufyR__pt8UW53UJ7Mf_PkPJVdnXFfPo_S_lGN9kB1luHbguMTBZTSVxqgVW6dLGAXJMPVRmHtieZ)**
