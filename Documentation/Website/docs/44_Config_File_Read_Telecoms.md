

![](https://lh5.googleusercontent.com/8UsVCUvP3qfokvx8KtVQnb2OJeYQFdy3QdGSXagMpnc3uVOsvIL4YY-WyRjji5GqEPeBFPKLyaIqoUx0-Iq2elr-i6uMm_tbivK_S-62Fb4GD1q_BppBHcO_Kh_oPKKIB8KslEW2)
44 Config File Read Telecoms VI takes the VI 40 Config File Path and uses it to help set the Telecoms ID, IP, and Port. The Front Panel outputs the ID, IP, and Port configured from this VI.


![](https://lh4.googleusercontent.com/N8virnJvdlNXsMBdbYJi262q9RPCAaUh5_5ZZDUbu_ECBEDbVDJLSFYTC0q8q-WnJBHFseVEJ6uWTfwdpReFX9x8kT41AtmbAN5L1A2-6KhbrPon972fg_JBr4eZOb2DVQnpUqe6)

44 Congi File Read Telecoms starts with the VI 40 Config File Path, which provides a configuration file path (teal wire.) The file is given to the National Instruments sub-VI, Open Config Data(compatibility), which returns a reference number, and any errors. A second NI sub-VI, Read Key (String) is used to read the value associated with each Key, either ID, IP, or Port, which is configured via 40 Config File Path and Open Config Data(compatibility). These values associated with each key are sent to the Front Panel. The reference number, as well as any errors found are transferred through each Read Key (String) VI. The values are not written however, as the last sub-VI, Close Config Data, is wired False.
