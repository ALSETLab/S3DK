
**![](https://lh5.googleusercontent.com/gNWm7BImdGtkGxBW2FSHVJWfbxXtTOzZedV_zLYcrhucnwQ8hP8qQ4fxtvmiU3JVTIVlmBFPdg3vmz5tmf3L9flJ3hznEUW7y9xbDO2_Qho4hMgwLJBE9KUgMFBVQYNkvyqlh-ub)**
41 VI Config File Write GPS Time is used to write various values to the keys in the image above (Labview Time, CPU Time, GPS TIme, GPS Date, Tick Count, GPS Lock). Each key is a part of configuration data GPS Time. Once each key has a value, the data is written to a file and closed.

**![](https://lh6.googleusercontent.com/Qhgwz_EIdpw5_4f3ite7etIApLVYA7kSY5H3rePXCKrz6bpTwYHmctbVg87z7c8rpBbnbyxM9AhABKKDvIalq2CSGH9Bgal1QpUcMthCGQPIkE-eLGS5gm3YxHpF7FKNdl0qI_Yg)**

ATTENTION: Make sure that input formats are consistent. (GPS Time is HR:MIN:S.MS, GPS Date is MM/DD/YY, etc.)

  

The VI starts by receiving a file configuration file path and creates a reference number that maps to said path. Each value associated with the Front Panel Input from the user is recorded to each key in GPS Time. Any errors found are also recorded. Once each key obtains a value, the values are written to the file mapped by the reference number and closes the reference to the file.
