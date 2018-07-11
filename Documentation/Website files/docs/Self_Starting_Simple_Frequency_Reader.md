![](https://lh4.googleusercontent.com/-w7Lfa5acqN1XCrbxUdN-4lPZmdN7_lE2CB-jqyY1agWh87Ah9PrjQLu3jj-Ht2V76bYDlspnMXUuVyClf8EhMUxQMaKO9P2yF5-e_YU4Ll9TkMJQYcRPik45VzKI09CJ3lK9xyp)

The self starting simple frequency VI shows the initial input from PRLs. The VI will only start at the initial connection to a PRL afterwords the VI will not still display the feedback, if stopped the connection will have to be restarted. The information can be used to show the basic input of a PRL such as the amplitude of the frequency at a specific channel. The graph will show information from 5 PRL each separated with a different color. To start the sampling make sure that labview knows the IP and port of the PDC, this can be done by opening the S3DK GUI and changing the configuration settings.

  

![](https://lh4.googleusercontent.com/cC4RATMBJKxWe7pWy_1_PndT3k1I-qNGNDeBqWfauuxlrtmJPT1Bje8KEY42snRpyzyck70zjyF0aAEImT8L_5P7ao9fcT6AnBak5WhXo5ThWuEJohI9Uy-zcgaErDCO5o6FCf9i)- the refresh rate determines how often the graph will update, the option are 50 Hz, 20 Hz, 10 Hz, 5 Hz, 2 Hz, 1 Hz, every 2 sec, 5 sec, 10 sec and 1 minute. The first option will result in faster updates while the later will keep the information on the graph longer.

  

![](https://lh5.googleusercontent.com/_T0rrQ5NDy7Qk_ih4mW3R_D2gB6NFF7rCbHZIYj_wzbxh6OUtFngUPJkdeE30_r8a02L68PAJMbqaaCZS8ktdNb6D1DTu53OcvZ9SOVU1jJLy0cUBDHSjhZLJmL80abiGHUv5P2t)

-   The graph itself shows the amplitude vs time of the input of a specific PMU channel. The other check options are used to separate the different inputs each with a specific color.
    

  

![](https://lh4.googleusercontent.com/46VZabejte1Xy1W7MKD8u9jiLoxgWpF1WLeN1vf585NIcdg9Dzh4PDwdRS9g3HtHf4dUV1X6fYcQnCe2FvWPMgLyNvt5i--_P_qehWHpM8yBEDrulq7XlOfN03Gyl-Ucm2BQBjIJ)- These options are used to control the graph. The cross is used to station the graph, the magnifying lens sections part of the graph for a specific part of the data, and the glove allows the data to be shifted.

  

This example utilities multiple S3DK VI to function:

-   PRL Remote: is used to run the PRL and start the connection. It also rapidly tests to see if a connection is made or if the user presses quit to then call the VI to shutdown the connection.
    
-   PRL Channel selector configuration: used to direct which channel will be read from, the VI is then unbundle the signal to output the analog.
    
-   PRL Signal Create Waveform: used to create the graph using the analog data from the PRL.
