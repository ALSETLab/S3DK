# Quickstart Guide

## Compile the DLL
The `StrongridDLL.dll` can be compiled from the source files hosted on a separate repository.
The compiled file should be placed in the `/builds/StrongridDLL`folder.
A copy of the compiled file is hosted on this repository for convenience.

## Compile the LabVIEW files
The source files for the LabVIEW interface can be found in the `/LabVIEW PRL Library` folder.
The project contains all the necessary components of the LabVIEW interface and pre-configured build specifications.

To compile the files, the user should build the pre-configured build specifications.
This will prepare the files for the next step and place them in the `/builds/S3DK Labview` folder.

## VI package
For convenience, the files can be packaged as a VI package to be installed through the VI package manager.
A build script is provided to prepare the package.
The script should be opened with the VI package manager, where the script can be edited or simply used to generate the `*.vipm` file.

### Warning
The VI package manager is sensitive to the file structure of the compiled LabVIEW files.
Any change in its structure will remove the icon information included in the build script. 
