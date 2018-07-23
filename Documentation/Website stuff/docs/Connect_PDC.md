![](https://lh3.googleusercontent.com/yWVH0-CPziTU2NtNbG5IMCKqR95rgeoMB8yqfWSqMJh3thjKsSTUT_CNMBK0yg4p0X5sfiztMqcS0KHd01JwDYT0ocw-qEjf3gvihipqOWOxhBYj8UaexCucKQZmYYX27u3p3tYC)

Connects to the Stronggrid DLL. This VI initiates connections with a PDC device or software. Best used to set the initial connection to the PDC and data retrieval.

Input:
|  |  |
|---|---|
| Pseudo PDC Id | Represents an ID number for software management and keeping track of which PDC instance is being used.  The ID separate where the data is going to if on the same device. |
| IP Address | IP Address for the PDC being used |
| Port | The port number for the PDC |
| PDC id | The actual ID for the PDC |

Output:
|  |  |
|---|---|
| Pseudo PDC Id | Represents how many times the VI was ran at that specific port if data is coming through |
| IP Address | IP Address for the PDC being used. |
| Function return | Returns one if the PDC is not running and 0 if it is. |

**![](https://lh3.googleusercontent.com/hVzkHEv1hY7mphpYOzY45ErVo4om-V7bIA9k136Y014aB4Wq1s6eQ54Nx1tMD7uYcGDXJkaAkZQeC02gPu2TjfMJNxPquorZ5R__OAFQKdlFzHgjjatWL8QIFqJL0H6KuNYDgZnL)**
**![](https://lh5.googleusercontent.com/SJxCzbMC7HjrWoJYCriKA7jQ72eJkVNk4c4za0rt3jBfybzuw5AoRPesunD3_y4CFzZgplpa0eii8gobN59xoHCcgzIohGOWO0Non3cBnHAKGPXH_QPIBqjfHdStKQVAkbSuSlmH)**
