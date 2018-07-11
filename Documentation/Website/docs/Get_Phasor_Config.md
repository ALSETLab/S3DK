
![](https://lh4.googleusercontent.com/5zcOt_0F3r5i02cqrP5cUJCDXYVkdUtwiruzT6kZlKHYRQvJ2pM_KqyShm8PyBcrraRz5i_HjID_l06GvfONg18jpXN_G9_yKy7Fnmc6tny2x1UmTQukQSG2sHTGnKTen_XQO2I3)

This VI takes in the original phasor configuration and finds the configuration of another pmu/pdc based on index and also returns the default name of that device. If the indexes don’t correspond to a device then the function returns 1 else 0. This VI is used to find the device that corresponds to a certain phasor outputting a specific data.

Input:
| | |
|---|---|
| Phasor Index | The index of the corresponding to a device |
| Phasor configuration | The configuration of the current device |
| Pseudo PDC ID | Represents an ID number for software management and keeping track of which PDC instance is being used.  The ID separate where the data is going to if on the same device. |
| PMU Index | The index of the corresponding PMU |

Output:
|  |  |
|---|---|
| Phasor configuration out | Configuration of the new pdc/pmu |
| Name | Name of the new devices |
| Function return | Returns 1 if there is no device that corresponds to the indexes else returns 0 |

**![](https://lh3.googleusercontent.com/OGLqVdmFa1p803MbnhIjh1mLurffeZJJNM1FWfDnhVh8kMCGJIQK6mZ4-s89DOE3QjNHFTJfrv_ZEdkZpFzLGCKl-tTCf11yoELh92T6laupDg57wPWNtNlja4Vw8J2ngV-VXgOx)**
