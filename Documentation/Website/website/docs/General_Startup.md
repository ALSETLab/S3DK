
Topics
-  Hardware
-  00 Main (single or three phase)
-  Start Up Adversity
-  Error Document
-  Definitions
    

  
  
  
  

1. Hardware

The purpose of this section is not to assemble your OpenPMU, rather to ameliorate any issues with the first build and use of your OpenPMU. If your hardware has not been built look at the hardware installation guide before this.

-   GPS
-   When plugging in the USB port of the Garmin GPS, you must manually set the COM port in 30 GPS Time Fetch. Open the Device Manager in Windows (click the start button on the taskbar, then type “Device Manager”) and find the Ports ( COM & LPT) option to find which COM Port the GPS is connected to.
-   Open 30 GPS Time Fetch. Set the Comm Port (shown below) to whatever comm value you found previously. 
![](https://lh5.googleusercontent.com/eCUNG0AswKA5h-xMulM0oGLg1ygXMYwFPl2iTcETDgrxLdfhHC1pH3wor-CqbYAWzWTdy8mSlzyKFEZGV-vy1_sAWRwpE9YfSsB6nlQoQYL0Swyrnqmb_3--l8x7DVHFSNo5oUEO)
    

  

2. **00 Main VI**

Now we get to the 00 Main VI. This VI is the brain of OpenPMU. It takes all the data found and uses it to craft useful phasor, frequency and amplitude values to monitor your system. Before anything, make sure to note the following, below all of the outputs.

  

Figure 420

![](https://lh4.googleusercontent.com/0anNwG83iPI9Z7fSid7XI_K6B9uQc1M75NtT2M9_APJHvdLZ8Y1F1J1gmaqKFlMKS8491-H5ZQ6reH1M6NdojVCa4cROpcjOdtshTgaa3QV8Hmd5Wejb6x21daGEgJEdlDFmEEgs)

  

The above figure instructs you to copy and paste the blue text into the PMUconfig.ini. You should not have this file, so don’t stress. Simply create a Notepad .txt document called PMUconfig.ini. The file will save itself as a .ini. Save the file somewhere near your other OpenPMU files, or somewhere easily accessible. You will need to modify the path to PMUconfig.ini, which is discussed more thoroughly below in the Start Up Adversity section. In addition to the PMUconfig.ini file, you will need to create a file called GPS_timer.ini in the exact same fashion as mentioned above. Save the file in the same place as the PMUconfig.ini file.

  

![](https://lh4.googleusercontent.com/MNjj2CT5fOJpNvHKenoYuyo8PRavp8E2OH17mHETjtvsCAplnxCOVmaYgH6Jzk9ds_vi0KQjkrcEdUu0Ra1KDvF8lajJpBqHwwBczI7283eeKKuEzDPNrkS4o3E13j-GMjsccMZ3)

Also, make note of the following. These outputs can be found if you scroll down on the Front Panel. As stated in the diagram, the purpose of the outputs are for debugging. They can be used to do the following. The Elements in Acquisition Buffer help ensure that the queue relationship is in equilibrium. The Raw DAQ Output is used to ensure that the DAQmx is observing and recording the correct voltage waveforms. The Stop indicator ensures that when the stop button is pressed, the recordings cease. As stated before, note that the Stop button does not exit the VI, it just stops recording and analysing data. The Error out (DAQ Loop) returns any errors associated with the DAQmx. The DAQ Loop Iterations returns the total amount of loops through the DAQmx.

  
  
  

3. **Start Up Adversity**

This portion of the start up guide is designed to help you with initial errors, “straight out of the box” problems that need to be taken care of before plugging in any hardware.

1.  NI_Timer.dll: Identify what version of LabVIEW you are working with. If you are using the x32 Bit version of LabVIEW, you can ignore this error and proceed to 2. However, if your unfortunate soul is using x64 Bit LabVIEW prepare your hiney. The error itself comes from the NI_Timer.dll file located in 31 GPS Interrupt Read RS232, where the NI_Timer.dll file is used. Unfortunately, this is a 32 bit .dll file, which will not run on 64 bit applications. To solve the issue, start by downloading the source files provided and installing the latest version of Microsoft's Visual Basic (it’s free). You can uninstall Visual Basic once we are done using it. Once Visual Basic is installed
    

This is for Visual Basic 2017

1.  Extract the files from the downloaded ZIP file, and save them somewhere easily accessible
    
2.  Open Visual Studios, open the NI_Timer.dsp file through: File → Open → Project/Solution
    
3.  If a window called “Review Project and Solutions Changes” pops up, click OK
    
4.  If a window called “Security Warning for NI_Timer” pops up, click OK
    
5.  Go to extracted file folder, open NI_Timer.cpp with Visual Basics (this will open the code itself)
    
6.  Two boxes left of green arrow. Change the first box to “Release”. Click the arrow in the second box, to go to the Configuration Manger. Under Active solution platform, click the scroll down arrow and “New”. Change the new platform to “x64” and click OK followed by Close.
    
7.  Click on Project, then NI_Timer Properties. Click on “VC++ Directories” then to the right of “Include Directories” click the box to get the click down arrow. Click “<Edit…>”. Uncheck and re-check the box “Inherit from parent or project defaults” then click OK. Now, back in the Properties page, click C/C++, then under General find “Additional INclude Directories”. In the box to the right, type “..\..\src”, no quotation marks. Click OK.
    
8.  Click on Project, then Retarget Solution. Next to the Windows SDK Version, click down and “No Upgrade” then click OK. Do the same thing, click on Project, then Retarget Solution, except now make sure the windows SDK version is 10.0.17134.0 Click OK
    
9.  Click Build, then Build Solution.
    
10.  Click Build, then Rebuild Solution.
    
11.  Open your extracted files folder. Open the sub-folder “Release” and you should be able to see a new NI_timer.dll file that was modified moments ago.
    
12.  Open LabVIEW, and open 31 GPS Interrupt rs232 Read. Open the block diagram. Double click on the orange Call Function Library Node. Set the path as the new path to the 64 bit version of NI_Timer.dll. Your VI, and 00 Main VI shouldn’t have a broken Run arrow.
    
13.  Voila! C’est fini.
    

2  Paths: There are two instances where a path needs to be set by the user based on your system and files. In the VIs 42 Config File Read GPS Time and 40 Config File Path. Each of these VIs contain a path constant that you will need to set. In the path constant box in the Block Diagram, type the path including your file such as:  
    C:\Users\you\Documents\OpenPMU\PMUconfig.ini  
    Not: C:\Users\you\Documents\OpenPMU
    
3.  PMUconfig.ini: As noted above, if you haven’t created PMUconfig.ini and GPS_time.ini, you need to. Make sure to copy and paste the information shown in Figure 420. The IP address and the ID will be subjective to your system and will need to be changed accordingly.
    
4.  Drivers: There are several drivers that you will need to download in order to use OpenPMU. The first the DAQmx driver found at:
    
1  [http://www.ni.com/nisearch/app/main/p/bot/no/ap/tech/lang/en/pg/1/sn/catnav:du,n8:3478.41.181.5495,ssnav:ndr/](http://www.ni.com/nisearch/app/main/p/bot/no/ap/tech/lang/en/pg/1/sn/catnav:du,n8:3478.41.181.5495,ssnav:ndr/)
    

The second is the driver for the VISA program which is found at:

b.

[http://search.ni.com/nisearch/app/main/p/bot/no/ap/tech/lang/en/pg/1/sn/ssnav:drv/q/visa/](http://search.ni.com/nisearch/app/main/p/bot/no/ap/tech/lang/en/pg/1/sn/ssnav:drv/q/visa/)

c. Real Time Module:

[http://www.ni.com/download/labview-real-time-module-2017/6636/en/](http://www.ni.com/download/labview-real-time-module-2017/6636/en/)

d. NI CompactRIO

http://www.ni.com/download/compactrio-device-drivers-december-2017/7087/en/

  
  

4. Errors and Solutions Notes

  
  
  
  

5. Definitions

This portion of the start up document is for anyone who may have OpenPMU as their first research project, and does not have much computer science background (I was in the same boat). While taking a computer science class to learn how for loops work, that class will not teach you about how to make Labview work. These definitions are terms that are referenced above that are good to know, especially if you don’t have a strong computer science background. These definitions are also for those if you have not completed the LabVIEW training courses.

-   Path: The path is the computer's way of finding what file you want to load. Setting the path tells the computer which sub files to look in to find the file you want.
    
-   .dll:A dynamic link library which is used as
    
-   Data Types
    
-   VISA
    
-   DAQmx
    
-   Case Structure: The Case Structure is LabVIEWs version of an “if” statement.
