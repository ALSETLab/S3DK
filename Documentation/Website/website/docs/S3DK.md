﻿# [](https://github.com/ALSETLab/S3DK#smart-grid-synchrophasor-software-development-toolkit)Smart Grid Synchrophasor Software Development ToolKit

### [](https://github.com/ALSETLab/S3DK#quick-start-guide-installing-the-s3dk-and-testing-your-installation)Quick-Start Guide: Installing the S3DK and Testing your Installation

Please read the following Quick-Start Guide to learn how to install, test and start using the S3DK:  [Quick-Start Guide 2018](https://www.notion.so/Quick-Start-Guide-Installing-the-S3DK-and-Testing-your-Installation-f791d8c2e9d7402ab6a820e065dd93e2)

### [](https://github.com/ALSETLab/S3DK#whats-in-this-repository-in-a-nutshell)What's in this Repository? In a Nutshell!

#### [](https://github.com/ALSETLab/S3DK#summary)Summary

Github allows to distribute the source code of a software project, and "builds" of the current version.

The S3DK is comprised of two main parts (a) a real-time data mediator (aka DLL) that parses and handles PMU data (implemented in C++), and (b) a LabView User Interface (UI).

In this repository you find all the source code related to the the LabView UI, includding the wrappers to use the methods inside the DLL for low level data management. However, the source code for the DLL will be hosted in a different repository.

#### [](https://github.com/ALSETLab/S3DK#installers)Installers

If you don't want to build anything from scratch, we provide a "release" which allows installation of the LabView components and the Real-Time Data Mediator (.dll) using the VI package manager. That's all you need to get up and running. The latest installer can be found here:  [Go To Releases](https://github.com/SmarTS-Lab-Parapluie/S3DK/releases)

#### [](https://github.com/ALSETLab/S3DK#source-code-labview-ui-and-pallete)Source Code: LabView UI and "Pallete"

All the source code related to different functionalities in LabView are managed in this repository. These include wrappers that call different methods implemented in a DLL that allow connection with a PMU/PDC, a library of blocks that provide access to the PMU data within LabView and other functions implemented in LabView blocks. All these functionalities are made available in a "pallete" (e.g. like a toolbox) within LabView.

#### [](https://github.com/ALSETLab/S3DK#source-code---external-real-time-data-mediator-aka-dll)Source Code - External: Real-Time Data Mediator (aka DLL)

The source code of the real-time data mediator is available in a separate repository:  [STRONgrid DLL](https://github.com/ALSETLab/S3DK-STRONGgrid)

#### [](https://github.com/ALSETLab/S3DK#documentation-s3dk-quick-start-guide)Documentation: S3DK Quick Start Guide

A document giving an overview of the basic features of the LabView UI and usage of the functional blocks in the pallete:  [here](https://github.com/SmarTS-Lab-Parapluie/S3DK/tree/master/Documentation).

## [](https://github.com/ALSETLab/S3DK#use-our-software-cite-our-work)Use our Software? Cite our Work!

If you use our software, please cite the following paper: L. Vanfretti, V. H. Aarstrand, M. S. Almas, V. S. Perić and J. O. Gjerde, "A software development toolkit for real-time synchrophasor applications," PowerTech (POWERTECH), 2013 IEEE Grenoble, Grenoble, 2013, pp. 1-6. doi: 10.1109/PTC.2013.6652191 URL:  [link](http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=6652191&isnumber=6652052)

## [](https://github.com/ALSETLab/S3DK#s3dk-overview)S3DK Overview

S3DK is a software development toolkit to implement real-time PMU/Synchrophasor applications, such as thos used in Wide Area Monitoring Systems.

Using this development toolkit, a developer is able to manipulate the numerical values of the different signals contained in a synchrophasor data stream within the LabView environment. This enables fast software prototyping and testing of applications.

The software is comprised by two main parts: (a) a real-time data mediator that parses and handles PMU data (implemented in C++), and (b) a LabView User Interface (UI).

### [](https://github.com/ALSETLab/S3DK#s3dk-components)S3DK Components

The LabView UI provides both easy connection with PMUs/PDCs and a "pallete" in LabView with different functional blocks that are used to interface the real time data with LabView functions.

The real-time data mediator has a client/server architecture, and an advanced API that would allow its use in other development environments instead of LabView. In addition, the real-time mediator has been build with several future functionalities in mind, such as a time-synchronization layer and multithreading.

### [](https://github.com/ALSETLab/S3DK#s3dk-basic-functionalities)S3DK Basic Functionalities

Compliance with the IEEE C37.118.2 protocol means that a developer can directly connect to a synchrphasor stream from an individual PMU, or from multiple PMUs within a PDC output stream, thereby liberating them of the complexities involved synchrophasor data handling involved in dealing with the packets wrapped within the protocol.

The toolkit provides a real-time data mediator that parses the IEEE C37.118.2 – 2011 protocol, and provides auxiliary functions (such as data windowing) implemented in C++. Nevertheless, this is transparent to the user who only has to provide the PMU/PDC configuration settings (i.e. IP address, etc) through a GUI.

These features make the toolkit independent of any specific equipment, PDC and/or their manufacturers; therefore facilitating interoperability.

### [](https://github.com/ALSETLab/S3DK#s3dk-applications)S3DK Applications

Several applications have been implemented by KTH SmarTS Lab which will be realeased in the near future. For an overview, please see the following paper: M. S. Almas, M. Baudette, L. Vanfretti, S. L⊘vlund and J. O. Gjerde, "Synchrophasor network, laboratory and software applications developed in the STRONg2rid project," 2014 IEEE PES General Meeting | Conference & Exposition, National Harbor, MD, 2014, pp. 1-5. doi: 10.1109/PESGM.2014.6938835 URL:  [link](http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=6938835&isnumber=6938773)

We have now released a couple of synchrophasor applications that use the S3DK:

-   A basic synchrophasor display application (with source code), can be found in the following repository:  [https://github.com/SmarTS-Lab-Parapluie/S3DK-SynchrophasorDisplay](https://github.com/SmarTS-Lab-Parapluie/S3DK-SynchrophasorDisplay)
-   A Wide-Area Phasor-Based Control System that uses S3DK and the National Instruments compact RIO (cRIO) (with source code) is available in the following repository:  [https://github.com/SmarTS-Lab-Parapluie/Audur](https://github.com/SmarTS-Lab-Parapluie/Audur)

## [](https://github.com/ALSETLab/S3DK#s3dk---why-release-it-as-oss)S3DK - Why release it as OSS?

### [](https://github.com/ALSETLab/S3DK#synchrophasor-technology---going-the-last-mile)Synchrophasor Technology - going the last mile!

For over 10 years, (Luigi Vanfretti) has heard the expression "What can you do with real-time PMU data?", for which many answers can be given. However, any answer that you might provide assummes that you have the technology to actually make it a reality, which is not the case for most researchers. S3DK changes that, and it makes the answer, "as long as you can program (in C++ or LabView...), it's up to you what application to come up with!".

With PMU technologies there are too few alternatives to develop PMU applications that use real-time data. You either have to buy a proprietary software solution, or use the excellent OSS tools from GPA (i.e. OpenPDC and others). The problems with proprietary solutions, from a research perspective, is that they simply do not have the flexibility one needs for implementing new ideas and require a software development skill set commonly unavailable to most researchers. The awesome solutions from GPA require far too many software development and programming skills beyond those that a typical electrical power engineering has, in particular, researchers. With these two points in mind, S3DK has developed with the researcher in mind: to provide a set of tools in an easy software development environment familiar to MSc students for PMU application prototyping, and that does not require deep knowledge on protocol parsing, real-time data management, etc.

After using the software since 2012, KTH SmarTS Lab students have implemented many applications using S3DK, and we believe that these tools can help other researchers to innovate also. Thus, the reason to release this software as OSS is to give momentum to the field of Synchrophasor Technology, specially in the area of PMU applications, and to provide it's users freedom.

We hope that you use S3DK and share your applications using this software to others, just like we have shared S3DK with you.

### [](https://github.com/ALSETLab/S3DK#development-history-and-oss-release)Development History and OSS Release

The S3DK was developed within the NER-funded STRONgrid project ([link](http://www.nordicenergy.org/project/smart-transmission-grid-operation-and-control/)), where Statnett SF commissioned the implementation to the software development provider, Enfo AS. The concept, specifications and requirements where developed jointly by Statnett (Luigi Vanfretti, Stig Løvlund and Jan Ove Gjerde), KTH SmarTS Lab (Luigi Vanfretti) and Enfo AS (Vemund H. Aarstrand). During the development, many researchers at KTH SmarTS Lab (and other institutions) have contributed towards this software through testing, functionality requirements and utilization.

### [](https://github.com/ALSETLab/S3DK#development-status)Development Status

In 2016, Statnett authorized the release of the excecutables and source of the S3DK.

Since then,  [ALSETLab](http://alsetlab.com/)  researchers are working hard in curating it, so that all of the software can be shared in a functioning and reliable state.

The future development and maintainance depends directly on the research funding availability.

If you wish to see the software be maintained and developed, you can contribute yourself with code, or get in contact with Luigi Vanfretti to arrange a development contract that will support students/researchers/developers to maintain the software.
