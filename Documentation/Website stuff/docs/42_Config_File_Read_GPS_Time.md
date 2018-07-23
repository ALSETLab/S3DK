
**![](https://lh5.googleusercontent.com/AX7hv4QpCC-MCoqxpUNRjEFoErHO8-6Lbx5L7DKXGCtlHNYnxr9z0OtRavJQ5Mz3_kWuRV3uxFauZBWSt-9XbFM9c46jp0oyU9p3J23JXB74GYyXxREuc3t57YYPIY98nUZr5KTV)**
42 Config File Read GPS Time VI outputs various variables written in the VI 41 Config File Write GPS Time and outputs those values to the Front Panel.

**![](https://lh4.googleusercontent.com/mHUztU7NdAUQ6QYoYyFakOyrowhfc26X3t_X_54bQUDtW8oO9ULu1isufTACQH3f4cye_BVHxwquw83UDJiJvk7aSyCuPgxV6GEhdoDfd1m7q-CObsAkaV8bcu81HuiBIvObX-7h)**

The VI starts with a configuration file path that is mapped to a reference number using the sub VI Open Config Data(compatibility). Each value associated with a key (Labview Time, CPU Time etc.) is read and sent as output to the Front Panel. If no the key is not found, a 0 is returned. Any errors associated with the process are sent through each key as error in and error out. Once complete, the configuration file is closed, and no file is written, indicated by the False constant.
