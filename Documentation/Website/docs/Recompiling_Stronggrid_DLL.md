# Recompiling
Initially the stronggrid DLL was set in a 32 bit format but later versions of Labview can’t run or open 32 bit software so in order to use the DLL the user must recompile the file or use labview 32 bit. To recompile for 64-bit the following programs are needed: Visual studios and cmake.

  

Downloading and Installing cmake:

1.  Go to [https://cmake.org/download/](https://cmake.org/download/)
    
2.  Download the latest version of cmake, preferably using the msi installer instead of zip as the install will require less setup by the user.
    

1.  If you already have cmake make sure that it is the latest version
    

Using cmake for the dll

1.  Now make sure that the [repository](https://github.com/ALSETLab/S3DK-STRONGgrid) is downloaded from the github.
    
2.  Create a subfolder to hold the a updated S3DK file.
    
3.  Open the cmake application:
    

1.  In the “Where is the source code” line put the location of the stronggrid files
    
2.  In the line beneath put the location of the new folder.
    

Recompiling

1.  The files should now be in 64-bit; now open visual studios
    
2.  Open the project file- ALL_BUILD.vcxproj
    
3.  The scroll down where it reads Debug, expand and change it to Release.
    

1.  If the scroll down right next to does not read x64 change it by going to configuration manager, clicking new and where it says ARM click to change it to x64
    

5.  Build the solution and check for any errors
    

Replacing the dll file

1.  Find the S3DK folder
    

1.  Ex.C:\Program Files\National Instruments\LabVIEW 2017\vi.lib\S3DK
    

3.  Open the data folder
    
4.  Now in another folder explorer, open the newly compiled and built S3DK files. Open StrongDLL>>StronggridDLL.dir>>Release, now copy the stronggridDLL.dll to the data folder in the S3DK. replace the old file
