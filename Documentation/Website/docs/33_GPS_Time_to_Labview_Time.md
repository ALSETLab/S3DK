

**![](https://lh6.googleusercontent.com/o_dDcwbUbTLnIW9CF6qKurMotFNOZjw5s3t5jf6ouYMt1TdXvyPaRwehRMlY3el3wyFAz5jks4iGM6y349wkt-dA31SvkYNBzY9pA-FoTC1chjJ7I6ZENF4VNSdJ9c1Ye5TkJAbj)**
33 GPS Time to LabVIEW Time takes three inputs, the GPS Time, GPS Date, and the Century to output the time in a similar format in LabVIEW, used for creating a global time variable to create the synchrophasors. The Front Panel (above) displays all of this information.

![](https://lh4.googleusercontent.com/_tnkCddZCG7vmi_fpjLW_ccdnj4noDfEfisQ1TPJYSlh_mCRjVCL-IG78jDIilKQnVTBZHaXonPdDyVW4ffItzMKHHOL7b-uM93Lzqb1MuhzPZtnnmQz6kcsbitoC-ZsV8hFDq0P)
ATTENTION: The GPS Time must be input in the format HR:MIN:S.MS The Date must be input in the format MM/DD/YY **NOT** MM/DD/YYYY

The Block Diagram (above) starts with the input GPS Time and GPS Date. ATTENTION: The GPS Time must be input in the format HR:MIN:S.MS The Date must be input in the format MM/DD/YY **NOT**  MM/DD/YYYY. Both the GPS Time and GPS Date are converted into strings based on the format as stated in ATTENTION. Each string value excluding the millisecond time is bundled to a cluster, and converted into a LabVIEW Time Stamp. LabVIEW Time Stamp does not support millisecond when bundling, so the millisecond value is added to the Time Stamp once it has been created. The Time Stamp is then sent to the Front Panel as output.
