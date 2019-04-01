![](https://lh3.googleusercontent.com/ZjMSvDmhNFs5E07WkLJcX7VZjpLNeQorX7ALMV5sNe2J_Zf_wXS7L40qGzCXNsF1b-FKI5yQxTLzBFEetBHkVX-rpp4anXXlq3p2G1VvJCrp7y4UZmVT11xJ1JeGtCBWH2FDxV6v)

The PRL Remote allows a Client application to programmatically send commands to the PRL. The following commands are available:
|  |  |
|---|---|
| Run | Starts the PRL |
| Startup | Corresponds to pressing the Startup button. If Autpstart is switched on , the startup will automatically follow the run command |
| Get Status | Returns the following parameters indicating the status of the PRL:  -(Access) Queue Active   -(Access) Buffer Active   -Configuration File Received   -Connected (to C37 Device)   -Number of bad dt (returns the number of bad dt that has been detected since startup of the PRL)   NOTE: All these Values are returned as false( and are not valid) if Actions is not set to Get Status.     |
| Pause | Corresponds to pressing the Pause button of the PRL |
| Continue | Corresponds to pressing the Continue button of the PRL |
| Shutdown | Corresponds to pressing the Shutdown button of the PRL  |
| Abort | Corresponds to pressing the Abort button of the PRL |
| Open Panel | Opens the PRL panel |
