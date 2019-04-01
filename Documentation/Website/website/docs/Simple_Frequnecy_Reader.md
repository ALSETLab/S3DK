![](https://lh5.googleusercontent.com/3gB4fzEps_Qd2w6RXuXs9SleM3m-dBzPUfgw0DpaMk9nAZ4C9FlIqx-IA-k80aO3rvHzR57g5obZad9x-oGEP8QRUbPEihiOvQ7K-qugVKWHrWX6PexlbRQi9iDJsQyCxvYir3CD)

This VI Is used to read the input from channels of a PDC, this VI can display 5 different waveforms each specified by a different color. To use this VI start the PRL and connect labview with a PDC by configuring setting to allow connection. The connection can be set using the S3DK GUI and using the configuration button and typing in the IP and port address.

  

![](https://lh3.googleusercontent.com/EugHUn3oXjq4-bH4TIUjqY4UYdYQ9C7jhXaje8yrA0OvRAMSsp1zlGb2_1jdDyBfRIZt1TEwuKCKDbCT76TxoyHssuouzerKaXPoY2FMrZUJVOfTnnoHggjWeHSD4fVpLCu1yycq)- the refresh rate determines how often the graph will update, the option are 50 Hz, 20 Hz, 10 Hz, 5 Hz, 2 Hz, 1 Hz, every 2 sec, 5 sec, 10 sec and 1 minute. The first option will result in faster updates while the later will keep the information on the graph longer.

  

![](https://lh3.googleusercontent.com/2ft2qUqQAK020z3hExMt9lSPtqK45JxWx1RDjM-S8z6tkZrRJsGjPf9qF4JCUd5pzFibDBi1gwOMHcOIOU6NpmvO9VjZPuqZ34SXLsXEE6EP4wExyvF-6EDgnHmolZDFmiQr1P0i)

-   The graph itself shows the amplitude vs time of the input of a specific PMU channel. The other check options are used to separate the different inputs each with a specific color.
    

  

![](https://lh3.googleusercontent.com/Uc0dofhqrFz2OLSJmGFm1oUroF9u3BNxzc-li5kqyMWD_3qSpn8tqAq1-FudxPIQG5Z6bZV720j0cMuQHEs256h3HFQ8WYZAPGpsZDbP6zeEQE95rkXWJaw_xLc1C81CVuhVlfKL)- These options are used to control the graph. The cross is used to station the graph, the magnifying lens sections part of the graph for a specific part of the data, and the glove allows the data to be shifted.

  

This example utilities multiple S3DK VI to function:

-   PRL Remote: is used to run the PRL and start the connection. It also rapidly tests to see if a connection is made or if the user presses quit to then call the VI to shutdown the connection.
    
-   PRL Channel selector configuration: used to direct which channel will be read from, the VI is then unbundle the signal to output the analog.
    
-   PRL Signal Create Waveform: used to create the graph using the analog data from the PRL.
