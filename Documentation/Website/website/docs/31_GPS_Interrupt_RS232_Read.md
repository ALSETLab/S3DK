
**![](https://lh4.googleusercontent.com/BCWC8MfPr3g2FMzjMLNhu5Rw9BxyfSxBqM1UTjy5pRykj15QrpKIlP_eSRkbysKWaVWRYSnfT1AlwEgEQP5HixVT384_VIl60kyfVZ4qfk-13wAT7jqWKFO147o-ghXEKTdKfmY1)**
31 GPS Interrupt RS232 Read takes a COM port and uses the VISA program to produce the GPS Time Code. The Time code is sent to various other VIs to be used as the time Synchronous component in analysis.

**![](https://lh5.googleusercontent.com/HNUT8t-tLLnyCX25f32Q70Nd_zJzBcRvNwyzjOJ2HVNXIvtuevHKDGEz1ZzU5W7flTuoyZpeifYobxoMHrlh2LvqO6RpSMJgTA1T4ugwY59gAmssjrh3r7y4_IIZ9wXApy6jXNML)**
The VI starts by receiving the port resource name. That is sent to the VISA Configure Serial Port, which also is inputted with the baud rate. The VISA resource name and any errors are sent through a VISA buffer. After the buffer, the Flat sequence portion of code is activated. The first box uses the NI_Timer.dll to find the CPU time, which is used to compare to the GPS time. The DAQ Assistant 2 sets a task. The second box in the flat sequence waits for half a second.

**![](https://lh5.googleusercontent.com/kwPDYRzkYYOsPG5IOTS75YGLpb_LcrF3Dy-BaVaiUeU_skBCV4ToSfTaMsfmd1nC_SX_sYqhEh9fYRnfgp5XxvCgNywXirnE6WRpqr-IWFLizVboe44fLEJ7HTNXVv7hgW5CRe1X)**

The third box in the flat sequence begins by receiving the VISA resource name, and returns the byte at that port. Both of these are sent to a buffer, which returns the resource name again, and the data at the port in a read buffer as a string. In the bottom portion, the VISA is closed, and any errors are sent to the Front Panel. In the above portion, the string is sent to a search and replace in the string twice. Once complete, the whitespace is trimmed, and the length is calculated. Based on the length, either the correct GPS Time code is produced, or an Error code is returned. Once complete, the final part of the flat sequence closes the task.
