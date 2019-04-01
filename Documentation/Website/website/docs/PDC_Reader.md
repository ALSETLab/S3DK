This Template is to build a producer/consumer design pattern events to produce queue items. Use this design pattern instead of the User Interface Event Handler pattern for user interfaces when you want to execute code asynchronously in response to an event without showing the user interface responsiveness

![](https://lh4.googleusercontent.com/QHMKvT1bnImDUquyyLtvvt4gxgyYSDePy5f2en6qHuBxIg5Ura42MA2gisB6RRzbxpAh-CEFJ-NVtF19hU-ntPvVpuM-4U7g3_L41wonw08dB8-6O060bc1lDIYUVs0p-dPKuNWg)

  

Input:

![](https://lh5.googleusercontent.com/vYd1BbxCD6tg3NUScxx9m1tWAW-LHb_mn1c09GrR6YhhTZvzy_fldhMZJ5lBI1D2mVbQ__7mmilrs0J5a-xTEWx5c23wLQ8TW4TbOECr2JyTSeMGERsnx2AtM6ad0-KeUUwx1dj9) - controls if the prl is being read

![](https://lh3.googleusercontent.com/UE12wZWCiV-6G1c4XAjSx8lwFndvi7JmnpztsLdGFrbvLuavk2SJ1xWQp3tz_wGF-vMo_4kCV1S6gRkXKITmHiAXMqPcFTQvpFvM1WukaIcTiGeVEysEJ5ufxD_xVjptVqNaz7Yu)- This set which channel are being read. The options for which channel are:

-   Phasors
    
-   Analog
    
-   Digital
    

The Refresh rate determines how often the data is sampled. The choices for how often is: 50 Hz, 20Hz, 10 Hz, 5 Hz, 2 Hz, 1 Hz, every 2 sec, 5 sec, 10 sec, and every minute

  

The PRL visible brings up this window:

![](https://lh4.googleusercontent.com/SYjoxGb42ecbfVr_ib8yFNIJ953PjkK7Mm8tzQqmQMsZ3YLYhn9KTR9RRr0twQYJfjSYdTMZnDqL7ppHFZrWeKhxZYq126LrsyM65I7hU44HQuO9qX1RX4Z77mREwBFHq02M9h2c)

The status determines if the PRL is ready or not.

  

Intermediate:

Shows at which step the data is being processed and what processes are currently being activated.

![](https://lh4.googleusercontent.com/AKiEJTLP9sOpfoyrP797Le8mGfcRJ59t8Yfh90yz1PIiqj1S5GCL0W0JLxDVw7bc7Z2a17L9r_Wrx-YlQ9fcvE8gbXQ2YXJJ72mF1SbUFpOpiKq77Sl88HCf3VDmA6JnyukIzhn6)

-   The event loop uses an event case structure that has four events that correspond to the iusers inputs via button commands. These include timeout, quit, prl visible, and channel select, the last three result in a value change.
    

-   Timeout controls whether or not the VI will continue to run based on if the PRL is still sending out data
    
-   The PRL visible brings up the GUI display
    
-   Quit, ends the program.
    
-   Channel selector determines which channel will be read. It will determine the channels of the phasor, analog, and digital.
    

-   The execution loop will display blink continuously to indicate that the program is running
    
-   Timed loop will also blink every time data is read.
    
-   Status loop will blink to determine if the program is running correctly
    

![](https://lh3.googleusercontent.com/Ohs9r2qFX7EuoKPTDwfikdWxRqpTtR1eR2HYO-gpDKNqhxqIGeI91UrUNkhIPt9sD82V-3g7xvrWv6Wz7yL7eY54HdBj75zSGjoRpyskvTgF6iH8EnMmxARerEktHMJfglwD9LVe)

-   These boolean lights determine certain statuses for the PRL:
    

-   Buffer active determines if there is data being read
    
-   Configuration file received indicates if the initial connection has been established.
    
-   Connected indicates if there is a connection to the PRL
    
-   Has new data indicates if more data has arrived but is not being process
    

The graph shows the data in a waveform graph.

![](https://lh5.googleusercontent.com/UeKBs4BWZgpg18cNQ8zlvUyMvZ1CL7o-I1ptnkZmpOGyml4sLGJz6JbtIpWYXgJq-x44JfdQa988Gx6BA6rbTCu5pxP3LGr1Rh-fynJaFIFcnh1uAIGAJRxoEbmmklYt3TN3Hagw)- can change how the data looks on the graph

  

Output:

Shows the data output in numerical form.

  

-   Each time data comes out, timestamp is updated:
    

![](https://lh3.googleusercontent.com/uOVDO3b0HUg8PHqBkbeI48ACVUOW1jYKuMfWn7Db2J0owt-FcHxWRwoRhFvRnD9IY6typXstD-tYfJuZjoV_hT0MSfo_9nft3wmDha2XBAuMdgY2MWt_LU7nZ_TLW36Ro1K9w5aA)

-   Phasor signals:
    

![](https://lh4.googleusercontent.com/RDbO1kGTUqo4AL0GMIGnFEJNiq99OWZoTjDs_cn7xRGte32Va8hQz_G2cCkuxpSlzIyot1L4zZEvjPVNuyfFPYEG392NuJLwbaaceAdWNUUoQiHMEsX0LYfJrmuRFkmXtEkE3L-N)

-   Digital Signal:
    

![](https://lh4.googleusercontent.com/p5TBgkiVeGkB_FrYWzhiYcWm5qmbStgEGoffFYCgEizJ2x9mE_9W10lNBpEfHPV1E44d47CACW5mfUg3wosmC6L_2JwII9JAD6NqFHHS9nD-LtjpSSGE-7EyGhWWH5hE7jehflZx)

-   Analog Signal:
    

![](https://lh6.googleusercontent.com/D21SEZsBfZ4ohA5xC1H7M73SFtaHJ2VzP_CFsGtpV3tSd7jUSnrqS8gGznqNyjTwAYeZ5xdRQfKzu6ajM-d_1vELeWtfoOUHBxj3TezYMqzPQ1TG523nJhW2a0J6gXQujAJ2KNCE)
