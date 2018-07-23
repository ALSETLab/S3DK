

**  
![](https://lh6.googleusercontent.com/py8jmurMjiEbD9-rKMngwHfFi_QZF5bz9OayWsWkgcPLFSlxvSrXK552SzGxTcYldbUGfJHizpJFjzh3U5ABcfOs9QWXtsVlx0yhCQc14FHnVB_EiLgV9eEx55fZGlnIEJCSXGlt)**

32 GPS Time Code Parser outputs over 10 output variables, all related to the inputs GPS Time Data and CPU Time in.

  
![](https://lh5.googleusercontent.com/8AIrNKAj0ppFXLOYHdxHUosviQk7HohSwmkbv_Lwc67yyZHQfLxm_b6gxb0F8KGG9D8xhTPwnFrVxO4on2QRVbIsqoyi6SgT7sI6i2EvUfLDyfQSHVvNgY6XhCUTskwLqrF7xe6P)  
  

ATTENTION: The GPS Time Code must have the following format:
(The GPS Time Code should automatically be in this format)

|      Value     |        Format       |    Example   | String Character Number |
|:--------------:|:-------------------:|:------------:|:-----------------------:|
|    Clock ID    |        $CLOCK       |    $PSHAR    |            5            |
|   Time Stamp   |     HR:MIN:S:MS     | 09:01:31.192 |            12           |
|      Date      |       MM/DD/YY      |   10/06/18   |            8            |
|   Time Valid   |        A or V       |       A      |            1            |
|  PLL Frequency |          ##         |      10      |            2            |
|    Latitude    | ####.#### (4) . (4) |   5434.7912  |            9            |
|  Latitude Sign |   N or E or S or W  |       N      |            1            |
|    Longitude   | ####.#### (5) . (4) |  00556.2138  |            10           |
| Longitude Sign |   N or E or S or W  |       S      |            1            |
| Last Good Lock |        ##.##*       |    08:22*    |            5            |
Also NOTE:

-   Each value is separated with a COMMA. There should be a total of 9 commas.
    
-   The Clock ID starts with a $, which is not included in the character input number.
    
-   The Last Good Lock ends with a *, which is not included in the character input number.
    

  

32 GPS Time Code is sent as a large string, which is split into each of the specific string variables. The GPS Time and GPS Date are sent to the VI 33 GPS Time to LabVIEW Time to convert the times and dates into a LabVIEW Time Stamp. Whether or not the time is valid is determined, with A being a valid time and V being an invalid time. The outcome of the Time Valid variable determines the value of the GPS Lock. Finally, CPU Time is simply input and output. All of the other variables as well are sent as output to the Front Panel.
