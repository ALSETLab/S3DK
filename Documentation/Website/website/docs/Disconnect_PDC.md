![](https://lh6.googleusercontent.com/Vb8XHaAueFsGLX-YVqVTd89MlqptHLPGLujVDVprghcZnJ0DakE9PtQKA-7qhISqzizD73rY5BOstucdtH0mYzGkFEwe8Qs3bGPlAtEoEfZOVaaP4p7MEMVhAM85tthwvAJC7rns)

Disconnects the connection from the PDC based on the pseudo PDC ID. If there is no connection at the location of the ID then the function return is 1 else its 0. Best used when changing the PDC source.

Inputs:
| | |
|--|--|
| Pseudo PDC ID | This ID number correlates to number used in the connection PDC VI, this is id for which instances of the PDC is running. The ID separate where the data is going to if on the same device     |

Outputs:
| | |
|--|--|
| Function return  | Determines if there was a connection at pseudo ID, if there is then the VI disconnects and function return is 0, else the function return is 1.     |

Disconnected from an actual connection with a PDC at ID 2
![](https://lh6.googleusercontent.com/mXprgfpC5Pk1IlKrabCRKK6LteB8sBWTNuXucEts2qr-7juq5P4qFpDlL1UvaddQn1owrIBmV4ybYVdUbq1BS31t5NXGWKuHMUTk6m6yKJusUYvsGj3UWuCYzjEMU9DhsMuKEnjT)

  

No connection at ID 51 results in a return of 1
![](https://lh3.googleusercontent.com/UjBdgM2PizMLry9qKa6RgZSt4HpMPdJd9-G-__WfQghcBS8tfrfeJL35WYh7OL0vaYOphTqTX_7xrV8a-KSgZVNXax_FBrWRAiW9FTQpKS3hcADjlC35S4kd3GcGexHcp16yXzJp)
