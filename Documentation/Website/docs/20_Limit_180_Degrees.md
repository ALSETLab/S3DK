![](https://lh4.googleusercontent.com/VH3teY-SCDJmUmVjW_a3L4tTCXvLmtvtA7lWYYJIxHCOsxWOJQh3LZhD45FNTSD6oFkS2ZXeS0Us7GgpctnmrGdPVwu-iKJAt4Wsgo_5wNXzvDQM-66lhg1EmqeTsJjWHH2W4p1w)

  20 Limit 180 Degrees VI takes an angle from an NI-DAQmx and outputs a new angle between 0 and 180 degrees. 
  
![](https://lh5.googleusercontent.com/pt05b-7M3r2gXnjZ0D4ScZKY5jvE0qL-72rja0B6SkaYDiXUaEAwZlfLLieybw4f8gvpv7nb0CKHybzykQCsoM6nH6ggY9pmfdBK_piQL9iFaX7vXXT7skifY3xMA4KRrnX8R1AY)

The Limit 180 Degrees starts with an angle received by the NI-DAQmx. The value of the angle in is divided by 180/π, to convert from degrees to radians. Simultaneously, the sine and cosine of the angle in radians are calculated. After the sine calculation, the sign of said calculation is sent forward. After the cosine calculation, the inverse cosine of that value is found, which is converted back to degrees. The value of the sign of the sine calculation is then multiplied by the newly converted inverse cosine value to find the angle, which is sent to the Front Panel.
