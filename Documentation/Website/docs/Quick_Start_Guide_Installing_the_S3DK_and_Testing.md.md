# Quick-Start Guide: Installing the S3DK and Testing your Installation


# Requirements

-   LabView 2017, 32 bit.
    
-   Real-Time Data:
    

-   A PMU or PDC, PMU Connection tester, or
    
-   A PDC simulator (provided below)
    

-   Familiarity with LabView. You should at least have completed the Core 1 and Core 2 trainings from NI.
    

# Installation

-   Download the .vip file (in the screenshot below, s3dk-1.2.0.1.vip) with the latest version of the S3DK from the Github repo: [https://github.com/ALSETLab/S3DK/releases](https://github.com/ALSETLab/S3DK/releases)
    

[![](https://lh5.googleusercontent.com/hnZofddMWcAi4p7J4UX0z3xgYUnyzLQZyE4Uw3tlJkCD-dXFjlL5xoB2DGsuPWLGPw1lKsHyzN644fyl8vvQIbXCB4chPBaJkvLTVSPjf99JjyK2VT23OjgMzaPInOIsI04hBAqH)](https://github.com/ALSETLab/S3DK/releases)

-   Double click on the downloaded file. The JKI VI Package Manager will open as shown below.![](https://lh3.googleusercontent.com/TONVoKJzJWyV2zN7VSOWbfTn88BOJwhDOccPB0GortZCFcdJjetfmjDmUabKna6jEx-TnRtTfjjF2hfVx0hv1p48jOdgR3gITxYVX-Jc3NJF_ou_KA_3VpbWyGbUM_QIcSMGIjsa)
    
-   Click on Install, under the 2017 icon.
    

-   Go through the installation process, and allow the S3DK to be connected to both public and private networks.
    
-   If your installation is successful you should see the following window. Click on Finish.
    

![](https://lh6.googleusercontent.com/O0FAQFGga7JApkNwo7m175QmIFp1tdfU_kQfu8DxC1WH8EiB_XDWeaPHewuhIW1Ney9-C25LdpFjJNND8KEHAR7UtIXSbM37XKu_LQ2vOW27Q2MDQ0U-4q5zMOyrlAuZtGTfwXEp)

# Testing your Installation

## What you will need: If you have access to a PMU or PDC:

-   Access to a PMU or a Phasor Data Concentrator streaming data using TCP.
    
-   The IP Configuration for the PMU or PDC:
    

-   IP address: e.g. 127.0.0.1
    
-   Port Number: e.g. 4712
    
-   ID Code: e.g. 1
    

-   Check that your PMU or PDC stream is sending data using [PMU Connection Tester](https://github.com/GridProtectionAlliance/PMUConnectionTester)
    

## What you will need if you don't have access to a PMU or PDC:

-   Download the following PDC Simulator: [link](https://www.dropbox.com/s/7tsoogz7is6essh/PDCSimulator.zip?dl=0)
    
-   Unzip and run the PDC simulator. Allow access to both private and public networks.
    
-   Use the default configuration in PDC simulator, or modify it according to your preference:
    

-   Uncheck the "Enable UDP Unicast" option. It is not needed.![](https://lh3.googleusercontent.com/SO9c85dVoOIUPC7iLlYv0HxFQjj6_o1Z_qXcZ5v9jCxHFl5bSQ7ZWrhlJhdTSrGS9k6oyBdpaD5GUtd_yl7dOIgwSAvobZWgBt7dtRZYJzPoPzG-XCU4aZj8r7S9t-Sh_BvMEWK8)
    

-   Click on "Start"
    

![](https://lh4.googleusercontent.com/JybA---iTZ6kVPkQhV2Aa9BycaPJkzjyBrNnrkr0D1ia1liCmQWmdcfaEFqnjqaijW0_fSw3mG9QZ7Em-snlBK_rnFVtIoaOj1bljigPq_LocRk1eE7sTzpim18gpLdFaD8ZeM7T)

-   The simulator will stream output data as configured on the specified port:![](https://lh3.googleusercontent.com/ufEgewde7u0TyHlLRDsVdp94Ck5clb1hxLmHWeITtn2j3U2O1RUI4y9WfpOsFryUhu0GKr5ci4N_rVcf_iVfb_2V_p8U-GPfkzc0dXxoBk5rh8ST4UTTNcYXZoGyjqph1zvIldnQ)
    
-   The IP Configuration for the PDC simulator is:
    

-   IP address: 127.0.0.1
    
-   Port Number: 4712
    
-   ID Code: e.g. 1
    

# Testing the S3DK Installation

-   Open LabView, and create a new project and a "Blank VI".
    
-   In the "Block Diagram", left click to open the "Functions" Palette, and scroll down to the "Smart grid Synchrophasor SDK (S3DK)".
    

![](https://lh3.googleusercontent.com/n4JOLKBAeyEReCElCNb5X9NtuKYpMIut3gnkWHTkwiCcIu1LX1Ih9EzQoEo2f1A4kILYwDxMlIZc2WS3Du8-qPUvpaT46JhJgYSWaxfNi-dmpuo2bvGPIDqFUDA0QLFQSt8J4WxK)

  

-   Click on "Buffer and Queues", and drag the "S3DK GUI" block to the "Block Diagram" of your new VI.
    

![](https://lh5.googleusercontent.com/mLwFrGYmfyGeiW0ZS92Thu3vZHHFNYXctBKQB59BfB2xF_MfNozojs7CTuLBBC1OJHEcuRAutJd8ULpT6nYmrMod3zDKPxv_8h1I_WLXtyWRLyW35ePalTKL8kazDILksBQVGYhU)

-   Double click on the "PMU" block with the red circle, this will open the GUI used to connect the S3DK and LabView to the real-time data stream, shown in the bottom left-hand side of the screenshot.![](https://lh6.googleusercontent.com/3YUdOc5xg0uNKW0_F8ifiWJjIGNxsqh1XOhdrAg41M4EjcCDVLK5yNdW8Rvmrpsk3FurSRDTqhsHsc2xbCJzVuKCcP-XWgvKKCyuApaE1GBoKD_ryhZnjqUxLkOgRu-X7cfUvrV6)
    
-   Click on the top bar of the GUI under Edit, "Run", and then "Config" on the bottom right hand side when the GUI is running.
    

![](https://lh3.googleusercontent.com/PB5vAp-stXay58k0e-HEKj3A8GSX-gUWEpfMOykjTlaageQcsUaKfHQvXqFMS8wl1ZFg-_l-mo67dL84AlNWQdS0_2M6E3d8ng3vM8UY0eNX5fBFYFducaS5ialIroJg1bF9iLY9)

![](https://lh5.googleusercontent.com/m_Zf0chCobvzPF9eLQNghNS0-QPSAc1FwMOJT4Fp8bjzzplAqDRHSYRAnyBopKWRGi6dDEQIuEF_bK0OEob91sOpKpqBW3p-q1PLn4xc7ybwBob8_EUOJr3rgMfgIMZdKlfeqEjn)

-   In the Connection tab, enter the IP Configuration for the PMU/PDC you have available, in this case, for the PDC simulator we have:
    

-   IP address: 127.0.0.1
    
-   Port Number: 4712![](https://lh5.googleusercontent.com/sGUzE2p6x4D6Su8UXQH-3i0MDL29hZ4sdOW1NnvDoXXNbyNBw72XxRcaKLMU4kbNjTSii63t13Vb9U-cuBlr9B1N_Q2z96yPtF-1KW9LRcNnIg-hKb604T-f9hvg_hBcfLm8cvV2)
    
-   ID Code: e.g. 1
    

![](https://lh3.googleusercontent.com/VpcFEUJUI2UNKeydoy8U8mnX2sQDHkrtPECPcZhchbLoS0Yi1_i6BxicnZLk7F0U60P3qj5mBvKVJR3R4VcjZoXMMmLzeNxspQ8tVWivPhnv7rrrxVsGgGoIZ6eCcT8lfO3Nc9Jm)

-   Click on "OK"
    

-   Next, click on "Start Up" in the GUI.
    

![](https://lh6.googleusercontent.com/K7Fx1q_VSV0T_-OvV0yNBhFLhKLeBbNoaVoVfukwD9d75o9AEnhdK6mLOW1WDo0u8oS2lCZosHx3t6zGl2uiC-1tkgxM7XSM9hXfSPBaDunqrnOnCQzR42tE3fPNRp7n_KHZ2wcX)

-   The top of the GUI indicates "initialize —> configure" this means that the S3DK is receiving the configuration frame. Once the S3DK starts receiving data, the GUI will appear as follows:
    

![](https://lh4.googleusercontent.com/4CQmL11UZvOs8Rlek7E5nFZmO8VN1ugdXCGDSYvMpJgnT3pAc24cJKcyhS6lYXva1Off3IIyLhl0oZq0UZobZNefGZ_XB2m9R91LIVKWDg3CKw3LDn7gWBop0CrBuTLjSGpGGglF)

-   The dials above are about 20% and 10%, which corresponds to the CPU and memory resources being used. By clicking on the "Raw Data Panel" yellow button, you can display the raw data being received, as follows:
    

![](https://lh3.googleusercontent.com/V247966IHyFo8uEvCO_TW7uotcV1VRFQzc_Pkzzq7EOdXgnSV9qDiKseUEuiXVAs6hNStxX61XlPltTZ1dEIkOkuDROCX4ie2d5N4EpocoOVV57bPAqB-E6Si52YVdbAqBwWXrwK)

-   You can modify the update rate to display in the "Raw Data Panel" by selecting the "Update Rate" on the top left (in this case we are displaying 10 Hz of the 30 Hz data). Note that this is only for displaying purposes, the data available to the S3DK can be configured to report at the full or other update rates for computations on the data parcels.
    
-   To select the display form of the phasor quantities, i.e. either polar form (magnitude and angle) or cartesian coordinates (real and imaginary), move the button from "Re/Im" to "Amp/Ang".
    
-   The "Channel Selector" yellow button (below the "Raw Data Panel" button), allows to select the different signals in the stream and to use them in an application.
    

# Using the S3DK for a New Synchrophasor Application

-   Now you are ready to make a new application in LabView using the S3DK and your real-time data stream.
    
-   You will now modify the simple VI made to call the GUI for connection with a PMU/PDC, and add a new application.
    
-   Click on "Shutdown" and then "Quit" from the S3DK GUI, and stop the LabView VI executing it.
    
-   Now go to the S3DK pallet, and select under "Examples" the "Simple Frequency Reader", shown in the bottom right of the screenshot below:
    

![](https://lh4.googleusercontent.com/UpZdvTpeNkwIWP0krqW_bmzhjE6S4cCvrv-JBwH44vfScCGq8zda7Thdav33rtt4KISYG4IlKnaEjEKxg0OqLYLy0opiNasDNdPHr6BbwGkTSqht1svrZVMbsT4oe51ZG7wOCuzX)

-   Drag and drop the example to the VI where you have placed the function block for the GUI in the previous step; it should appear as in the screenshot below:
    

![](https://lh5.googleusercontent.com/AfD86_tXKT1bquM_gkl9T3KnszaOw9VD7_whYAKzgtLw9HofYGb3FLnAsvieHdqCJOwQLwdmTokgVT_gMCOHxc1rvVYi62lvgjFNWGp4-jPrQBhBf5pqVzRXHfy0B-gW44OYn3KG)

-   Save your edited VI and click on "Run".
    
-   After establishing your connection with a PMU/PDC, click on the GUI the "Channel Selector" button, and select the variable "PMUNameX/frequency", where PMUNameX is the name of the PMU whose frequency you want to visualize. In the screenshot below that is PMU.001/frequency.
    

  

-   Go back to your VI's "Front Panel", you should be able to now visualize the frequency being streamed by the PMU/PDC, as shown below:
    

![](https://lh6.googleusercontent.com/PvjA1CJ7asg6T5XFS3L7TR6v1ko9YLFwFjnfgI08i-xpulsb_u6uLFoNDc2muwTqvm8pPOxQjfxle3tlS7ztv1UTcw9-XDYimu5FuMgdnRcHfaspQBswC4rdsItqNeoyRgYbYhoP)

-   Now you have a new frequency visualization tool!
    
-   To develop more advanced applications you need to learn to use LabView; in this link you can find a catalog of courses from National Instruments: [http://sine.ni.com/tacs/app/fp/p/ap/ov/lang/en/pg/1/sn/n8:142/](http://sine.ni.com/tacs/app/fp/p/ap/ov/lang/en/pg/1/sn/n8:142/)
