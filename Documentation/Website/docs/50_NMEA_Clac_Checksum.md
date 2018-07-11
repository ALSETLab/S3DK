**![](https://lh4.googleusercontent.com/-_NXfwCIBckmdbmTqFJ0VqbNrvtSPL1WkYGaqDxKZ1tv0Gh6EIuiADOKn2njbSza6DtoOC-sJer-rlY0aTWCsN-nM1MjmTYnUbAXAWXux6wwPzGTheY_8OOgwrHT3UNjbJb6IcLv)**
The NMEA Calc Checksum checks to see the exclusive or value between each character in the GPS time code. The Front Panel Displays the GPS Time code, built in other VI, the calculated value for the checksum and a Hex Value of the string. The Hex value and the checksum, if operating correctly, should be the same.

**![](https://lh6.googleusercontent.com/7V2itTYU-nD-qWNmhelNDAbS5yUPKLxyVOyX4yETLRP9ZXtbSU13z6pW5BJVlKR0BZtJFbgpF48ZgC3dBKSTI2sMhZUDI-5aTXH3wKTKzgh3f1p2F1LD4Nf1fub5lHw50_Fu-8FC)**

The Block Diagram begins with the input GPS time code as a string. If the string contains the characters “$*” the string is split at those characters into before the “$*”, at the “$*” or the chars themselves, and after the “$*.” In this VI, the string after the “$*” is sent onwards, the other strings are discarded. A similar action is taken place again, this time the string values before a “*” in the string are sent for further analysis. The length of the string is used as the amount of iterations the For Loop. The string is sent inside the For Loop, and each character in the string has the following actions performed:

-   The character is turned into a byte array, and then a cluster. The character is then unbundled, and sent as an unsigned byte array, to be compared via an XOR gate to compute the checksum value. If you are unfamiliar with numeric comparison via XOR logic, I recommend looking at: [https://stackoverflow.com/questions/6398427/what-does-bitwise-xor-exclusive-or-mean](https://stackoverflow.com/questions/6398427/what-does-bitwise-xor-exclusive-or-mean)
    
-   The checksum value is then transferred to the start of the loop via Shift Register, and outputted as a Hex value to the Front Panel.
