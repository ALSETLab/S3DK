# S3DK (Smart Grid Synchrophasor Software Development Kit)

## What's in this Repository? In a Nutshell!

### Source Code Available
Github allows to distribute the source code of a software project, and "builds" of the current version.

The S3DK is comprised of two main parts (a) a real-time data mediator (aka DLL) that parses and handles PMU data (implemented in C++), and (b) a LabView User Interface (UI).

In this repository you find all the source code related to the the LabView UI, includding the wrappers to use the methods inside the DLL for low level data management.
However, the source code for the DLL will be hosted in a different repository.

### Installers
If you don't want to build anything from scratch, we provide a "release" which allows installation of the LabView components and the Real-Time Data Mediator (.dll) using the VI package manager. That's all you need to get up and running. The latest installer can be found here: [Go To Releases](https://github.com/SmarTS-Lab-Parapluie/S3DK/releases)

### LabView UI and "Pallete"
All the source code related to different functionalities in LabView are managed in this repository. These include wrappers that call different methods implemented in a DLL that allow connection with a PMU/PDC, a library of blocks that provide access to the PMU data within LabView and other functions implemented in LabView blocks. All these functionalities are made available in a "pallete" (e.g. like a toolbox) within LabView.

### Real-Time Data Mediator (aka DLL)
The source code of the real-time data mediator is being cleaned up for realease. For maintainance purposes we will create a different repository where the source code will be hosted.

## Overview
S3DK is a software development toolkit to implement real-time PMU/Synchrophasor applications, such as thos used in Wide Area Monitoring Systems. 

Using this development toolkit, a developer is able to manipulate the numerical values of the different signals contained in a synchrophasor data stream within the LabView environment. 
This enables fast software prototyping and testing of applications.

The software is comprised by two main parts: (a) a real-time data mediator that parses and handles PMU data (implemented in C++), and (b) a LabView User Interface (UI).

## S3DK Components
The LabView UI provides both easy connection with PMUs/PDCs and a "pallete" in LabView with different functional blocks that are used to interface the real time data with LabView functions.

The real-time data mediator has a client/server architecture, and an advanced API that would allow its use in other development environments instead of LabView. 
In addition, the real-time mediator has been build with several future functionalities in mind, such as a time-synchronization layer and multithreading.

## S3DK - Why?
Compliance with the IEEE C37.118.2 protocol means that a developer can directly connect to a synchrphasor stream from an individual PMU, or from multiple PMUs within a PDC output stream, thereby liberating them of the complexities involved synchrophasor data handling involved in dealing with the packets wrapped within the protocol.

The toolkit provides a real-time data mediator that parses the IEEE C37.118.2 – 2011 protocol, and provides auxiliary functions (such as data windowing) implemented in C++.
Nevertheless, this is transparent to the user who only has to provide the PMU/PDC configuration settings (i.e. IP address, etc) through a GUI.

These features make the toolkit independent of any specific equipment, PDC and/or their manufacturers; therefore facilitating interoperability.

## S3DK Applications
Several applications have been implemented by KTH SmarTS Lab which will be realeased in the near future. For an overview, please see the following paper:
M. S. Almas, M. Baudette, L. Vanfretti, S. L⊘vlund and J. O. Gjerde, "Synchrophasor network, laboratory and software applications developed in the STRONg2rid project," 2014 IEEE PES General Meeting | Conference & Exposition, National Harbor, MD, 2014, pp. 1-5.
doi: 10.1109/PESGM.2014.6938835
URL: [link](http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=6938835&isnumber=6938773)

## Citation:
If you use our software, please cite the following paper:
L. Vanfretti, V. H. Aarstrand, M. S. Almas, V. S. Perić and J. O. Gjerde, "A software development toolkit for real-time synchrophasor applications," PowerTech (POWERTECH), 2013 IEEE Grenoble, Grenoble, 2013, pp. 1-6.
doi: 10.1109/PTC.2013.6652191
URL: [link](http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=6652191&isnumber=6652052)


