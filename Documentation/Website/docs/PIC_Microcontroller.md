

Notes on provided document:

-   IDE downloaded from (Make sure to download version 8.50 or later, the download is located under MPLAB IDE Archives in the middle of the page. You will need to make an account with Microchip to download.): [http://www.microchip.com/development-tools/pic-and-dspic-downloads-archive](http://www.microchip.com/development-tools/pic-and-dspic-downloads-archive)
    
-   Compiler downloaded from:[https://www.microchip.com/Developmenttools/ProductDetails/SW006011](https://www.microchip.com/Developmenttools/ProductDetails/SW006011)
    
-   Actual code is given in the ZIP file from OpenPMU, located under: OpenPMU_V1 → SourceCode → OpenPMU PIC PLL Code - V5.1 → OpenPMU PIC - V5.1
    

-   Download this code, and keep it in an easy to access location
    

https://www.microchip.com/forums/m671900.aspx

-   Problem now: Locate the file: c:\Program Files\Microchip\MCC18\Ikr\18f2525.ikr
    

-   Solutions: Project → Build Project → Project → MPLINK Linker: check the box “Use Alternate Settings” and change the text box from:
    

/m"$(BINDIR_)$(TARGETBASE).map" /w /o"$(BINDIR_)$(TARGETBASE).cof"

To

/m"$(BINDIR_)$(TARGETBASE).map" /w /p18f2525 /o"$(BINDIR_)$(TARGETBASE).cof"

  

-   Project → Build Project → Project → Directories: if you haven’t already, make sure that your path is C:\Program Files\... or C:\Program Files(x86)\... depending on what you’re using.
    
-   Right click on 18f2525.lkr, click “Locate Missing File.” The file you want is under: C:\Program Files (x86)\Microchip\MCC18\bin or C:\Program Files \Microchip\MCC18\bin depending on what system you’re using. Find the file 18f2525_g.lkr and double click.
    

  

-   Once all of these are completed, try building.
