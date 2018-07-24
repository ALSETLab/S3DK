
![](https://lh6.googleusercontent.com/eZkWZJOxHVRIOMKxg4wcOgk-D5uZ7UUFY5mlzvvA4Ugk0sUwQeDRL9GmMCZC6oie8oZCEZlIYvCo2C3dK-1lT0KS3DgjiLgdw6v7Dys4eX4_Gys8C9QWD4ozYd7Pxl6r9U9nJcEG)

This component takes input data, usually from another VI, then formats that data to compile configuration settings for PRL applications, the input corresponds to the setting chosen. The data is only formatted into settings if the write boolean is true. Output in32 and PRL dt Tolerance are important information compiled by the VI which is the reason for having there own nodes,those types of information can be used in conjunction with other VIs. The configuration settings are PRL analog data points allowed equal, PRL complex data points allowed equal, PRL seconds before reset after wait for config fails, PRL number of live buffer in access buffer, PRL number of connection attempts, PRL live data buffer size, PRL dt Tolerance, PRL data rate history.

![](https://lh5.googleusercontent.com/VRChfHX03PtX8tNOPwcUK6xm4ht4I-BPvU0xhFgxBj6g8YSh8cOb1LkS2nn8arCfuQpUxnjbDhgNn3skXNxayy-EpgkcTOicbB8yvAcQjD4jveRVoaTemDZBuo4K0FHjlG02EGPc)
