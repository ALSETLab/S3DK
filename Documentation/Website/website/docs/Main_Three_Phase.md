
![](https://lh4.googleusercontent.com/kXpklRuKWyEeybiG8O6j1eX2bQJs9vuMOhVPl7DGCJjfSfJi9W22V-YkXq3CdlGL990sYg7cDywGDKwGnIZkjr2hto7q3iQShAHLXYdrJwyM929IOLq8AVzYY9TMe8XmL-a5puoO)

  The VI 00 Main (three phase) is almost identical to the other VI 00 Main (single phase). Most of the explanations for how the three phase VI works is written in the single phase document. All that will be discussed in this document are the differences. 

![](https://lh3.googleusercontent.com/_gVtp5jaCuYsKVdXPO29NmM8D7TRJQOdPZ7KCrl_4M0njwXCpF7mo9rtliZphLV5Gm-GXgA80zlpjAoc3PsXIKAviXO8l5x3Oke5wBBt0ZQbbdTAaj_q8x7ehnswQ2yLb_i7d5V_)ATTENTION: You can select which phase and amplitude are sent to the Front Panel as output.

  
The first difference starts **1**, where the split signals splits each signal. Like the single phase, the GPS Lock and Time data are sent forward while the waveform is sent to the Tone Measurements and Amplitude and Level Measurements. Unlike the single phase VI, three phase VI first splits each signal, then re-combines each waveform into waveform data with the merge signal function. At **2**, the second difference is present. Above **2**, instead of the frequency being sent, the average frequency is found through 22 Frequency Average. Below **2**, instead of sending the single phase, the phase and amplitude levels need to be split and found using 21 Symmetrical Components. This finds and returns the amplitude and phase of one of the waveforms. At **3**, ATTENTION: You can select which phase and amplitude are sent to the Front Panel as output. To change the output, set the wires connecting Amplitude and Phase from 21 Symmetrical Components to which voltage amplitude and phase angle.
