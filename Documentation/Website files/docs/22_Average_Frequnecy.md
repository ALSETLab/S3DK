


![](https://lh6.googleusercontent.com/KjmR9qWL4GejcTv6DbCduBO4rOTgL4wEaEX47Vx13iO_nvvtRbLr-pBiyEsfFeFYr0F3855UXCSNK_UiUSX_lV9Ns2RRDP0-M2rMTyR8_4ru4QIH7zMAaSyvPLgmkfvvSpVnn55A)

  22 Average Frequency VI takes in a power signal, or three waves from an NI-DAQmx. The average frequency of the signal is sent as output as “Numeric.”
  
  
![](https://lh3.googleusercontent.com/i09HlK_c0d1OiVqMMrNLgmzUtu0QIrleHamNJv_CMapSBeeXD-ALDw8UC2-uPjjY-4q7CPtsk6c5tHL60nPoO5RKv1cwe1j1pgqMrU-Ic6RPknAQ5z6fR2ceYJDZ7EPjijALWcra)
The Block Diagram shows that a frequency (dynamic data or the dark blue wire) is provided from the NI-DAQmx. The frequencies are split into signal 1, 2, and 3, with frequencies 1, 2 and 3 respectively. All three frequencies are added together and divided by 3 to find the average frequency. The signal is converted into a double and sent to the Front Panel.


